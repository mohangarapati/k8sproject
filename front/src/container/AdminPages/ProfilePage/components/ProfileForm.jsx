import React from 'react'
import { reduxForm, reset, submit  } from 'redux-form';

import {Button, Col, Row} from 'reactstrap';
import { Fields, validators, ImageDragDrop } from '../../../../Common/Components';

const ProfileForm = (props) => {
    const {handleChangeValue, handleChangeDOB, handleChangeImage} = props;
    const {dob, image} = props
    const {handleSubmit} = props
    return(
    <React.Fragment>
        <form onSubmit={handleSubmit}>
        <Row>
            <Col md="6">
                <Col md="12">
                    <Fields.InputField 
                        labelText="First Name"
                        name="first_name"
                        required
                        validate={[validators.required]}
                        onChange={handleChangeValue}
                    />
                </Col>
                <Col md="12" className="mt-4">
                    <Fields.InputField 
                        labelText="Last Name"
                        name="last_name"
                        required
                        validate={[validators.required]}
                        onChange={handleChangeValue}
                    />
                </Col>
                {/* <Col md="12" className="mt-4">
                    <Fields.InputField 
                        labelText="School"
                        name="school_name"
                        required
                        validate={[validators.required]}
                        onChange={handleChangeValue}
                    />
                </Col> */}
            </Col>
            <Col md="6" className="d-flex justify-content-center profile-image">
                <Col md="6">
                    <ImageDragDrop
                        handleChangeImage = {handleChangeImage}
                        image={image}
                    />
                </Col>
            </Col>
            
        </Row>
        <Row className="mt-4">
            <Col md="12" className="d-flex">
                <Col md="8">
                    <Fields.InputField 
                        labelText="Address"
                        name="address"
                        required
                        validate={[validators.required]}
                        onChange={handleChangeValue}
                    />
                </Col>
               
            </Col>
            <Col md="12" className="d-flex mt-4">
                <Col md="3">
                    <Fields.InputField 
                        labelText="City"
                        name="city"
                        required
                        validate={[validators.required]}
                        onChange={handleChangeValue}
                    />
                </Col>
                <Col md="3">
                    <Fields.InputField 
                        labelText="State"
                        name="state"
                        required
                        validate={[validators.required]}
                        onChange={handleChangeValue}
                    />
                </Col>
                <Col md="3">
                    <Fields.InputField 
                        labelText="Country"
                        name="country"
                        required
                        validate={[validators.required]}
                        onChange={handleChangeValue}
                    />
                </Col>
                <Col md="3">
                    <Fields.InputField 
                        labelText="Postal Code"
                        name="postalcode"
                        required
                        validate={[validators.onlyNumbers]}
                        onChange={handleChangeValue}
                    />
                </Col>
                
                
            </Col>
            <Col md="12" className="d-flex mt-4">
                <Col md="3">
                    <Fields.DatePicker 
                        labelText="DOB"
                        name="dob"
                        selected = {dob}
                        required
                        icon
                        validate={[validators.required]}
                        onChange={handleChangeDOB}
                    />
                </Col>
                <Col md="3">
                    <Fields.InputField 
                        labelText="Phone"
                        name="mobile"
                        required
                        validate={[validators.required]}
                        onChange={handleChangeValue}
                    />
                </Col>
                <Col md="3">
                    <Fields.InputField 
                        labelText="Email"
                        name="email"
                        required
                        validate={[validators.required, validators.email]}
                        onChange={handleChangeValue}
                    />
                </Col>
            </Col>
        </Row>
        
        <Row>
            <Col md="12" className="mt-5 text-center" >
                <Button className="col-md-1 text-center"  >Save</Button>
            </Col>
        </Row>
        </form>
    </React.Fragment>
)
}

export default reduxForm({
    form: 'profileForm',
    onSubmit: submit,
    enableReinitialize: true
})(ProfileForm)