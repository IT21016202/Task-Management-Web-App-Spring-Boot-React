import React from 'react'
import Image from '../images/appicon.png';

const Home = () => {
  return (
    <div className="jumbotron">
        <div className='row'>
            <div className='col-md-6 text-center'>
                <h1 className='text-center' style={styles.welcome}>Welcome to TaskEase</h1>
                <p style={styles.slogon}>Empower Your Productivity: Task Mastery at Your Fingertips!</p>
                <img src={Image} alt="Logo" width="250s"/>
            </div>
            <div className='col-md-6 text-center'>
                <h4 style={styles.text}>Existing User Please Login</h4>
                <button style={styles.btn}>Login</button>

                <h4 style={styles.text}>New User Please Register</h4>
                <button style={styles.btn}>Register</button>
            </div>
        </div>
    </div> 
  )
}

const styles = {
    welcome: {
        color: 'darkblue',
        fontSize: '50px',
        fontWeight: 'bold',
        textShadow: '2px 2px 2px lightblue',
        marginTop: '90px',
        marginBottom: '10px',
    },

    slogon: {
        fontSize: '18.5px',
        marginTop: '10px',
        marginBottom: '50px',
    },

    text: {
        fontSize: '30px',
        marginTop: '100px',
        marginBottom: '20px',
        color: 'darkblue',
        fontWeight: 'bold',
        
    },

    btn: {
        fontSize: '18px',
        color: 'white',
        backgroundColor: 'black',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        width: '150px',
        
    }
}

export default Home