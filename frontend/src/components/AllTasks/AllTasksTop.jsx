import React from 'react'
import { Link } from 'react-router-dom'

const AllTasksTop = () => {
  return (
    <div className='row' style={styles.container}>

      <div className='col-md-6'>
        <h2 style={styles.text}>All Your Tasks Here</h2>
      </div>

      <div className='col-md-6'>
        <Link to ="/addTask"><button style={styles.btn}>Add New Task</button></Link>
      </div>
 
    </div>
  )
}

const styles = {
    container: {
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: '5%',
        marginRight: '5%',
    },

    text: {
        fontSize: '25px',
        marginTop: '40px',
        fontWeight: 'bold',
        color: 'black',
        display: 'inline-block',
    },

    btn: {
        fontSize: '16px',
        color: 'white',
        backgroundColor: 'darkgreen',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        marginTop: '40px',
        float: 'right', 
    },
}

export default AllTasksTop