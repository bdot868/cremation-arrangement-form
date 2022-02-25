import React from 'react';
import { Form } from 'react-bootstrap'

export default class NameForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formControls: {
        firstName: {
          value: ''
        },
        middleName: {
          value: ''
        },
        lastName: {
          value: ''
        }
      },
      contactFor: this.props.whichContact
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    }, () => this.props.dataToChild(this.state) );

  }



  render(){
    // console.log(this.props);
    const language = this.props.chosenLanguage;

    return (
        <div className="ui form">
          <h4>{this.props.whichContact}</h4>
          <div className="three fields">
            <div className="field">
              <label>{language.labels.firstName}<span>*</span></label>
              <input type="text" name="firstName" placeholder={language.labels.firstName} value={this.state.formControls.firstName.value} onChange={this.handleChange} required/>
              <div className="invalid-feedback">
                Please provide a first name.
              </div>
            </div>
            <div className="field">
              <label>{language.labels.middleName}</label>
              <input type="text" name="middleName" placeholder={language.labels.middleName} value={this.state.formControls.middleName.value} onChange={this.handleChange} />
            </div>
            <div className="field">
              <label>{language.labels.lastName}<span>*</span></label>
              <input type="text" name="lastName" placeholder={language.labels.lastName} value={this.state.formControls.lastName.value} onChange={this.handleChange} required/>
              <div className="invalid-feedback">
                Please provide a last name.
              </div>
            </div>
          </div>
        </div>
    )
  }
}
