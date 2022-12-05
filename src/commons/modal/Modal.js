import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  const { src } = props
  // console.log(src)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {src.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='row'>
          <div className='col-md-6 text-center'>
          <img src={src.image}/>
          </div>
          <div className='col-md-6 text-center'>
          <h5 className=''>Description</h5>
          <p className=''>{src.description}</p>
          <h5 className=''>Language</h5>
          <p className=''>{src.language}</p>
          <h5 className=''>Technology Stack</h5>
          <p className=''>{src.technologystack}</p>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal

