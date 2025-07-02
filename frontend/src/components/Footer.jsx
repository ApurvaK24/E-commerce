import React from "react";
import {Row,Col,Container} from 'react-bootstrap';

const Footer = () =>{
    const curYear = new Date().getFullYear();
return(
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                <p>ProShop @copy: {curYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
)
}
export default Footer;