import React, { useState } from 'react'
import './Image.css'
import MyVerticallyCenteredModal from '../modal/Modal'
import { BiLinkAlt, BiExpandAlt } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import axios from 'axios';


const Image = ({src,getData}) => {

    console.log(src)
    const [link , setLink] = useState('')
    const { image, title} = src
    const [modalShow, setModalShow] = useState(false);
    const [deleteBtn, setDeleteBtn] = useState('false')


    const geting = (src) => {
        const { link } = src
        setLink(link)
    }

    const getId = async(src) => {
        const {_id} = src
        console.log(_id)
       
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`http://localhost:8000/api/project/remove/${_id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                const {success} = JSON.parse(result)
                console.log(success)
                if(success){
                    getData()
                }

            })
            .catch(error => console.log('error', error));
        
    }

    let user = localStorage.getItem('user')
    user =  JSON.parse(user)

    return (
        <>
            {modalShow && <MyVerticallyCenteredModal show={modalShow} src={src}
                onHide={() => setModalShow(false)}
            />}
            <div className="col-md-3 col-sm-4 col-xl-3">
                <div className="card my-3 mt-4" >
                    <img className="card-img-top img img-fluid image-class" src={image} style={{maxWidth: '100%'}}/>
                    <div className='overlay'>
                        <div className='content d-flex'>
                            <h3 className='mx-3' onClick={() => setModalShow(true)}><BiExpandAlt /></h3>
                            <h3 className='mx-3' onClick={() => geting(src)}><a href={link} target="_blank" style={{color:'white'}}><BiLinkAlt/></a></h3>
                            {user?.success ? <h3 className='mx-3' onClick={() => getId(src)}><BsFillTrashFill/></h3> : <></>}
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Image