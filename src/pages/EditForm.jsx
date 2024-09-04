import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { newsEdit } from '../redex/newsSlice'
import './editform.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const EditForm = () => {
  const editfetch = useSelector((state)=>state?.newss?.news??'')

  const dispatch = useDispatch()

  console.log(editfetch);
  

  const {id} = useParams();

  console.log(id);

  const singlefetch = Array.isArray(editfetch)
  ? editfetch.find((dealfetch) => dealfetch.id === Number(id))
  : null;
  
  useEffect(() => {
    if (singlefetch) {
      seteditdata(singlefetch);
    }
  }, [singlefetch]);
  
    const [editdata , seteditdata]= useState({
        id: '',
        image: '',
        title: '',
        content: '',
        category:'',
    })

    console.log(editdata);
    

    const onchangefromhandler=(event)=> {
        seteditdata({
            ...editdata,
            [event.target.name]:event.target.value
        });
    }
    const HandleformSubmit = (event) => {
        event.preventDefault();
    
        seteditdata({
            id: '',
            image: '',
            title: '',
            content: '',
            category:'',
        });
      }

  return (
    <Form className='mt-5' onSubmit={HandleformSubmit}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          ID
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            placeholder="ID"
            name="id"
            value={editdata.id}
            onChange={onchangefromhandler}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          image
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="image"
            placeholder="news Image"
            value={editdata.image}
            onChange={onchangefromhandler}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          title
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={editdata.title}
            onChange={onchangefromhandler}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
        content
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="content"
            name="content"
            value={editdata.content}
            onChange={onchangefromhandler}
          />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
          category
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="sports"
              name="category"
              value="sports"
              checked={editdata.completed === 'true'}
              onChange={onchangefromhandler}
            />
            <Form.Check
              type="radio"
              label="tech"
              name="category"
              value="tech"
              checked={editdata.completed === 'true'}
              onChange={onchangefromhandler}
            />
              <Form.Check
              type="radio"
              label="business"
              name="category"
              value="business"
              checked={editdata.completed === 'true'}
              onChange={onchangefromhandler}
            />
              <Form.Check
              type="radio"
              label="entertainment"
              name="category"
              value="entertainment"
              checked={editdata.completed === 'true'}
              onChange={onchangefromhandler}
            />
              <Form.Check
              type="radio"
              label="politics"
              name="category"
              value="politics"
              checked={editdata.completed === 'true'}
              onChange={onchangefromhandler}
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
     
          <Button type="submit" onClick={()=>dispatch(newsEdit(editdata))}>Submit</Button>
          
        </Col><br/>
        <Col className='button-align'>
        <Link  to={'/viewnews'}>
         <Button onClick={()=>dispatch(newsEdit(editdata))}>view</Button>   
         </Link> 
        </Col>   
      </Form.Group>
    </Form>


  )
}

export default EditForm