import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './AddProject.css'

const AddProject = () => {
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()
  const [inputFields, setInputFields] = useState(
    { title: '', description: '', technologystack: '', languageused: '', link: '', Category: '', image: '' }
  )

  const handleFormChange = (event) => {
    const value = event.target.value;
    setInputFields({
      ...inputFields,
      [event.target.name]: value
    });

  }

  const handleChange = async (event) => {
    const file = event.target.files[0]
    let { name } = file
    var formdata = new FormData();
    formdata.append("image", file);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://147.182.217.131:8001/uploadimage", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("result==>", result.url)
        setImageUrl(result.url)
        setInputFields({ ...inputFields, image: result.url })
      })
      .catch(error => console.log('error', error));

    let image = await axios.get(`http://147.182.217.131:8001/uploads/${name}`)

    if (!image) (
      alert("error")
    )
  }
  const urlPatternValidation = URL => {
    const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
    return regex.test(URL);
  };


  const submit = (e) => {
    e.preventDefault();  // is used for to stop reload page on submit
    console.log(inputFields)
    const { title, description, technologystack, languageused, link, Category, image } = inputFields
    if (urlPatternValidation(link)) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "title": title,
        "description": description,
        "link": link,
        "language": languageused,
        "technologystack": technologystack,
        "image": image,
        "category": Category
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://147.182.217.131:8001/api/project/add", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
          let {success} = JSON.parse(result)
          console.log(success)
          if (success) {
            navigate('/')
          }
        }
        )
        .catch(error => console.log('error', error));
    }
    else{
      alert("Please Enter Correct url")
    }

    setInputFields({ title: '', description: '', technologystack: '', languageused: '', link: '', Category: '', image: '' })

  }

  return (
    <>
      <div className='container-fluid ' style={{ height: '110vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container border-rounded mt-5" style={{ height: '80%', maxnHeight: '100vh', minHeight: '85vh' }} >
          <div className='text-center pt-2' >
            <h2 className='mb-3'>Add Project</h2>
          </div>
          <div className="row pt-2">
            <div className='form-group col-md-6 mb-3'>
              <input
                className='form-control' placeholder='Title'
                name='title'
                value={inputFields.title}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group col-md-6 mb-3 '>
              <input
                className='form-control' placeholder='Description'
                name='description'
                value={inputFields.description}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group col-md-6 mb-3 '>
              <input
                className='form-control' placeholder='Technology Stack'
                name='technologystack'
                value={inputFields.technologystack}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group col-md-6 mb-3 '>
              <input
                className='form-control' placeholder='Language Used'
                name='languageused'
                value={inputFields.languageused}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group col-md-6 mb-3 '>
              <select className='form-control'
                name='Category'
                value={inputFields.Category}
                onChange={handleFormChange}
              >
                <option>Select Category</option>
                <option>web app</option>
                <option>mobile app</option>
                <option>admin panel</option>
              </select>
            </div>
            <div className='form-group col-md-6 mb-3 '>
              <input
                required
                className='form-control' placeholder='Website Link'
                name='link'
                value={inputFields.link}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group col-md-6 mb-3 '>
              <input
                className='form-control' placeholder='Image'
                type='file'
                name='image'
                onChange={(e) => {
                  handleChange(e)
                }}
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary mt-2" type="button" onClick={(e) => { submit(e) }}>Add Project</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProject


