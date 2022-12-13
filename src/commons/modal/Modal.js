import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  const { src } = props
  // console.log(src)
  return (
    <Modal
      style={{}}
      {...props}
      size="xl"
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
          <img style={{width:'100%',height:'100%' }} src={src.image}/>
          </div>
          <div className='col-md-6'>
          <h5 className=''>Language</h5>
          <p className=''>{src.language}</p>
          <h5 className=''>Technology Stack</h5>
          <p className=''>{src.technologystack}</p>
          <h5 className=''>Description</h5>
          <p className='text-justify'>{src.description}</p>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal

