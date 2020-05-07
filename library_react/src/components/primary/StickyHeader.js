import React, { useState } from 'react';
import { Row, Col, Container, Button, Modal,Alert, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import {createPlaylistItem} from "../utility"
export const StickyHeader = () => {
  const [ismodal, setIsmodal] = useState(false)
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const createPlaylist = (name) => {
    createPlaylistItem(name).then((res) => {
     if(res === "success"){
      setModal(false)
      setError(false)
      setAlert(true)
      setTimeout(function () {
          window.location.reload()
      }, 500)
    }else{
      setError(true)
    }
    })
  }

  return (
    <>
      <Container fluid={true} className="stickyheader">
        <Row>
          <Col xs="6" sm="12">
            <h4 onClick={toggle} className="sednavbar">Create Playlist +</h4>
          </Col>
        </Row>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader>Create Playlist</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input  onChange={e => setIsmodal(e.currentTarget.value)} type="text" required name="listname" id="playlist" placeholder="Enter name of the playlist" />
              {error === true ? <div className="text-danger">Enter name of the playlist</div> : ''}
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={createPlaylist.bind(this,ismodal)}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      
        <Modal isOpen={alert}>
                <Alert className="px-0 mx-0 text-center" color="success">
                    <div onClick={e => setAlert(!alert)} className="close curpointer"> X</div>

        Playlist Created
      </Alert>
            </Modal>
      </Container>
    </>

  )
}


