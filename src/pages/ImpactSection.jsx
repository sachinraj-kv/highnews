import React from 'react'
import {  Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import './impact.css'

function ImpactSection() {
  return (
    <div>
        
        <h1>Must Read</h1>
    <Container>
        <Row>
            <Col md={3}>
            <Card style={{  border:"none" }}>
      <Card.Img variant="top" src="https://www.hindustantimes.com/ht-img/img/2024/08/29/550x309/Yudhra_trailer_1724939643418_1724939664821.jpg" />
      <Card.Body>
        <Card.Title>Yudhra trailer: Siddhant Chaturvedi plays a man with anger issues on a mission; Malavika Mohanan his lover. Watch</Card.Title>
        <Card.Text>
        Yudhra trailer: The trailer for Ravi Udyawar’s Siddhant Chaturvedi, Malavika Mohanan-starrer Yudhra, dropped on Thursday. The film, produced by Ritesh Sidhwani and Farhan Akhtar under Excel Entertainment, sees Siddhant play a man with anger issues who’s sent on a mission. (Also Read: Malavika Mohanan speaks out on the safety of women, says she feels ‘helpless’: It is a patriarchal mindset)         
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>

            <Col md={6}>
  <Card style={{ border: "none" }}>
   <div className="ratio ratio-16x9">
    <iframe src="https://www.youtube.com/embed/zGoMh1fy8XE?si=9dFzd1xyXAc-YnRq" title='news' allowFullScreen></iframe>
    
   </div>
   <h4>Dozens of people CNN met in Feni – which is only a few miles from the India border – accused New Delhi of releasing water from the Dumbur dam in neighboring Tripura state with no warning.

As we waded past their homes, some people shouted, “We hate India” and “This is Indian water.”

“They opened the gate, but no information was given,” said Shoriful Islam, 29, an IT worker who returned to his hometown from the capital Dhaka to volunteer in rescue efforts.</h4>
  </Card>
</Col>



            <Col md={3}>
<Card style={{  border:"none"}}>
      <Card.Img variant="top" src="https://i.gadgets360cdn.com/large/instagram_paras_sharma_1724936678297.jpg?downsize=950:*" height={"200px"}/>
      <Card.Body>
        <Card.Title>Instagram Creator Lab Launched in India; Company Rolls Out New Story Features, Birthday Notes</Card.Title>
      </Card.Body>
    </Card>
    
    <Card style={{ border:"none" }}>
      <Card.Img variant="top" src="https://c.ndtvimg.com/2024-06/l6rdt5v_eggs_625x300_28_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350" height={"200px"} />
      <Card.Body>
        <Card.Title>What Happens To Your Body If You Eat Eggs Every Day</Card.Title>
      </Card.Body>
    </Card>
            </Col>
        </Row>
    </Container>
    <div className='txt'>
    <h3 style={{fontSize:"60px",paddingTop:"60px",paddingLeft:"20px"}}>Latest News</h3>
    </div>


    <div>
        <Carousel style={{backgroundColor:"white",height:"400px",fontFamily:"neue machina",color:"black"}}>
      <Carousel.Item interval={1000}>
        <img src="//images.indianexpress.com/2024/08/Untitled-design-1-16.jpg?" width={294}height={311} alt="" style={{marginLeft:"200px" ,marginTop:"20px"}} />
        <Carousel.Caption style={{marginLeft:"280px",textAlign:"left"}}>
          <h2>Who are the Jamaat-e-Islami Bangladesh, the country’s largest Islamist party?</h2>
          <p style={{color:"black"}}>"Bangladesh’s interim government on Wednesday (August 28) lifted the ban on the Bangladesh Jamaat-e-Islami, paving the way for its return to active politics.

The Sheikh Hasina government had cracked down on the Jamaat for being a “militant and terrorist” organisation, and hanged or imprisoned many of its top leaders for “war crimes” committed during the 1971 Liberation War. The Jamaat was barred from contesting elections in 2013 on the ground that its charter violated Bangladesh’s constitution by “opposing secularism”."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="https://images.indianexpress.com/2024/08/1500x500.jpg" width={294}height={311} alt="" style={{marginLeft:"200px",marginTop:"20px"}} />
        <Carousel.Caption style={{marginLeft:"285px",textAlign:"left"}}>
          <h2>How AMMA lorded over Kerala cinema, its writ running from stars to junior artistes</h2>
          <p style={{color:"black"}}>"From handing out bans to artistes who did not toe the line to adopting arm-twisting tactics, the Association of Malayalam Movie Artistes (AMMA) — the Kerala film industry body — acted as an all-powerful group whose clout extended over everyone from directors to top-rung actors and junior artistes."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images.indianexpress.com/2024/08/AMMA-committee-24-27.jpg" width={294}height={311} alt="" style={{marginLeft:"200px",marginTop:"20px"}} />
        <Carousel.Caption style={{marginLeft:"285px",textAlign:"left"}}>
          <h2>History and controversies of AMMA, the Kerala actors’ body that was led by superstar Mohanlal</h2>
          <p style={{color:"black"}}>
          "History and controversies of AMMA, the Kerala actors’ body that was led by superstar Mohanlal"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    </div>



    </div>
  )
}

export default ImpactSection