import React from 'react';
import Checkbox from './Checkbox';
import Relationship from './Relationship';
import SelectField from './SelectField';
import NameForm from './NameForm';
import Address from './Address';
import ContactInfo from './ContactInfo';



class FormPartB extends React.Component {
  constructor(props) {
    super(props)
    this.state = { timeOfNeed: null }
  }

  dataFromNameForm = (data) => {
    //client name
    this.props.dataToChild(data)
  }

  dataFromContactInfo = (data) => {
    //Phone and email
    this.props.contactData(data)
  }

  locationFromSelect = (data) => {
    //sending location selection to form component
    this.props.locatedType(data)
  }

  addressFields = data => {
    //sending Address details to form
    this.props.address(data)
  }

  relationFromSelect = (data) => {
    //sending relation to info back to Form
    this.props.relationship(data)
  }

  lovedOneName = (data) => {
    //sending loved one full name back to Form
    this.props.lovedOneInfo(data)
  }

  timeOfNeedStatus = () => {
    this.props.atNeedStatus(this.state.timeOfNeed)
  }


  render () {
    const timeOfNeed = this.state.timeOfNeed;
    let display;
    let locations;
    let relations = this.props.selectData.relationship;
    let language = this.props.chosenLanguage;

    // console.log(language);

    if(timeOfNeed === 'At Need') {
      locations = this.props.selectData.location;
      display = <div>
        <NameForm chosenLanguage={language} whichContact={language.labels.lovedOneName} dataToChild={this.lovedOneName} />
        <SelectField
          label={language.labels.relation}
          option={relations}
          selectInfo={this.relationFromSelect}
          placeholder={language.choose}
          language={language.lang}
        />
        <Address selectData={locations} chosenLanguage={language} facility={locations[0]} dataFromAddress={this.addressFields} locatedType={this.locationFromSelect}/>
      </div>
    }
     else if (timeOfNeed === 'Imminent') {
       locations = this.props.selectData.location.slice(2);
      display = <div>
        <NameForm chosenLanguage={language} whichContact={language.labels.lovedOneName} dataToChild={this.lovedOneName}/>
        <SelectField
          label={language.labels.relation}
          option={relations}
          selectInfo={this.relationFromSelect}
          placeholder={language.choose}
          language={language.lang}
          required
        />
        <Address selectData={locations} chosenLanguage={language} dataFromAddress={this.addressFields} locatedType={this.locationFromSelect}/>
      </div>
    }
     else if (timeOfNeed === 'Before Need') {
      display = <div>
      <NameForm chosenLanguage={language} whichContact={language.labels.lovedOneName} dataToChild={this.lovedOneName} required/>
      <SelectField
        label={language.labels.relation}
        option={relations}
        selectInfo={this.relationFromSelect}
        placeholder={language.choose}
        language={language.lang}
        required
      />
      </div>
    }


    return (
      <div>
        <p><strong>{language.labels.timeOfNeed}</strong></p>
        <div className="ui checkbox">
          <Checkbox
            value=""
            name="needSelect"
            label={language.labels.immediateNeedCheckbox}
            onChange={() => { this.setState({ timeOfNeed: 'At Need'}, this.timeOfNeedStatus)}}
          />
          <Checkbox
            value=""
            name="needSelect"
            label={language.labels.anticipateNeedCheckbox}
            onChange={() => { this.setState({ timeOfNeed: 'Imminent' }, this.timeOfNeedStatus)}}
          />
          <Checkbox
            value=""
            name="needSelect"
            label={language.labels.preNeedCheckbox}
            onChange={() => { this.setState({ timeOfNeed: 'Before Need'}, this.timeOfNeedStatus)}}
          />
        </div>
        {timeOfNeed !== null &&
          <div>
            <NameForm chosenLanguage={language} whichContact={language.yourName} dataToChild={this.dataFromNameForm} />
            <ContactInfo chosenLanguage={language} dataToChild={this.dataFromContactInfo} />
          </div>
         }
        {display}
      </div>
    )
  }
}

export default FormPartB;
