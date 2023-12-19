import React from 'react'

const AddTaskTop = () => {
  return (
    <div className='row' style={styles.container}>
        <h1 style={styles.add}>Add New Task Here</h1>
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

    add: { 
        fontSize: '25px',
        marginTop: '40px',
        fontWeight: 'bold',
        color: 'black',
        display: 'inline-block',
    },
}

export default AddTaskTop