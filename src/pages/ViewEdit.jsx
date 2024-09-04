import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ViewEdit = () => {

    const viewedited = useSelector((state)=>state?.newss?.news??'')
  console.log(viewedited);
  
  
  

  return (
   <Container>
    <Row>

       <Col md={4}>
      <Card>
      <Card.Img variant="top" src={viewedited.image}/>
      <Card.Body>
        <Card.Title>{viewedited.title}</Card.Title>
        <Card.Text>
         {viewedited.content}
        </Card.Text>
        <Card.Text>
         {viewedited.category}
         </Card.Text>
      </Card.Body>
    </Card>
    </Col>

      
    </Row>
   </Container>

  )
}

export default ViewEdit