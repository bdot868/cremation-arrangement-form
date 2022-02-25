import React from 'react'
import { Image, Modal } from 'react-bootstrap'

const ProductModal = (props) => {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.product.imageSrc} fluid/>
          <p><strong>
            {props.product.description}<span className="product-description">{props.product.price}</span>
          </strong></p>
          <p className="disclaimer"><em>
          {props.product.disclaimer}
          </em></p>
      </Modal.Body>
    </Modal>
  )
}

export default ProductModal;
