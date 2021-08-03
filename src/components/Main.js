import React from 'react';
import './Style.css';
import { Container, Col, Row, ButtonToggle} from 'reactstrap';
 

function Main(){
    return(
    
        <div>
            <div className="container-fluid hat">
                 {/* <img src='/images/cell.jpg'/>
                 <div className="text1">
                 <h2>Making the most of the</h2>
                 <h2>ever-growing</h2>
                 <h2>Information Technology</h2>
                 </div>
            </div> */}
            <Container>
  <Row>
    <Col lg={6} sm={12}><img src='./images/cell.jpg' alt='cell'/></Col>
    <Col lg={6} sm={12}><div className="text1">
                 <h3>Making the most of the
                ever-growing</h3>
                 <h3 className='popon'>Information Technology</h3>

                 <p >Managed by a team of professional experts with extensive experience and impressive track records.</p>
                 <ButtonToggle color="danger">Read More</ButtonToggle>{' '}
                 </div></Col>
  </Row>
</Container>
        </div>

        <div className="container-fluid hat2">
        <Container>
  <Row>
    <Col lg={6} sm={12}><img src='./images/student.jpg' alt='student'/></Col>
    <Col lg={6} sm={12}><div className="text3">
                 <h3>Welcome to <span className="popon">Dwidasa Samsara Indonesia (DSI)</span> </h3>
                 

                 <p >Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective 
                   to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based 
                   application concept.</p>

    <p>Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous 
      improvements and innovations assure your business to run effectively and efficiently.</p>
                 
                 </div></Col>
  </Row>
</Container>

        </div>
        <div className="container-fluid hat3">
          <h4>Product and Services</h4>
          <Container>
            <Row className='m-4'>
          <Col className='space1' lg={4} sm={12}><img src='./images/autoit.svg' alt=''/>
          <h4 className='popon'>Our Product</h4>
          <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
          <ButtonToggle color="danger">Read More</ButtonToggle>{' '}
          </Col>
    <Col className='space1' lg={4} sm={12}><img src='./images/blender.svg' alt=''/>
    <h4 className='popon'>Our Service</h4>
    <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial
       sectors.</p>
       <ButtonToggle color="danger">Read More</ButtonToggle>{' '}

</Col>
    <Col className='space1' lg={4} sm={12}><img src='./images/chrome.svg' alt=''/>
    <h4 className='popon'>Our Technology</h4>
    <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV
       devices.</p>
       <ButtonToggle color="danger">Read More</ButtonToggle>{' '}

</Col>
    </Row>
          </Container>
        </div>

        
        </div>

    );
}
export default Main;