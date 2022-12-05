import React, { useState } from 'react'
import './Image.css'
import MyVerticallyCenteredModal from '../modal/Modal'
import { BiLinkAlt, BiExpandAlt } from "react-icons/bi";


const Image = ({ src }) => {
    const { image, description } = src
    const [modalShow, setModalShow] = useState(false);

    
    const geting = (src) => {
        const { link } = src
        console.log(link)
    }

    return (
        <>
            {modalShow && <MyVerticallyCenteredModal show={modalShow} src={src}
                onHide={() => setModalShow(false)}
            />}
            <div className="col-md-3 col-sm-4">
                <div className="card my-3" >
                    <img className="card-img-top img img-fluid image-class" src={image} />
                    <div className='overlay'>
                        <div className='content d-flex'>
                            <h3 className='mx-3' onClick={() => setModalShow(true)}><BiExpandAlt /></h3>
                            <h3 className='mx-3' onClick={() => geting(src)}><BiLinkAlt /></h3>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Image