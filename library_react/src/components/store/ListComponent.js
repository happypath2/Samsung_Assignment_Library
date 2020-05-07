import React from "react"
import { Row,Col } from 'reactstrap';
import {NavBar,SongList} from "../store"
export const ListComponent = () => {

    return (
        <>
            <Row>
               
                <Col xs="6" sm="12">
                <h1 className="head1 mb-0 mt-3">Browse</h1>
                <NavBar/>
                </Col>
                <Col xs="6" sm="12">
                <h2 className="head1">Start Your Day</h2>
                <SongList/>
                </Col>
             
            </Row>


        </>

    )
}


