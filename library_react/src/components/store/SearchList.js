import React, { useState, useEffect } from 'react';
import {
    Row, Col, Card, CardImg, CardText, CardBody, Alert,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label
} from 'reactstrap';

import {getListOfPlaylist, getListSongByQuery, addToPlayList } from "../utility"
export const SearchList = (props) => {

    const [islist, setIslist] = useState([])
    const [loadplaylist, setLoadplaylist] = useState([])
    const [selectid, setSelectid] = useState()
    const [songid, setSongid] = useState()
    const [modal, setModal] = useState(false);
    const [alert, setAlert] = useState(false);
    let arrayim = ["1", "2", "3", "4", "10", "11"]

    const toggle = (id) => {
        setModal(!modal);
        setSongid(id);
    }
    useEffect(() => {

        getListSongByQuery(props.searchterm).then((res) => {
            setIslist(JSON.parse(res))
        })

        getListOfPlaylist().then((res) => {
            setLoadplaylist(JSON.parse(res))


        })
    }, []);

    const addToPlayListSong = (playid1, songid) => {
        let playid = playid1 ? playid1 : 0;
        addToPlayList(playid, songid).then((res) => {
            setModal(false)
            setAlert(true)
            setTimeout(function () {
                window.location.reload()
            }, 100)
        })
    }

    return (
        <>
            <Row>
                {islist && (islist.length === 0) ?

                    <h5>No search results found</h5>
                    : ''}
                {islist && islist.map((item) => {
                    let show = arrayim[Math.floor(Math.random() * arrayim.length)];

                    return (

                        <Col key={item.id} xs="6" sm="12">
                            <Row>
                                <Col sm="4">
                                    <Card>
                                        <CardImg src={show + ".jpg"} alt={item.title} />
                                    </Card>
                                </Col>
                                <Col sm="8" className="p-0 m-0">
                                    <Card>
                                        <CardBody className="p-0">
                                            <CardTitle className="cardheads p-0 m-0">{item.title}</CardTitle>
                                            <CardSubtitle className="cardsub">Artist:{item.artist}</CardSubtitle>
                                            <CardSubtitle className="cardsub">Album:{item.album}</CardSubtitle>

                                            <CardText className="cardsub">Duration:{item.duration}s</CardText>
                                            <Button className="curpointer cardsub text-center" color="danger" onClick={toggle.bind(this, item.id)} >Add to the playlist</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                        </Col>
                    )
                })}
            </Row>


            <Modal isOpen={modal}  >

                <ModalHeader>Add To Playlist</ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup>

                            <Input selected="true" onChange={e => setSelectid(e.currentTarget.value)} type="select" name="select" id="exampleSelect">

                                {loadplaylist && loadplaylist.map((item, index) => {
                                    return (

                                        <option value={item.id} key={item.id} xs="6" sm="3">
                                            {item.name}
                                        </option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>

                    <Button color="danger" onClick={addToPlayListSong.bind(this, selectid, songid)}>Add to Playlist</Button>{' '}
                    <Button color="secondary" onClick={toggle.bind(this, 0)}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={alert}>
                <Alert className="px-0 mx-0 text-center" color="success">
                    <div onClick={e => setAlert(!alert)} className="close curpointer"> X</div>

        Song Added to the Playlist.
      </Alert>
            </Modal>

        </>

    )
}


