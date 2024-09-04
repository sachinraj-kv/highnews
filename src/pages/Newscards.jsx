import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './newscard.css'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Newscards = () => {


const viewnews = useSelector((state)=>state?.newss?.news??'')



const [fliterddata , setfliterddata] = useState([])



useEffect(() => {
  
  if (Array.isArray(viewnews)) {
    setfliterddata(viewnews)
  } else {
    setfliterddata([]) 
  }
}, [viewnews])

const filterResult = (designType) => {
  if (designType === "All") {
    setfliterddata(viewnews);
  } else {
      const filtered = viewnews.filter(item => item.category === designType);
      setfliterddata(filtered);
  }
};

console.log(fliterddata);
  return (
    <div>
    <div className="button-group">
    <Button className='catb' onClick={() => filterResult('All')}>All</Button>
    <Button className='catb' onClick={() => filterResult('sports')}>sports</Button>
    <Button className='catb' onClick={() => filterResult('politics')}>politics</Button>
    <Button className='catb' onClick={() => filterResult('business')}>business</Button>
    <Button className='catb' onClick={() => filterResult('entertainment')}>entertainment</Button>
    <Button className='catb' onClick={() => filterResult('tech')}>tech</Button>
</div>
    <Container className='top-spaceing'>
      <Row className='card-spacing'>
      {fliterddata.map((ele)=>(
         <Col md={4}  key={ele.id} style={{marginBottom:"20px"}}>
         <Card >
          <Card.Img variant="top" src={ele.image}/>
         <Card.Body>
           <Card.Title>{ele.title}</Card.Title>
           <Card.Text>
           </Card.Text>
           <Link to={`/news/${ele.id}`}>
           <Button variant="primary">Read More</Button>
         </Link>     
         </Card.Body>
       </Card>
       </Col>
      ))}         
    </Row>
    </Container>
    </div>
  );
}

export default Newscards