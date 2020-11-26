import React from 'react'
import {Col, Row} from 'reactstrap';
import { Fields, validators } from '../../../Common/Components';

export default (props) => {
    const {handleChangeValue, handleChangeDOB} = props
    const {dob} = props

    return(
    <React.Fragment>
        <Row>
            <Col md="6">
                <Fields.InputField 
                    labelText="First Name"
                    name="first_name"
                    required
                    validate={[validators.required]}
                    onChange={handleChangeValue}
                />
            </Col>
            <Col md="6">
                <Fields.InputField 
                    labelText="Last Name"
                    name="last_name"
                    required
                    validate={[validators.required]}
                    onChange={handleChangeValue}
                />
            </Col>
            
        </Row>
        <Row className="mt-4">
            <Col md="12">
                <Fields.InputField 
                    labelText="Phone"
                    name="mobile"
                    required
                    validate={[validators.required]}
                    onChange={handleChangeValue}
                />
            </Col>
        </Row>
        <Row className="mt-4">
                
            <Col md="12">
                <Fields.InputField 
                    labelText="Email"
                    name="email"
                    required
                    validate={[validators.required, validators.email]}
                    onChange={handleChangeValue}
                />
            </Col>
        </Row>
        <Row className="mt-4">
                
            <Col md="12">
                <Fields.InputField 
                    labelText="Password"
                    name="password"
                    type="password"
                    required
                    validate={[validators.required, validators.numberValidator]}
                    onChange={handleChangeValue}
                />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col md="12">
                <Fields.InputField 
                    labelText="Address"
                    name="address"
                    required
                    validate={[validators.required]}
                    onChange={handleChangeValue}
                />
            </Col>
            </Row>
            <Row className="mt-4">
                
            <Col md="12">
                <Fields.InputField 
                    labelText="State"
                    name="state"
                    required
                    validate={[validators.required]}
                    onChange={handleChangeValue}
                />
            </Col>
        </Row>
        <Row className="mt-4">
            
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
            <Col md="3">
                <Fields.DatePicker 
                    labelText="DOB"
                    name="dob"
                    selected={dob}
                    required
                    validate={[validators.required]}
                    onChange={handleChangeDOB}
                />
            </Col>
        </Row>
        
    </React.Fragment>
)
}