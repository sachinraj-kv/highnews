import React from 'react'
import './editddelete.css'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { newsDelete } from '../redex/newsSlice'

const EditandDelite = () => {

    const dispatch = useDispatch()

    const editdisplay = useSelector((state)=>state?.newss?.news??'')

    

  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>id</th>
        <th>image</th>
        <th>title</th>
        <th>content</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
    {editdisplay.map((ele)=>( 
        <tr key={ele.id} className='allwrapper'>
        <td >{ele.id}</td>
        <td><img src={ele.image} alt="images" /></td>
        <td>{ele.title}</td>
        <td>{ele.category}</td>
        <td>
        <Link to={`/editform/${ele.id}`}>
        <button >edit</button>
        </Link>
        </td>
        <td><button onClick={()=>dispatch(newsDelete(ele))}>delete</button></td>
      </tr> ))}
     
      </tbody>
      </Table>
  )
}

export default EditandDelite