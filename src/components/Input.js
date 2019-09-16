import React, { Component } from "react";
import PropTypes from 'prop-types';

class Input extends Component {
	constructor() {
    super();
    this.state = {
      error: true
    };
  }

	handleUserInput = (e) => {
    const type = e.target.type;
    const value = e.target.value;
    this.setState({[type]: value},
                  () => { this.validate(type, value) });
  }

	validate = (type, value) => {
		if(type === 'text'){
			if((/^[a-zA-Z]/.test(value)) && (value.length > 0)){
				this.setState({error: false});
			} else {
				this.setState({error: true});
			}
		} else if(type === 'email') {
			if((/\S+@\S+\.\S+/.test(value)) && (value.length > 0)){
				this.setState({error: false});
			} else {
				this.setState({error: true});
			}
		}
	}

	render() {
		return (
			<div className="form-group">
				<label for={this.props.id} className="form-label">{this.props.title}</label>
				<input
					className={ `form-input ${this.state.error ? 'invalid' : 'valid'}` }
					name={this.props.name}
					id={this.props.id}
					type={this.props.inputType}
					onChange={this.handleUserInput}
					placeholder={this.props.placeholder}
				/>
			</div>
		)
	}
}

Input.propTypes = {
	inputType: PropTypes.oneOf(['text', 'email']).isRequired,
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
};

export default Input;
