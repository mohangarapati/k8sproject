import React, {Fragment} from 'react'

import {connect} from 'react-redux'

import {Button, Row, Col, Label} from 'reactstrap'

import {userSessionService} from '../../../Common/Services';

import UserLog from './components/UserLog'

class WelcomePage extends React.Component{
    constructor(props){
        super(props);

        this.profile = userSessionService.getCachedUserInfo()['profile'];

    }

    handleProfile() {
        this.props.history.push('/parent/profile');
    }

    render(){
        return(
            <Fragment>
                <Row className="welcome-page no-gutters justify-content-center">
                    <UserLog />

                    <Col md="12" className="justify-content-center text-center mt-5">
                        <Label className="fsize-3">{this.profile !== null && this.profile !== undefined && this.profile.first_name} {this.profile !== null && this.profile !== undefined && this.profile.last_name}</Label>
                    </Col>

                    <Col md="12" className="justify-content-center text-center mt-5">
                        <Label className="fsize-4">WELCOME</Label>
                    </Col>
                    {(this.profile.mobile === null || this.profile.mobile === '') &&
                    <Col md="12" className="justify-content-center text-center mt-5">
                        <p className="fsize-4">Please complete profile to get service.</p>
                        <Button color="primary" onClick={this.handleProfile.bind(this)}>Go to Profile</Button>
                    </Col>
                    }
                </Row>
            </Fragment>
        )
    }
}

export default WelcomePage;