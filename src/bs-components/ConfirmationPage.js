import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import Cart from './Cart';
import FuneralHome from './FuneralHomeInfo';
import {Jumbotron, Image, Button, Card, Row, Col, Table} from 'react-bootstrap';

const ConfirmationModal = (props) => {
  // console.log(props);
  const products = props.chosenLanguage.products;
  const confirmations = {
    english: {
      beforeNeed: `<p>Thank you for taking this important step in making cremation arrangements in advance.</p>
      <p>One of our caring and knowledgeable Client Engagement Specialists will be contacting you shortly and will be able to assist you in answering any questions you may have.</p>
      <p> ${props.lovedOne.fname !== " " //display a different message depending on self vs love one
        ? 'Having been a trusted funeral, cemetery and cremation provider for over 100 years, we have found that many people are unprepared when the death of a loved one occurs. The decisions required of you and your family within a few short hours can be overwhelming; planning ahead may give you the peace of mind in knowing that you\'ve done what you can in preparation.'
        : 'Having been a trusted funeral, cemetery and cremation provider for over 100 years, we have found that many consider advanced preparations as a final act of love for family or loved ones. The decisions required of your family within a few short hours can be overwhelming. By planning ahead, you may have the peace of mind of knowing that you’ve done what you can to help lessen the strain.'
      }</p>`,
      atNeed: `<p>Thank you for selecting Forest Lawn as your cremation provider. We are honored
      to be of service at this ${props.atNeedStatus === 'At Need' ? 'most ' : ''}difficult time, and it is our goal to assist you as
      best as we can.</p>
      <p>One of our caring and experienced Customer Care Representatives will be contacting you shortly. They will be able to answer any questions you may have and explain the next steps.</p>`,
    },
    spanish: {
      beforeNeed: `<p>Gracias por tomar este importante paso al hacer los arreglos de cremación por anticipado.</p>
      <p>Uno de nuestros atentos y expertos especialistas se comunicará con usted en breve y podrá ayudarlo a responder cualquier pregunta que pueda tener.</p>
      <p> ${props.lovedOne.fname !== " "
      ? 'Siendo un proveedor confiable de funerales, cementerios y cremaciones durante más de 100 años, hemos descubierto que muchas personas no están preparadas cuando ocurre la muerte de un ser querido. Las decisiones que se requieren de usted y sus seres queridos en un corto período de tiempo pueden ser abrumadoras; planificar anticipadamente puede darle la tranquilidad de saber que ha hecho todo lo necesario en preparación. '
      : 'Siendo un proveedor confiable de funerales, cementerios y cremaciones durante más de 100 años, hemos descubierto que muchos consideran los preparativos con anticipación como un acto final de amor por la familia o los seres queridos. Las decisiones que se requieren de su familia en un corto período de tiempo pueden ser abrumadoras. Si planifica con anticipación, puede tener la tranquilidad de saber, que ha hecho todo lo posible para ayudar a reducir esa tensión.'
      }</p>`,
      atNeed: `<p>Gracias por elegir a Forest Lawn como su proveedor de cremación. Nos sentimos honrados de poder servirle en este momento tan difícil, y nuestro objetivo es ayudarlo de la mejor manera posible.</p>
      <p>Uno de nuestros atentos y experimentados representantes se comunicará con usted en breve. Ellos podrán responder cualquier pregunta que pueda tener y explicarle los siguientes pasos.</p>`,
    },
  }

  console.log(confirmations);
  if (props.chosenLanguage.lang === 'en'){
    var  confirmation = confirmations.english;
  } else {
    var confirmation = confirmations.spanish;
  }

  console.log(confirmation);


  const sendEmail = async (event) => {
    //Send details to customer
    try {
      // const form = await axios.post('http://flcoachellavalley.web02.forestlawn.intra/wp-content/themes/sdwpd-bs4/details.php', {
      const form = await axios.post('https://flcoachellavalley.com/wp-content/themes/sdwpd-bs4/details.php', {
          clientFname: props.client.fname.value,
          clientMname: props.client.mname.value,
          clientLname: props.client.lname.value,
          clientEmail: props.email,
          atNeed: props.atNeedStatus,
          lovedOneFname: props.lovedOne.fname.value,
          lovedOneMname: props.lovedOne.mname.value,
          lovedOneLname: props.lovedOne.lname.value,
          language: props.chosenLanguage.lang
        })
        console.log('returned data:', form);
        alert(props.chosenLanguage.alert)
    } catch (e) {
      // console.log(`axios request failed: ${e}`);
    }
  }

        //Print function
        function printDiv() {
           var printContents = document.getElementById("details-page").innerHTML;
           var originalContents = document.body.innerHTML;

           document.body.innerHTML = printContents;
           window.print();
           document.body.innerHTML = originalContents;
        }

        console.log(props);

  return (
  <div className="confirmation-page">
    <div id="details-page">
      <h2>{props.chosenLanguage.received}</h2>
      {props.atNeedStatus === 'Before Need'
        ?
        <div>
          {ReactHtmlParser(confirmation.beforeNeed)}
        </div>
        :
        <div>
          {ReactHtmlParser(confirmation.atNeed)}
        </div>
      }
      <div className="confirmation-container container">
        <Row>
          <Col className="cart" xs={12} md={4}>
            <Cart chosenLanguage={props.chosenLanguage} />
          </Col>
          <Col className="products" xs={12} md={4}>
            <Image src={products.urn.imageSrc} />
            <p><strong>{products.urn.title}</strong></p>
            <Image src={products.alternativeContainer.imageSrc} />
            <p><strong>{products.alternativeContainer.title}</strong></p>
          </Col>
          <Col className="funeral-home" xs={12} md={4}>
            <FuneralHome chosenLanguage={props.chosenLanguage} />
          </Col>
        </Row>
      </div>
      {props.atNeedStatus === 'Before Need' &&
      <p><em>
        {props.chosenLanguage.insuranceDisclaimer}
      </em></p>}
    </div>
    <button className="primary-btn email-btn" onClick={sendEmail}>{props.chosenLanguage.emailBtn}</button>
    <button className="primary-btn" onClick={printDiv}>{props.chosenLanguage.printBtn}</button>
  </div>
  )
}

export default ConfirmationModal;
