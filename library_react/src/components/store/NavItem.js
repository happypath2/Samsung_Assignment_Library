import React, { useState, useEffect } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { getListOfPlaylist } from "../utility"
export const NavItem = (props) => {
    const [islist, setIslist] = useState([])
    useEffect(() => {
        if (!props.item) {
            getListOfPlaylist(0).then((res) => {
                setIslist(JSON.parse(res))


            })
        } else {
            setIslist(props.item)
        }
    }, []);
    return (
        <>
            <Row>

                <Col xs="6" sm="12">
                    <ListGroup>

                        {islist && islist.map((item,index) => {
                            let songslength = item && item.songs && item.songs.length ? item.songs.length : ''
                            return (
                                <ListGroupItem key={item.name+ index} className="navbaritem">{item.name}
                                    {songslength !== '' ? <span className="songtotal"> ({songslength}) </span> : ''}
                                </ListGroupItem>
                            )
                        })}
                    </ListGroup>
                </Col>

            </Row>


        </>

    )
}


