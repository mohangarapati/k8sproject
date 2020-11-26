import React, { Fragment } from 'react'

import { Button, Row, Col } from 'reactstrap'
import {ToastContainer} from 'react-toastify'
import {Link} from 'react-router-dom'

import logo from '../../Layout/AppLogo/logo.png'
import './styles.scss';

import { securityService, userSessionService, notificationService } from '../../Common/Services';
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdmin = this.handleAdmin.bind(this);
        this.handleInstructor = this.handleInstructor.bind(this);
        this.handleParent = this.handleParent.bind(this);
        this.handlePlayer = this.handlePlayer.bind(this);
    }

    handleAdmin(e) {
        e.preventDefault();
        if(securityService.getToken() && userSessionService.getUserGrade() !== 0)
            notificationService.error("Please logout prev page");
        else
            this.props.history.push('admin')
    }

    handleInstructor(e) {
        e.preventDefault();
        if(securityService.getToken() && userSessionService.getUserGrade() !== 1)
            notificationService.error("Please logout prev page");
        else
        this.props.history.push('page/welcome')
    }
    
    handleParent(e) {
        e.preventDefault();
        if(securityService.getToken() && userSessionService.getUserGrade() !== 3)
            notificationService.error("Please logout prev page");
        else
        this.props.history.push('parent/welcome')
    }

    handlePlayer(e) {
        e.preventDefault();
        if(securityService.getToken() && userSessionService.getUserGrade() !== 2)
            notificationService.error("Please logout prev page");
        else
        this.props.history.push('player/welcome')
    }

    render() {
        return (
            <Fragment>
                <ToastContainer
					position="top-right"
					type="default"
					autoClose={5000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					pauseOnHover
				/>
                <div className="home-page">
                    <div className="app-main">
                        <div className="app-main__outer">
                            <Col md="12" className="mt-3">
                                <Link to="/">
                                    <img src={logo} height="50"/>
                                </Link>
                            </Col>
                            <Row className=" no-gutters justify-content-center">
                                <Col md="1">
                                    <Button color="primary" className="btn-admin" onClick={this.handleAdmin}>Admin</Button>
                                    <Button color="primary" className="btn-player" onClick={this.handlePlayer}>Player</Button>
                                    <Button color="primary" className="btn-instructor" onClick={this.handleInstructor}>Instructor</Button>
                                    <Button color="primary" className="btn-parent" onClick={this.handleParent}>Parent</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default HomePage;