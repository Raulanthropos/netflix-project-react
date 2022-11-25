import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class TitleContainer extends Component {
    render() {
        return(
            <Container fluid>
  <Row>
    <Col>TV Shows</Col>
    <Col className="btn btn-outline-light dropdown-toggle genre-button">Genres</Col>
  </Row>
</Container>
        )
    }
}

export default TitleContainer;