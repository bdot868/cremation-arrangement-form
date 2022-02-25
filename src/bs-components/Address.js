import React from 'react';
import SelectField from './SelectField';
import NumberFormat from 'react-number-format';


export default class AddressFields extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formControls: {
        facilityName: {
          value: ''
        },
        streetAddress: {
          value: ''
        },
        city: {
          value: ''
        },
        stateField: {
          value: ''
        },
        phoneNumber: {
          value: ''
        }
      },
      facilityType: '',
      locationTypes: props.locationTypes
    };

    this.handleChange = this.handleChange.bind(this);
    this.locationFromSelect = this.locationFromSelect.bind(this);
  }

  locationFromSelect = (data) => {
    // console.log(data);
    this.setState({
      facilityType: data
    });
    this.props.locatedType(data);
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
    }, () => this.props.dataFromAddress(this.state) );
  }

  handlePhoneChange = (value) => {
    this.setState({
      formControls: {
        ...this.state.formControls,
        phoneNumber: {
          value: value.formattedValue
        }
      }
    }, () => this.props.dataFromAddress(this.state) );
  }



  render(){
    let facility = this.state.facilityType;
    const locationTypes = this.props.selectData;
    // console.log(this.props);
    let language = this.props.chosenLanguage;
    // console.log(language);
    let residence = false;

    if(facility === 'Residence'){
      residence = true;
    } else if (facility === 'Residencia') {
      residence = true;
    }

    return (
      <div>
        <div className="address">
          <SelectField
            label={language.labels.currentLocation}
            option={locationTypes}
            selectInfo={this.locationFromSelect}
            placeholder={language.choose}
            language={language.lang}
          />
        </div>
        <div className="ui equal width form">
          <div className="fields">
            {!residence && <div className="field">
               <label>{language.labels.facility}*</label>
              <input type="text" name="facilityName" placeholder={language.labels.facility} value={this.state.formControls.facilityName.value} onChange={this.handleChange} required/>
              <div className="invalid-feedback">
                Enter the name of the Facility
              </div>
            </div>}
            <div className="field">
              <label>{language.labels.streetAddress}{residence && '*'}</label>
              {facility === 'Residence'
                ? <input type="text" name="streetAddress" placeholder={language.labels.streetAddress} value={this.state.formControls.streetAddress.value} onChange={this.handleChange} required/>
                : <input type="text" name="streetAddress" placeholder={language.labels.streetAddress} value={this.state.formControls.streetAddress.value} onChange={this.handleChange} />
              }
              <div className="invalid-feedback">
                Enter the full street address
              </div>
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label>{language.labels.city}{residence && '*'}</label>
              {facility === 'Residence'
                ? <input type="text" name="city" placeholder={language.labels.city} value={this.state.formControls.city.value} onChange={this.handleChange} required/>
                : <input type="text" name="city" placeholder={language.labels.city} value={this.state.formControls.city.value} onChange={this.handleChange} />
              }
              <div className="invalid-feedback">
                Enter a valid City
              </div>
            </div>
            <div className="field">
              <label>{language.labels.state}{residence && '*'}</label>
              {facility === 'Residence'
                ? <input type="text" name="stateField" placeholder={language.labels.state} value={this.state.formControls.stateField.value} onChange={this.handleChange} required/>
                : <input type="text" name="stateField" placeholder={language.labels.state} value={this.state.formControls.stateField.value} onChange={this.handleChange} />
              }
              <div className="invalid-feedback">
                Enter a valid State
              </div>
            </div>
            <div className="field">
              <label>{language.labels.phoneNumber}</label>
              <NumberFormat displayType="input" name="phone" placeholder="(000) 000 - 0000" format="(###) ### - ####" onValueChange={this.handlePhoneChange} />
              {/*<div className="invalid-feedback">
                Please provide a valid phone number.
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
