import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Modal, ModalHeader, ModalBody, Input } from 'reactstrap';
import { SearchList } from "../store/SearchList"
export const Header = () => {
    const [modal, setModal] = useState(false);
    const [islist, setIslist] = useState()
    const handleChange = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            setModal(true)
            let value = (e.currentTarget.value).toLowerCase()
            setIslist(value)
        }
    }

    const toggle = () => {
        setModal(!modal);
    }
    return (
        <>
            <Row>
                <Col sm="12" className="text-right">Bhuvaneswari  <span></span></Col>
                <Col xs="6" sm="1">
                </Col>
                <Col xs="6" sm="10">

                    <Form>
                        <FormGroup>

                            <Input onKeyDown={handleChange.bind(this)} className="search" type="search" name="search" placeholder="search song in the library"
                            />
                        </FormGroup>


                    </Form>

                </Col>

            </Row>

            <Modal toggle={toggle} isOpen={modal}  >
                <div onClick={toggle} className="text-right mt-2 close curpointer"> X</div>

                <ModalHeader>Search Results</ModalHeader>
                <ModalBody>
                    <SearchList searchterm={islist} />

                </ModalBody>
            </Modal>
        </>

    )
}


