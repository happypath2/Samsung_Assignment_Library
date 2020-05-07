import React from "react"
import { Row, Col } from 'reactstrap';
import { NavItem } from "../store/NavItem"
export const PrimaryNavBar = () => {
    let items = [
        
        { "name": "Recently Played" },
        { "name": "Songs" },
        { "name": "Albums" },
        { "name": "Artists" },
        { "name": "Local Files" },
        { "name": "Podcasts" }
    ];
    return (
        <>
            <Row>

                <Col xs="6" sm="12">
                    <h1 className="pad-4">Browse</h1>
                </Col>

                <Col xs="6" sm="12">
                    <h3 className="navbaritemhead">YOUR LIBRARY</h3>
                    <NavItem  item={items} />
                </Col>

                <Col xs="6" sm="12">
                    <h3 className="navbaritemhead">PLAYLISTS</h3>
                    <NavItem />
                </Col>


            </Row>


        </>

    )
}


