import React from 'react';
import ReactHtmlParser from "react-html-parser";
import ProductModal from './ProductModal';

class Package extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.getProducts,
      containerModal: false,
      urnModal: false
    }
  }

  saveAndContinue = (e) =>{
    e.preventDefault()
    this.props.nextStep()
  }

  showContainerModal = () => {
    this.setState({
      containerModal: true
    })
  }

  showUrnModal = () => {
    this.setState({
      urnModal: true
    })
  }

  render (){
    const { products } = this.state
    const language = this.props.chosenLanguage;
    // console.log(language);
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-xs-12">
              {/*<p className="lora-font dz-blue-font font-24 text-center text-md-left">
                You are taking an important first step in making cremation arrangements.
              </p>*/}
              <p className="goudy green-font font-40 text-center text-md-left">
              {language.marketingHeadline}
              </p>
            </div>
            <div className="col-md-4 col-xs-12 text-center">
              <button className="primary-btn oma" onClick={this.saveAndContinue}>{language.startBtn}</button>
              <p>{language.orCallText} <a class="phoneNumber green-font" href={language.contactHref}>{language.contactNumber}</a></p>
            </div>
          </div>{/* end row*/}
          <div className="row mt-20">
            <div className="col-12">
              <p className="text-lg-left text-center">
              <a class="gold-font" href={language.lang === "sp" ? "/es/cremation-services" : "/cremation"}>{language.cremationPageLink}</a>
              <br />
              <a class="gold-font" href={language.lang === "sp" ? "/es/price-list" : "/price-list"} target="_blank">{language.gplLink}</a>
              </p>
            </div>
          </div>
          <div className="row mt-20 align-items-lg-center">
            <div className="col-md-8 col-xs-12">
              <p className="lora-font gold-font text-center text-md-left cremation-package-title">
                {language.packageTitle}
              </p>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="text-center font-30"><p className="align-middle"><span>$</span>1,995<span className="asterisk">*</span></p></div>
            </div>
          </div>{/* end row*/}
          <div className="row">
            <div className="package-features">
              <p>{language.featuresHeadline}</p>
              <ul>
                {ReactHtmlParser(language.packageFeatures)}
                <li className="product-modal" onClick={this.showContainerModal}>{language.products.alternativeContainer.title}</li>
                <ProductModal show={this.state.containerModal} product={language.products.alternativeContainer} onHide={() => this.setState({ containerModal: false})}/>
                <li className="product-modal" onClick={this.showUrnModal}>{language.products.urn.title}</li>
                <ProductModal show={this.state.urnModal} product={language.products.urn} onHide={() => this.setState({ urnModal: false})}/>
              </ul>
            </div>
          </div>{/* end row*/}
          <div className="row">
            <div className="col-md-8 col-xs-12">
                <p className="disclaimer"><em>{language.disclaimer}</em></p>
            </div>
            <div className="col-md-4 col-xs-12 text-center">
              <button className="primary-btn oma" onClick={this.saveAndContinue}>{language.startBtn}</button>
            </div>
          </div>{/* end row*/}
        </div>
    );
  }
}

export default Package;
