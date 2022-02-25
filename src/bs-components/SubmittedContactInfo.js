import React from 'react';
import NumberFormat from 'react-number-format'

class SubmittedContactInfo extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    const client = this.props.data.client
    return (
      <div>
        <p><strong>{this.props.chosenLanguage.labels.name}: </strong> {client.firstName} {client.middleName} {client.lastName}</p>
        <p>{this.props.chosenLanguage.labels.email}: {client.email}</p>
        <p>{this.props.chosenLanguage.labels.phoneNumber}: <NumberFormat value={client.phone} displayType={'text'} format={'(###) ### - ####'} /></p>
      </div>
    )
  }
}

export default SubmittedContactInfo;
