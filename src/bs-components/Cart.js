import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Cart = (props) => {
  // console.log(props);
  return(
    <div className="font-16">
      <h5><strong>{props.chosenLanguage.packageDetails}</strong></h5>
      <p>{props.chosenLanguage.packageTitle} <span className="cart-price">$1,995<span className="asterisk">*</span></span></p>
      <div>
      <p>{props.chosenLanguage.featuresHeadline}:</p>
        <ul>
          {ReactHtmlParser(props.chosenLanguage.packageFeatures)}
          <li>$58 {props.chosenLanguage.products.alternativeContainer.title}</li>
          <li>$34 {props.chosenLanguage.products.urn.title}</li>
        </ul>
      </div>
      <p className=""><em>{props.chosenLanguage.packageDisclaimer}</em></p>
    </div>
  )
}

export default Cart;
