import React from 'react'

const FuneralHome = (props) => {
  let cemeteryDetails;
  if(props.choice === 'Cathedral City'){
    cemeteryDetails = <div>
      <h5><strong>Funeral Home</strong></h5>
      <p>Cathedral City</p>
    </div>
  } else if (props.choice === 'Indio') {
    cemeteryDetails = <div>
      <h5><strong>Funeral Home</strong></h5>
      <p>Indio</p>
    </div>
  } else {
    cemeteryDetails = <div>
      <h5><strong>Funeral Home</strong></h5>
      <p>Coachella Valley</p>
    </div>
  }
  return (
    <div>
     <h5><strong>{props.chosenLanguage.labels.funeralHome}</strong></h5>
      <p>Forest Lawn Memorial-Parks & Mortuaries</p>
      {/*
      <p>600 E. FOOTHILL BOULEVARD,<br /> MONROVIA, CA 91016<br /> FD 221</p>
      */}
      <h5><strong>{props.chosenLanguage.labels.funeralDirector}</strong></h5>
      <p>Larry Davis</p>
      <h5><strong>{props.chosenLanguage.labels.phoneNumber}</strong></h5>
      <p><a href={props.chosenLanguage.contactHref}>{props.chosenLanguage.contactNumber}</a></p>
    </div>
  )
}

export default FuneralHome;
