import React from 'react';
import {Col, Row} from 'reactstrap';
import { reduxForm, reset, submit  } from 'redux-form';

import { Fields, validators } from '../../../../Common/Components';

const ContactForm = (props) => {
    return (
        <form >
            <Row>
                <Col md="9">
                    <Fields.InputField 
                        labelText="First Name"
                        name="first_name"
                        disabled
                    />
                </Col>
            </Row>
            <Row>
                <Col md="9">
                    <Fields.InputField 
                        labelText="Last Name"
                        name="last_name"
                        disabled
                    />
                </Col>
                
            </Row>
            <Row>
                <Col md="9">
                    <Fields.InputField 
                        labelText="Mobile No."
                        name="mobile"
                        disabled
                    />
                </Col>
            </Row>
            <Row>
                <Col md="9">
                    <Fields.InputField 
                        labelText="Work No."
                        name="work"
                        disabled
                    />
                </Col>
            </Row>
            <Row>
                <Col md="9">
                    <Fields.InputField 
                        labelText="Occupation"
                        name="occupation"
                        disabled
                    />
                </Col>
            </Row>
            <Row>
                <Col md="9">
                    <Fields.InputField 
                        labelText="Relationship"
                        name="relationship"
                        disabled
                    />
                </Col>
            </Row>
            
        </form>
    )
}

export default reduxForm({
    form: 'studentContactForm',
    onSubmit: submit,
    enableReinitialize: true
})(ContactForm)