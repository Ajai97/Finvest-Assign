import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { jsonData } from './data';
function  Users () {
    const [users,setUsers]=useState([{
        
    }])
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
    })
  return (
    <div className='d-flex vh-200 bg-primary justify-content-center align-items-center'>
        <div className='w-100 bg-white  p-3'>
            <h2>Details</h2>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Link to="/create" className='btn btn-success'>Add +</Link>
            <table className='table' size="sm">
                <thead>
                    <tr>
                        <th>Srno</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Label</th>
                        <th>Price</th>
                        <th>Description</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr size="sm">
                                <td>{user.srno}</td>
                                <td>{user.name}</td>
                                <td>{user.image}</td>
                                <td>{user.category}</td>
                                <td>{user.label}</td>
                                <td>{user.price}</td>
                                <td>{user.description}</td>
                                <td>
                                    <Link to ="edit" className='btn btn-success'>Edit</Link>
                                    

                                </td>
                            </tr>
                        }
                        )}
                </tbody>
            </table>
        </div>
        
        
        
        </div>
  )
}

export default Users