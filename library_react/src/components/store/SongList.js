import React, { useState, useEffect } from 'react';
import {
    Row, Col, Card, CardImg, CardText, CardBody, Alert,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label
} from 'reactstrap';

import { getListOfSongs, getListOfPlaylist, addToPlayList } from "../utility"
export const SongList = () => {

    const [islist, setIslist] = useState([])
    const [loadplaylist, setLoadplaylist] = useState([])
    const [selectid, setSelectid] = useState()
    const [songid, setSongid] = useState()
    const [iscurrent, setIscurrent] = useState([])
    const [modal, setModal] = useState(false);
    const [alert, setAlert] = useState(false);
let arrayim=["1","2","3","4","10","11"]
    const toggle = (id) => {
        setModal(!modal);
        setSongid(id);
    }
    useEffect(() => {

        getListOfSongs(0).then((res) => {
            setIslist(JSON.parse(res))
            setIscurrent(4)


        })

        getListOfPlaylist().then((res) => {
            setLoadplaylist(JSON.parse(res))


        })
    }, []);
    const getNextitem = (limit, type) => {
        let setlimit;
        if (type === 'prev') {
            setlimit = limit - 4;
        }
        else {
            setlimit = limit;
        }
        getListOfSongs(setlimit).then((res) => {
            setIslist(JSON.parse(res))
            if (type === 'prev') {
                setIscurrent(setlimit)

            } else {
                setIscurrent(setlimit + 4)

            }

        })

    }
    const addToPlayListSong = (playid1, songid) => {
        let playid = playid1 ? playid1 : 0;
        addToPlayList(playid, songid).then((res) => {
            setModal(false)
            setAlert(true)
            setTimeout(function () {
                window.location.reload()
            }, 500)
        })
    }

    return (
        <>
            <Row>
                <Col xs="6" sm="12">
                    <a onClick={getNextitem.bind(this, iscurrent, "next")} className="text-right prevnex">Next</a>
                    <span>  </span>
                    
                    <a onClick={getNextitem.bind(this, iscurrent, "prev")} className="text-right prevnex">Prev</a>


                </Col>
                {islist && islist.map((item) => {
                    let show = arrayim[Math.floor(Math.random() * arrayim.length)];
                    return (

                        <Col key={item.id} xs="6" sm="3">

                            <Card>
                                <CardImg top width="100%" src={show+".jpg"} alt="Card image cap" />
                                <CardBody className="p-0">
                                    <CardTitle className="cardhead">{item.title}</CardTitle>
                                    <CardSubtitle className="cardsub">Artist:{item.artist}</CardSubtitle>
                                    <CardSubtitle className="cardsub">Album:{item.album}</CardSubtitle>

                                    <CardText className="cardsub">Duration:{item.duration}s</CardText>
                                    <Button className="curpointer cardsub text-center" color="danger" onClick={toggle.bind(this, item.id)} >Add to the playlist</Button>
                                </CardBody>
                            </Card>
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


