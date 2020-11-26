import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm  } from 'redux-form';

import { Col, Row, Button, Card, CardBody } from 'reactstrap';

import { ToastContainer } from 'react-toastify';

import { Fields, LinkButton, validators, Icon, Loader } from '../../Common/Components';

import ForgotPassword from './Components/ForgotPassword';
import { submitLoginAction } from './authactions';
import {securityService, userSessionService} from '../../Common/Services';
import {AppContainer} from '../../Layout/AppContainer'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
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
                    <Row className="no-gutters">
                        <div style={{width: '100%'}}>
                        <Col lg="12" md="12" className="mt-3">
                        <Card className="full-card d-flex justify-content-center">
                                <CardBody>
                            <Row className="justify-content-center">
                                    <Col xl="4" lg="6" md="6" sm="10" xs="12">
                                        <form className="login__form" onSubmit={handleSubmit(this.handleLoginFormSubmit)}>
                                            <div style={{marginTop: 30}}>
                                            <Fields.InputField
                                                placeholder="E-MAIL"
                                                name="email"
                                                labelText="E-mail"
                                                validate={[validators.required, validators.email]}
                                                onChange={this.handleChangeValue}
                                            />
                                            </div>
                                            <div style={{marginTop: 30}}>
                                            <Fields.PasswordField
                                                placeholder="PASSWORD"
                                                name="password"
                                                labelText="Password"
                                                validate={[validators.required]}
                                                onChange={this.handleChangeValue}
                                            />
                                            </div>
                                            <div>
                                            <ForgotPassword
                                                redirectForget={this.redirectForget}
                                                initialValues={this.props.initialValues}
                                                handleChangeValue={this.handleChangeValue}
                                            />
                                            </div>
                                            <div className="login-button-container text-center mt-5">
                                                <Row className="text-center justify-content-center">
                                                        <Col md="8" sm="6" xs="6">
                                                            <Button className="btn-wide btn-shadow btn-block btn-hover-shine pl-5 pr-5 mt-5" size="lg" type="submit">LogIn</Button>
                                                        </Col>
                                                    </Row>
                                                {/* <div className="d-flex justify-content-center">
                                                    <p className="mt-3 mr-2">Not registered yet? </p>
                                                    <LinkButton path="/signup" label="Sign Up" />
                                                </div> */}
                                            </div>
                                        </form>
                                    </Col>
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
	// let initialValues = securityService.getLoginInfo();
	const isLoading = state.authenticationReducer.isLoading
	return {
		//   initialValues,
		  isLoading
	}
};

export default (connect(
	mapStateToProps,
	mapDispatchToProps
)(reduxForm({
	form: 'loginForm',
	enableReinitialize: true,
})(LoginPage)));
