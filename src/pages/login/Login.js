import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [inputFields, setInputFields] = useState(
        { email: '', password: '' }
    )

    const handleFormChange = (event) => {
        // const file = URL.createObjectURL(event.target.files[0])
        // console.log()
        const value = event.target.value;
        setInputFields({
            ...inputFields,
            [event.target.name]: value
        });
    }

    const submit = (e) => {
        e.preventDefault();  // is used for to stop reload page on submit
        let { email,password} = inputFields
        // console.log(email,password)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/users/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                // console.log(result)
                let user = JSON.parse(result)
                let {success} = user
                if(success){
                    localStorage.setItem('user', result)
                }
            })
            .catch(error => console.log('error', error));
    }


    return (
        <>
            <div className='container-fluid' style={{ height: '100vh' }}>
                <div className="container border-rounded mt-5" style={{ height: '80%', maxHeight: '100vh', minHeight: '85vh' }}>
                    <form className='m-5' >
                        <h3 className='mb-3'>Login In</h3>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control" placeholder="Enter email"
                                value={inputFields.email}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={inputFields.password}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary" onClick={submit}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login