import React from 'react'
import './detalednews.css'
import { useSelector } from 'react-redux'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Detalednews = () => {
  const fetschbyid = useSelector((state)=>state?.newss?.news??'')
  console.log(fetschbyid);

  const {id} = useParams();

  console.log(id);

  const displayidfetch =  fetschbyid.find((deler)=>deler.id === Number(id)) 

  return (   
   <Container>
    <Row>
      <Col md={10}  className="mx-auto">
      <Card className="border-0">
        <Card.Title className='hightittle'>{displayidfetch.title}</Card.Title>
      <Card.Img variant="top" src={displayidfetch.image}/>
      <Card.Body>
      
        <Card.Text className='contenttextcontrol'>
          {displayidfetch.content}
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
    </Row>
   </Container>
   
  )
}

export default Detalednews