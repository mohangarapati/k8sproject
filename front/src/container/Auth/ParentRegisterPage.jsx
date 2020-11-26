import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm  } from 'redux-form';

import { Col, Row, Button, Card, CardBody } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';

import { LinkButton, Loader } from '../../Common/Components';

import { registerParent } from './authactions';
import {AppContainer} from '../../Layout/AppContainer'

import ParentRegisterForm from './Components/ParentRegisterForm'

class ParentRegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            dob: new Date(),
        }

        this.handleChangeDOB = this.handleChangeDOB.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSignUpFormSubmit = this.handleSignUpFormSubmit.bind(this);
    }

    handleChangeDOB(date){
        this.setState({dob: date});
    }

    handleChangeValue = (e) => {
        // const {name, value} = e.target;
		// this.setState({
		// 	[name]: value
		// })
    }

    handleSignUpFormSubmit(data) {
        data['dob'] = moment(data['dob']).format('DD/MM/YYYY')
        this.props.submitSignup(data)
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
                        <Col lg="12" md="12" className="mt-3">
                        <Card className="full-card" >
                                <CardBody>
                                <Row>
                                    <Col lg={{size: 6, offset: 3}} md={{size: 10, offset: 1}} sm="12">
                                         {/* <div className="app-logo" />
                                        <h1 className="mb-5 text-center"> EzyAttend </h1> */}
                                        
                                        <form className="register__form" onSubmit={handleSubmit(this.handleSignUpFormSubmit)}>
                                            
                                            <ParentRegisterForm 
                                                handleChangeDOB={this.handleChangeDOB}
                                                handleChangeValue={this.handleChangeValue}
                                                dob={this.state.dob}
                                            />

                                            <div className="login-button-container text-center mt-5" >
                                                <Row className="text-center justify-content-center">
                                                    <Col md="4" sm="4" xs="6">
                                                        <Button className="btn-wide btn-shadow btn-block btn-hover-shine pl-5 pr-5" size="lg" type="submit">SignUp</Button>
                                                    </Col>
                                                </Row>
                                                <div className="d-flex justify-content-center">
                                                    <p className="mt-3 mr-2">Already have an account? </p>
                                                    <LinkButton path="/par/login" label="Log In" />
                                                </div>
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
	submitSignup: data => dispatch(registerParent(data)),
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
	form: 'parentsignupForm',
	enableReinitialize: true,
})(ParentRegisterPage)));
