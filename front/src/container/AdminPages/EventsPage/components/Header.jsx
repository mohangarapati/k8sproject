import React from 'react'

import {Button, Col, Row, Card, CardBody, CardHeader} from 'reactstrap'

import styled from 'styled-components'

export default class Header extends React.Component {
    

    render(){
      
        return(
            <div className=" page-headers1 pt-3">
                <Col md="12">
                    <div className="fsize-2 ">
                        <p className="page-title">{this.props.title}</p>
                    </div>
                    <Row>
                        
                        <Col md="12">
                            <Card className="bg-card ">
                                <CardBody>
                                    <p className="text-white">Latest Upcoming Updates</p>
                                    <Card style={{height: 100}}>
                                        <CardBody>
                                            <Button color="danger" disable className="btn-pill">Past</Button>
                                        </CardBody>
                                    </Card>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    
                </Col>
            </div>
        )
    }
}