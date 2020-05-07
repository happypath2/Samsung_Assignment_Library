import React, { useState, useEffect } from 'react';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { getListOfSongs } from "../utility"

export const SideListitem = () => {
    const [islist, setIslist] = useState([])
    let arrayim=["1","2","3","4","10","11"]

    useEffect(() => {
      getListOfSongs(20).then((res) => {
        setIslist(JSON.parse(res))
        

    })
        
       

    }, []);
    return (
        <>
            <Row>
               
                <Col xs="6" sm="12">
                <h3 className="head1 mt-5">Friend Activity</h3>
                {islist && islist.map((item, index) => {
                    let show = arrayim[Math.floor(Math.random() * arrayim.length)];

                    return (
                        <Card key={index}>
                                <CardBody className="p-0 cabody">
                                <CardImg  top className="imagefluid" src={show+".jpg"} alt={item.title} />

                                    <CardTitle className="cardhead">{item.title}</CardTitle>
                                    <CardSubtitle className="cardsub">Artist:{item.artist}</CardSubtitle>
                                    <CardSubtitle className="cardsub">Album:{item.album}</CardSubtitle>

                                    <CardText className="cardsub">Duration:{item.duration}s</CardText>
                                </CardBody>
                      </Card>
                    )
                })}
                </Col>
                
            </Row>


        </>

    )
}


