import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
function Create() {
    const[srno,setSrno]=useState()
    const[name,setName]=useState()
    const[image,setImage]=useState()
    const[category,setcategory]=useState()
    const[label,setLabel]=useState()
    const[price,setPrice]=useState()
    const[description,setDescription]=useState()
    const navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault();
        axios.post("https://finvest-assign.vercel.app/create",{srno,name,image,category,label,price,description})
        .then(result=>{
            console.log(result)
        })
        .catch(err=>console.log(err))
        navigate('/')
    }

  return (
    <div className='d-flex vh-200 bg-primary  align-items-center'>
        <div className='w-100 bg-white p-3'>
           
            <form onSubmit={Submit}>
                <h2>Add details</h2>
                
                <div className='mb-2'>
                    <label htmlFor=''>Id</label>
                    <input type='text' placeholder='Enter srno ' className='form-control'
                    onChange={(e)=>setSrno(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter name ' className='form-control'
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Image</label>
                    <input type='text' placeholder='Enter url ' className='form-control'
                    onChange={(e)=>setImage(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Category</label>
                    <input type='text' placeholder='Enter category' className='form-control'
                    onChange={(e)=>setcategory(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Label</label>
                    <input type='text' placeholder='Enter label' className='form-control'
                    onChange={(e)=>setLabel(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Price</label>
                    <input type='text' placeholder='Enter price ' className='form-control'
                    onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Description</label>
                    <input type='text' placeholder='Enter description ' className='form-control'
                    onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            
            </form>

        </div>








    </div>
  )
}

export default Create 
