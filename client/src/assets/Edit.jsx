import React ,{ useState, useEffect}from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit () {
  const {id} = useParams()
  const [srno, setSrno] = useState()
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [category, setCategory] = useState()
  const [label, setLabel] = useState()
  const [price, setPrice] = useState() 
  const [description, setDescription] = useState()
  const navigate = useNavigate()

  useEffect(()=> {
    axios.get('https://finvest-assign.vercel.app/Edit/'+id)
    .then(result => {console.log(result)
      setSn(result.data.srno)
      setName(result.data.name)
      setImage(result.data.image)
      setCategory(result.data.category)
      setLabel(result.data.label)
      setPrice(result.data.price)
      setDescription(result.data.description)

    
  })
    .catch(err => console.log(err))
}, [])

const Update = (e) => {
  e.preventDefault();
  axios.put("https://finvest-assign.vercel.app/Edit/"+id, {srno, name, image, category, label, price, description})
  .then(result => {
    console.log(result)
    navigate('/')
  })
  .catch(err => console.log(err))
}

    return(
        <div>
             <div className="d-flex vh-150 bg-info justify-content-center align-items-center">
            <div className='w- 150 bg-white rounded p=5'>
            <form onSubmit={Update}>
            <div align="center">
            <h2>Update Items</h2>
            </div>
  <div className='mb-2'>
    <label htmlFor="" >Id</label>
    <input type="text" placeholder='Enter srno' className='form-control'
      value={srno} onChange={(e) => setSrno(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Name</label>
    <input type="text" placeholder='Enter Name' className='form-control'
      value={name} onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Image</label>
    <input type="text" placeholder='Enter Image' className='form-control'
      value={image} onChange={(e) => setImage(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Category</label>
    <input type="text" placeholder='Enter Category' className='form-control'
      value={category} onChange={(e) => setCategory(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Label</label>
    <input type="text" placeholder='Enter Label' className='form-control'
      value={label} onChange={(e) => setLabel(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Price</label>
    <input type="text" placeholder='Enter Price' className='form-control'
      value={price} onChange={(e) => setPrice(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Description</label>
    <input type="text" placeholder='Enter Description' className='form-control'
      value={description} onChange={(e) => setDescription(e.target.value)}
    />
  </div>
  <div align="center">
  <button className='btn btn-success'>Update</button>
  </div>
</form>
                
                </div>
            </div>
        </div>
    )
}

export default Edit;
