import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm  } from 'redux-form';

import { Col, Row, Button, Card, CardBody } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import { Fields, LinkButton, validators, Icon, Loader } from '../../Common/Components';

import { signUpAction, registerTeacher } from './authactions';
import {AppContainer} from '../../Layout/AppContainer'

import RegisterForm from './Components/RegisterForm'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            dob: new Date(),
        }

        // if(securityService.getToken())
        //     this.props.history.push('/admin/dashboard');
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSignUpFormSubmit = this.handleSignUpFormSubmit.bind(this);
        this.handleChangeDOB = this.handleChangeDOB.bind(this);
    }

    handleChangeValue = (e) => {
        // const {name, value} = e.target;
		// this.setState({
		// 	[name]: value
		// })
    }

    handleChangeDOB(date){
        this.setState({dob: date});
    }
    

    handleSignUpFormSubmit(data) {
        data['dob'] = moment(data['dob']).format('MM/DD/YYYY')
        this.props.submitStudentRegister(data)
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
                    <Row className=" no-gutters">
                        <div style={{width: '100%'}}>
                        <Col lg="12" md="12" className="register-form">
                                <Row>
                                    <Col md="4"></Col>
                                    <Col md="4">
                                         {/* <div className="app-logo" />
                                        <h1 className="mb-5 text-center"> EzyAttend </h1> */}
                                        
                                        <form className="register__form" onSubmit={handleSubmit(this.handleSignUpFormSubmit)}>
                                            
                                            <RegisterForm 
                                                handleChangeDOB={this.handleChangeDOB}
                                                handleChangeValue={this.handleChangeValue}
                                                dob={this.state.dob}
                                            />

                                            <div className="login-button-container text-center mt-5" >
                                                <Button className="btn-wide btn-shadow btn-block btn-hover-shine pl-5 pr-5 " size="lg" type="submit">SignUp</Button>
                                                <div className="d-flex justify-content-center">
                                                    <p className="mt-3 mr-2">Already have an account? </p>
                                                    <LinkButton path="/login" label="Log In" />
                                                </div>
                                            </div>
                                        </form>
                                    </Col>
                                    <Col md="4"></Col>
                                </Row>
                            
                        </Col>
                        </div>
                    </Row>
                </AppContainer>
            </Fragment>
        );
    }
}


const mapDispatchToProps = dispatch => ({
	submitSignup: data => dispatch(signUpAction(data)),
	submitStudentRegister: data => dispatch(registerTeacher(data))
});

const mapStateToProps = (state) => {
	
	const isLoading = state.authenticationReducer.isLoading
	return {
		  isLoading
	}
};

export default (connect(
	mapStateToProps,
	mapDispatchToProps
)(reduxForm({
	form: 'signupForm',
	enableReinitialize: true,
})(RegisterPage)));
