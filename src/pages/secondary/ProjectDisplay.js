import React, { useState, useEffect } from 'react'
import './ProjectDisplay.css'
import Image from '../../commons/Image/Image'


const ProjectDisplay = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    // fetch("http://147.182.217.131:8001/api/project/getproject", requestOptions)
    fetch("http://localhost:8000/api/project/getproject", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log("result==>", JSON.parse(result))
        let data = JSON.parse(result)
        setData([...data.projects])
      }
      )
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getData()
  }, [])

  const filterItem = (category) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:8000/api/project/getcategory?category=${category}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        // console.log("result==>", JSON.parse(result))
        let data = JSON.parse(result)
        let {project} = data
        setData ([...project])
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div>
      <div className='container-fluid bg-light py-5 ' style={{ minHeight: '88vh', marginTop:"40px" }}>
        <div className='menu-tabs text-center button-div'>
          <div className="row align-items-center">
            <div className="col">
              <button className='btn btn-primary' onClick={() => { filterItem('web app') }}>Web Apps</button>
            </div>
            <div className="col">
              <button className='btn btn-primary' onClick={() => { filterItem('mobile app') }}>Mobile Apps</button>
            </div>
            <div className="col">
              <button className='btn btn-primary' onClick={() => { filterItem('admin panel') }}>Admin Panels</button>
            </div>
          </div>
        </div>
        <div className='container-fluid '>
          <div className="row p-3 ">
            {data?.map((elem, id) => {
              return (
                <Image src={elem} key={id} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay