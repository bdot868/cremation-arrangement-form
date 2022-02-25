import React from 'react';
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";
import FormPartB from './FormPartB';
import Checkbox from './Checkbox';
import NameForm from './NameForm';
import ContactInfo from './ContactInfo';
import Cart from './Cart';
import SubmittedContactInfo from './SubmittedContactInfo';
import FuneralHome from './FuneralHomeInfo';
import SelectField from './SelectField';
import { Button, Form } from 'react-bootstrap';


export default class CremationForm extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        selectedBox: null,
        validated: false,
        cemeteryLocation: null,
        mortuaryCode: null,
        client: {
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          phone: ''
        },
        atNeed: 'Before Need',
        lovedOne: {
          firstName: '',
          middleName: '',
          lastName: '',
          location: '',
          address: {
            facility: '',
            streetAddress: '',
            city: '',
            stateField: '',
            phoneNumber: ''
          },
          relationTo: ''
        }
      };
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  cemeteryChoice = (choice) => {
    let mortuaryCode;
    if (choice === 'Coachella'){
      mortuaryCode = 'CA'
    } else if (choice === 'Cathedral City') {
      mortuaryCode = 'CC'
    } else {
      mortuaryCode = 'IN'
    }

    // console.log(mortuaryCode);
    this.setState({
      ...this.state,
      cemeteryLocation: choice,
      mortuaryCode: mortuaryCode
    })
  }

  dataFromNameForm = (data) => {
    this.setState({
      client: {
        ...this.state.client,
        firstName: data.formControls.firstName.value,
        middleName: data.formControls.middleName.value,
        lastName: data.formControls.lastName.value,
      }
    })
    this.props.clientName(data.formControls)
  }

  dataFromContactInfo = (data) => {
    this.setState({
      client: {
        ...this.state.client,
        email: data.formControls.email.value,
        phone: data.formControls.phone.value,
      }
    })
  }

  lovedOneName = (data) => {
    this.setState({
      lovedOne: {
        ...this.state.lovedOne,
        firstName: data.formControls.firstName.value,
        middleName: data.formControls.middleName.value,
        lastName: data.formControls.lastName.value,
      }
    })
    this.props.lovedOneName(data.formControls)
  }

  atNeed = (status) => {
    //Time of Need
    this.setState({
        atNeed: status
    })
    this.props.atNeed(status)
  }

  locationOf = (data) => {
    this.setState({
      lovedOne: {
        ...this.state.lovedOne,
        location: data
      }
    })
  }

  lovedOneAddress = (data) => {
    // console.log(data);
    this.setState({
      lovedOne: {
        ...this.state.lovedOne,
        address: {
          facility: data.formControls.facilityName.value,
          streetAddress: data.formControls.streetAddress.value,
          city: data.formControls.city.value,
          stateField: data.formControls.stateField.value,
          phoneNumber: data.formControls.phoneNumber.value
        },
      }
    })
  }

  relation = (data) => {
    // console.log(data);
    this.setState({
      lovedOne: {
        ...this.state.lovedOne,
        relationTo: data
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const checkForm = event.currentTarget;
    if (checkForm.checkValidity() !== false) {
      event.stopPropagation();

      // Send form to distribution list
      try {
        // const form = await axios.post('http://flcoachellavalley.web02.forestlawn.intra/wp-content/themes/sdwpd-bs4/salesforce.php', {
          const form = await axios.post('https://flcoachellavalley.com/wp-content/themes/sdwpd-bs4/salesforce.php', {
            cemeteryLocation: this.state.cemeteryLocation,
            mortuaryCode: this.state.mortuaryCode,
            clientFname: this.state.client.firstName,
            clientMname: this.state.client.middleName,
            clientLname: this.state.client.lastName,
            email: this.state.client.email,
            phone: this.state.client.phone,
            arrangementsFor: this.state.selectedBox,
            lovedOneFname: this.state.lovedOne.firstName,
            lovedOneMname: this.state.lovedOne.middleName,
            lovedOneLname: this.state.lovedOne.lastName,
            atNeed: this.state.atNeed,
            locationType: this.state.lovedOne.location,
            facility: this.state.lovedOne.address.facility,
            address: this.state.lovedOne.address.streetAddress,
            city: this.state.lovedOne.address.city,
            state: this.state.lovedOne.address.stateField,
            phoneNumber: this.state.lovedOne.address.phoneNumber,
            relation: this.state.lovedOne.relationTo,
            language: this.props.chosenLanguage.lang
          })
          // console.log('returned data:', form);
          this.props.email(this.state.client.email)


          // Send confirmation email to user
          try {
            const form = await axios.post('https://flcoachellavalley.com/wp-content/themes/sdwpd-bs4/confirmation.php', {
            // const form = await axios.post('http://flcoachellavalley.web02.forestlawn.intra/wp-content/themes/sdwpd-bs4/confirmation.php', {
                clientFname: this.state.client.firstName,
                clientMname: this.state.client.middleName,
                clientLname: this.state.client.lastName,
                clientEmail: this.state.client.email,
                atNeed: this.state.atNeed,
                lovedOneFname: this.state.lovedOne.firstName,
                lovedOneMname: this.state.lovedOne.MiddleName,
                lovedOneLname: this.state.lovedOne.lastName,
                language: this.props.chosenLanguage.lang
              })
              console.log('returned data:', form);
              this.props.nextStep();

          } catch (e) {
            console.log(`axios request failed: ${e}`);
          }
      } catch (e) {
        console.log(`axios request failed: ${e}`);
      } //End of form sending

    } //end of form validity check
      this.setState({
        validated: true
      })
  }

  // go back to start page
  back = (e) =>{
    e.preventDefault();
    this.props.prevStep();
  }

  // Go to confirmation page
  saveAndContinue = (e) =>{
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const language = this.props.chosenLanguage;
    // console.log(this.props);
    // console.log(this.state);
    const selectedBox = this.state.selectedBox;
    let name = this.state.client.firstName;
    let display;
    let disabled = false;
    if(selectedBox === 'self') {
      display = <div>
          <NameForm chosenLanguage={language} whichContact={language.labels.yourName} dataToChild={this.dataFromNameForm} />
          <ContactInfo chosenLanguage={language} dataToChild={this.dataFromContactInfo}/>
        </div>
    } else if (selectedBox === 'lovedOne') {
      display =
      <FormPartB
        locatedType={this.locationOf}
        address={this.lovedOneAddress}
        relationship={this.relation}
        atNeedStatus={this.atNeed}
        lovedOneInfo={this.lovedOneName}
        dataToChild={this.dataFromNameForm}
        contactData={this.dataFromContactInfo}
        chosenLanguage={language}
        selectData={this.props.selectData}
      />
    }

    return (
      <div className="ui stackable internally celled grid">
        <div className="ten wide column">
          <div>
            {ReactHtmlParser(language.formHeaderText)}
          </div>
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <SelectField
                label={language.labels.mortuary}
                value={this.props.selectData.cemeteryLocations}
                selectInfo={this.cemeteryChoice}
                placeholder={language.choose}
              />
            </div>
            <div className="form-group">
              <p><strong>{language.arrangementRecipient}</strong></p>
              <Checkbox
                value="lovedOne"
                className="oma someone"
                name="clientSelect"
                label={language.labels.someoneCheckbox}
                onChange={() => { this.setState({ selectedBox: 'lovedOne' })}}
              />
              <Checkbox
                value="self"
                className="oma myself"
                name="clientSelect"
                label={language.labels.myselfCheckbox}
                onChange={() => { this.setState({ selectedBox: 'self' }, this.props.atNeed(this.state.atNeed))}}
              />
              {display}
              {name !== '' &&
                <p className="disclaimer">
                  <em>
                    {ReactHtmlParser(language.formDisclaimer)}
                  </em>
                </p>
              }
            </div>
            <div>
              <button className="float-left primary-btn oma back" onClick={this.back}>{language.backBtn}</button>
              {/*   <button className="float-right" onClick={this.saveAndContinue}>Next</button>*/}
              {name !== '' &&
                <button className="primary-btn float-right oma submit" type="submit" disabled={disabled}>{language.submitBtn}</button>
              }
            </div>
          </Form>
        </div>
        <div className="six wide column">
          <div className="ui sticky">
            <div className="ui basic segment">
              <h4>{language.labels.cart}</h4>
              <div className="ui divider"></div>
              <Cart chosenLanguage={language} />
            </div>
            <div className="ui basic segment">
              <h4>{language.labels.funeralDetails}</h4>
              <div className="ui divider"></div>
              <FuneralHome chosenLanguage={language} choice={this.state.cemeteryLocation}/>
            </div>
            <div className="ui basic segment">
              <h4>{language.labels.submittedInfo}</h4>
              <div className="ui divider"></div>
              <SubmittedContactInfo chosenLanguage={language} data={this.state}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
