import React from 'react'
import EditTaskTop from '../components/EditTask/EditTaskTop'
import EditTaskForm from '../components/EditTask/EditTaskForm'
import { useParams } from 'react-router-dom'

const EditTaskPage = () => {
    const { id } = useParams();

    return (
        <div>
            <EditTaskTop />
            <EditTaskForm id={id} />
        </div>
    )
}

export default EditTaskPage