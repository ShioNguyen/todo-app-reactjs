import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Input, Button, Container, Col, Row } from 'reactstrap'
import {BsCheck} from 'react-icons/bs';

function getWindowDimensions() {
  const { innerWidth } = window;
  return innerWidth;
}

function App() {
  
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [btnBlock, setBtnBlock] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const {innerWidth} = window;
      setWindowDimensions(innerWidth);
    })
    if(windowDimensions < 576) {
      setBtnBlock(true);
    }
    else {
      setBtnBlock(false);
    }
  }, [windowDimensions])

  return (
    <>
      <Container 
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Form style={{width: '50%'}}>
          <FormGroup row>
            <Col sm={10} xs={12}>
              <Input placeholder='make your plan'/>
            </Col>
            <Col sm={2} xs={12}>
              <Button block={btnBlock} color='primary'>Submit</Button>
            </Col>
          </FormGroup>
          <Row >
            <Col xs={12}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                padding: '10px',
                minHeight: '30px',
              }}>
                <h5>Hello</h5>
                <Button size='sm' color='warning'><BsCheck/></Button>
              </div>
            </Col>
          </Row>
        </Form>

      </Container>
    </>    
  )
}

export default App;
