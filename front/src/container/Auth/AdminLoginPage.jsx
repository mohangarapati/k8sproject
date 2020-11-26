import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm  } from 'redux-form';

import { Col, Row, Button, Card, CardBody } from 'reactstrap';

import {
    faLock, faGlobe
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ToastContainer } from 'react-toastify';

import { Fields, LinkButton, validators, Icon, Loader } from '../../Common/Components';

import ForgotPassword from './Components/ForgotPassword';
import { submitLoginAction } from './authactions';
import {securityService, userSessionService} from '../../Common/Services';
import {AppContainer} from '../../Layout/AppContainer'

class AdminLoginPage extends React.Component {
    constructor(props) {
        super(props);

        
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
    }

    componentDidMount(){
        if(securityService.getToken())
            this.props.history.push('/admin/dashboard');
    }

    handleChangeValue = (e) => {
        const {name, value} = e.target;
		this.setState({
			[name]: value
		})
	}

    handleLoginFormSubmit(data) {
        if(data.RememberMe) {
			securityService.setRememberMe(data);
		}
        else securityService.removeRememberMe()
        
        this.props.submitLogin(data)
    }

    render() {
        const {handleSubmit} = this.props;
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
                <AppContainer>
                    {this.props.isLoading && <Loader />}
                    <Row className="auth-page no-gutters">
                        {/* <Header /> */}
                        <div style={{width: '100%'}}>
                        <Col lg="12" md="12" className="mt-3">
                            <Card className="full-card d-flex justify-content-center">
                                <CardBody>
                                    <Row>
                                    <Col md="4"></Col>
                                    <Col md="4">
                                         {/* <div className="app-logo" />
                                        <h1 className="mb-5 text-center"> EzyAttend </h1> */}
                                        
                                        <form className="login__form" onSubmit={handleSubmit(this.handleLoginFormSubmit)}>
                                            <div style={{marginTop: 130}}>
                                            <Fields.InputField
                                                placeholder="E-MAIL"
                                                name="email"
                                                validate={[validators.required, validators.email]}
                                                onChange={this.handleChangeValue}
                                                icon={<FontAwesomeIcon icon={faGlobe}/>}
                                            />
                                            </div>
                                            <div style={{marginTop: 30}}>
                                            <Fields.PasswordField
                                                placeholder="PASSWORD"
                                                name="password"
                                                validate={[validators.required]}
                                                onChange={this.handleChangeValue}
                                                icon={<FontAwesomeIcon icon={faLock}/>}
                                            />
                                            </div>
                                            <div style={{marginTop: 30}}>
                                            <ForgotPassword
                                                redirectForget={this.redirectForget}
                                                initialValues={this.props.initialValues}
                                                handleChangeValue={this.handleChangeValue}
                                            />
                                            </div>
                                            <div className="login-button-container text-center mt-5">
                                                <Button className="btn-wide btn-shadow btn-block btn-hover-shine pl-5 pr-5 mt-5" size="lg" type="submit">LogIn</Button>
                                                <div className="d-flex justify-content-center">
                                                    <p className="mt-3 mr-2">Not registered yet? </p>
                                                    <LinkButton path="/back/signup" label="Sign Up" />
                                                </div>
                                            </div>
                                        </form>
                                    </Col>
                                    <Col md="4"></Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            
                        </Col>
                        </div>
                    </Row>
                </AppContainer>
            </Fragment>
        );
    }
}


const mapDispatchToProps = dispatch => ({
	submitLogin: data => dispatch(submitLoginAction(data))
});

const mapStateToProps = (state) => {
	let initialValues = securityService.getLoginInfo();
	const isLoading = state.authenticationReducer.isLoading
	return {
		  initialValues,
		  isLoading
	}
};

export default (connect(
	mapStateToProps,
	mapDispatchToProps
)(reduxForm({
	form: 'loginForm',
	enableReinitialize: true,
})(AdminLoginPage)));
