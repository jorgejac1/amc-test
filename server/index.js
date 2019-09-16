import "babel-polyfill";
import express from "express";
import bodyParser from "body-parser";
import mail from "./mail";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.send('Server is working. Please post at "/sendOrder" to submit a message.');
});

// API will receive data from form
app.post("/sendOrder", (req, res) => {
  const { email = "", name = "", addedProducts = "" } = req.body;

  //call function to send email
  mail({ email, name, text: addedProducts })
    .then(() => {
      console.log(`Sent the message "${addedProducts}" from <${name}> ${email}.`);
      res.redirect("/#success");
    })
    .catch(error => {
      console.log(
        `Failed to send the message "${addedProducts}" from <${name}> ${email} with the error ${error &&
          error.message}`
      );
      res.redirect("/#error");
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
