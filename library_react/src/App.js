import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Header, PrimaryNavBar,StickyHeader } from "./components/primary"
import { ListComponent, SideListitem } from "./components/store/"
const App = () => {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col xs="6" sm="2">
            <PrimaryNavBar />
          </Col>
          <Col className="secondarybg" xs="6" sm="7">
            <Header />
            <ListComponent />
          </Col>
          <Col sm="3">
            <SideListitem />
          </Col>
        </Row>
      </Container>
      <StickyHeader/>
    </>
  )
}




export default App;
