import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormText,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    Col,
  } from "reactstrap";




  const RegistrationPage2 = ({name, card, setCard, setName}) => {

    const [focus, setFocus] = useState('');

    const [ modalMini, setModalMini ] = useState(false);

    const onFocus = () => setFocus("input-group-focus");

    const onCardChange = (e) => {
        setCard(e.target.value)
    }

    const firstPageClick = (e) => {
        e.preventDefault();
    }

    const onToggleModle = (e) => {
        e.preventDefault();
        if (name.length > 2 && name.length < 21 && card.length === 10){
            setModalMini(!modalMini);
            setTimeout(()=> {
                setModalMini(false);
                setCard('');
                setName('');
                window.location.href = '/registration/1'
                window.location.reload();
            }, 3000)

        }
    }

    const onBlur = () => setFocus('registration_2');
        return (
        <>
            <Container className='pt-5 center-center'  >
                <Row className='pt-5' >
                    <Col lg="5" md="6">
                        <Card className='' >
                            <form onSubmit={firstPageClick} >
                                <CardHeader>
                                    <Row>
                                        <Col>
                                            Registration
                                        </Col>
                                        <Col className='text-right'>
                                            
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                        <FormText className='mb-3' color="muted">
                                            Type your card’s number
                                        </FormText>

                                        <InputGroup className={`${focus} mb-4`}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <i className="tim-icons icon-credit-card" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            value={card}
                                            type="number"
                                            name="number"
                                            placeholder="Card’s number"
                                            onChange={onCardChange}
                                            onFocus={onFocus}
                                            onBlur={onBlur}
                                        />
                                        </InputGroup>
                                        <Row className='d-flex align-items-center'>
                                            <Col className=''>
                                                <Link to='/registration/1'>
                                                    <i className="tim-icons icon-double-left" />
                                                </Link>
                                            </Col>
                                            <Col className='text-right'>
                                                <Button  onClick={onToggleModle} to='/registration/2' color="primary">
                                                    Finish
                                                </Button>
                                            </Col>
                                        </Row>
                                </CardBody>
                            </form>
                        </Card>
                        <Modal isOpen={modalMini} toggle={onToggleModle} size="sm">
                            <ModalHeader className="justify-content-center" color='success' toggle={onToggleModle}>
                                    Success
                            </ModalHeader>
                            <ModalBody>
                                You have registered successfully
                                <p>Name: {name};</p>
                                <p>Card: {card};</p>
                            </ModalBody>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </>
        );
    };

export default RegistrationPage2;