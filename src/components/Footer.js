import React, { Component } from 'react';
import { Container, Col, Row} from 'reactstrap';

import "./Style.css";

function Footer(){
    return(
        <div>
            <div className="container-fluid hat3">
          <Container>
            <Row className='m-4'>
          <Col className='space1' lg={4} sm={12}><img src='/images/codebeat.svg' alt=''/>
          <br></br>
          <strong>PT Dwidasa Samsara Indonesia</strong>
          <p>Ruko Jalur Sutera 29A No. 53
Alam Sutera Serpong, Tangerang 15323
</p>

          
          </Col>
    <Col className='space1' lg={4} sm={12}>
    <h4>Contact</h4>
    <p>Phone : +62.21.5314.1135<br/>
Fax : +62.21.5314.1135<br/>
Email : community@dwidasa.com</p>

</Col>
    <Col className='space1' lg={4} sm={12}>
    <img src='/images/dotnet.svg' alt=''/>
    <img src='/images/coursera.svg' alt=''/>
    <img src='/images/codio.svg' alt=''/>
 

</Col>
    </Row>
          </Container>
          </div>
            <footer className="blog-footer">
      <p>Copyright © 2015 - Dwidasa Samsara Indonesia</p>
      <p>
      </p>
    </footer>
        </div>
    )
}
export default Footer;