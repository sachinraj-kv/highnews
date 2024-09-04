import React, { useState } from 'react';
import { Button, Col, Form, Row, } from 'react-bootstrap';
import { addNews } from '../redex/newsSlice';
import { useDispatch } from 'react-redux';


const Todosform = () => {
  const [formdata, setformdata] = useState({
    id: '',
    image: '',
    title: '',
    content: '',
    category:'',
  });


  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setformdata({
      ...formdata,
      [event.target.name]: event.target.value
    });
  }

  const HandleSubmit = (event) => {
    event.preventDefault();

    dispatch(addNews(formdata));

   
  }

  return (
    <div>
      <Form className='mt-5' onSubmit={HandleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            ID
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              placeholder="ID"
              name="id"
              value={formdata.id}
              onChange={onChangeHandler}
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
              value={formdata.image}
              onChange={onChangeHandler}
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
              value={formdata.title}
              onChange={onChangeHandler}
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
              value={formdata.content}
              onChange={onChangeHandler}
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
                checked={formdata.completed === 'true'}
                onChange={onChangeHandler}
              />
              <Form.Check
                type="radio"
                label="tech"
                name="category"
                value="tech"
                checked={formdata.completed === 'true'}
                onChange={onChangeHandler}
              />
                <Form.Check
                type="radio"
                label="business"
                name="category"
                value="business"
                checked={formdata.completed === 'true'}
                onChange={onChangeHandler}
              />
                <Form.Check
                type="radio"
                label="entertainment"
                name="category"
                value="entertainment"
                checked={formdata.completed === 'true'}
                onChange={onChangeHandler}
              />
                <Form.Check
                type="radio"
                label="politics"
                name="category"
                value="politics"
                checked={formdata.completed === 'true'}
                onChange={onChangeHandler}
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Todosform;
