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
    Col,
  } from "reactstrap";




  const RegistrationPage1 = ({setName, name}) => {

    const [focus, setFocus] = useState('');
    
    const onFocus = () => setFocus("input-group-focus")

    const onInputChange = (e) => {
        setName(e.target.value)
    }

    const firstPageClick = (e) => {
        e.preventDefault();
    }

    const onKeyDown = (e) => {
        if (!e.key.match(/[a-zA-Z0-9\-\_]/)) {
            e.preventDefault();
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
                                            Type your nickname
                                        </FormText>

                                        <InputGroup className={`${focus} mb-4`}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <i className="tim-icons icon-single-02" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            onKeyDown={onKeyDown}
                                            min={3}
                                            max={20}
                                            type="text"
                                            value={name}
                                            placeholder="Name"
                                            onChange={onInputChange}
                                            onFocus={onFocus}
                                            onBlur={onBlur}
                                        />
                                        </InputGroup>
                                        <div className='text-right'>
                                            <Button  tag={ Link } to='/registration/2' color="primary">
                                                Next
                                            </Button>
                                        </div>
                                </CardBody>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
        );
    };

export default RegistrationPage1;