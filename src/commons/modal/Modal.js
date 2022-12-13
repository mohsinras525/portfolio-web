import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  const { src } = props
  return (
    <Modal
      style={{maxHeight:'100vh'}}
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='row m-auto'>
          <div className='col-md-6 text-center'>
          <img style={{width:'100%',height:'100%',objectFit:'scale-down' }} src={src.image}/>
          </div>
          <div className='col-md-6'>
          <h5 className='' style={{fontFamily:'cursive'}}>Title</h5>
          <p className=''>{src.title}</p>
          <h5 className='' style={{fontFamily:'cursive'}}>Technology Stack</h5>
          <p className=''>{src.technologystack}</p>
          <h5 className='' style={{fontFamily:'cursive'}}>Description</h5>
          <p className='text-justify'>{src.description}</p>
          <h5 className='' style={{fontFamily:'cursive'}}>Link</h5>
          <p className='text-justify'><a href={src.link}>{src.link}</a></p>
          <h5 className='' style={{fontFamily:'cursive'}}>Login Credentials</h5>
          <p className='text-justify'>Email : {src.dummyemail}  Password : {src.password}</p>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal

