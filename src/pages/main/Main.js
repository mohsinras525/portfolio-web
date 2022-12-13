import React,{useEffect,useState} from 'react'
// import Hero from '../../commons/hero/Hero'
import Image from '../../commons/Image/Image'


const Main = () => {

  const [data, setData] = useState([])


  const getData = async() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/api/project/getproject", requestOptions)
      .then(response => response.text())
      .then(result => {
        // console.log("result==>",JSON.parse(result))
        let data = JSON.parse(result)
        // console.log(data.projects)
        setData([...data.projects])
      }
        )
      .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    getData()
  },[])

  // console.log(data)
  return (
    <>
      {/* <Hero /> */}
      <div className='container-fluid bg-light py-5' style={{minHeight:'100vh'}} >
        <div className='container-fluid' style={{minHeight:'100vh'}}>
          <div className="row p-3 ">
          {/* <main class="grid"> */}
   
    
            {data?.map((elem,id) => {
              return(
                <Image src={elem} key={id} getData={getData} />
                )
              } )}
              {/* </main> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Main