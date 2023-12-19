import React from 'react'
import Image from '../images/appicon.png';

const Home = () => {
  return (
    
    <div className="jumbotron">
        <div className='row'>
            <div className='col-md-6'>
                <h1 className='text-center'>Welcome</h1>
                <img src={Image} alt="Logo" width="250s"/>
            </div>
            <div className='col-md-6'>
                <h4>Are You A Exsisting Cutomer Please Login Below</h4>
                <button>Login</button>

                <h4>Are You New Please Register Below</h4>
                <button>Register</button>
            </div>
        </div>

    </div>
    
    
  )
}

export default Home