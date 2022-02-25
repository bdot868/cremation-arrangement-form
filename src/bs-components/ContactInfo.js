import React from 'react';
import { formatPhoneNumber } from 'react-phone-number-input';
import NumberFormat from 'react-number-format';



export default class ContactInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formControls: {
        email: {
          value: ''
        },
        phone: {
          value: ''
        }
      }
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

  handlePhoneChange = (value) => {

    this.setState({
      formControls: {
        ...this.state.formControls,
        phone: {
          value: value.formattedValue
        }
      }
    }, () => this.props.dataToChild(this.state) );
  }



  render(){
    const language = this.props.chosenLanguage;

    return (
        <div className="ui form">
          <div className="two fields">
            <div className="field">
              <label>{language.labels.email}<span>*</span></label>
              <input type="email" name="email" placeholder={language.labels.email} value={this.state.formControls.email.value} onChange={this.handleChange} required/>
              <div className="invalid-feedback">
                Please provide a valid email address.
              </div>
            </div>
            <div className="field">
              <label>{language.labels.phoneNumber}*</label>
              {/*<input type="text" name="phone" maxlength="10" placeholder="Phone Number" value={this.state.formControls.phone.value} onChange={this.handleChange} />*/}
              <NumberFormat displayType="input" name="00N1N00000FPpio" placeholder="(000) 000 - 0000" format="(###) ### - ####" onValueChange={this.handlePhoneChange} required/>
              <div className="invalid-feedback">
                Please provide a valid phone number.
              </div>
            </div>
          </div>
        </div>
    )
  }
}
