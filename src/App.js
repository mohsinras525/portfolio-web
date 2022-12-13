import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/main/Main'
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ProjectDisplay from './pages/secondary/ProjectDisplay';
import AddProject from './pages/Addproject/AddProject'
import Login from './pages/login/Login';
import ProtectedRoute from './utils/ProtectedRoute';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({})

  
  console.log("Mohsin Main")
  const getUser = () => {
    let data = JSON.parse(window.localStorage.getItem('user'));
    // console.log(data);
    setUser(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log("Mohsin 2",user)
  return (
    <>
      <Header success={user}/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/addproject' element={<AddProject />} exact />
        </Route>
        <Route path='/projects' element={<ProjectDisplay />} />
        <Route path='/login' element={<Login />} exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
