import React from 'react'

const EditTaskTop = () => {
  return (
    <div className='row' style={styles.container}>
        <h1 style={styles.add}>Edit Task Here</h1>
        <hr/>
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

export default EditTaskTop