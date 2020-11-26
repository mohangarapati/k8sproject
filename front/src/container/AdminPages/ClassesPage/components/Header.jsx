import React from 'react'

import {Button, Col, Row, Card, CardBody, CardHeader} from 'reactstrap'

import styled from 'styled-components'

export default ({title}) => {
    return(
        <div className=" page-headers1 pt-3">
            <Col md="12">
                <div className="fsize-2 ">
                    <p className="page-title">{title}</p>
                </div>
                <Card className="bg-card ">
                    <CardBody>
                        <p className="text-white fsize-2">Current class details</p>
                        <Card style={{height: 100}}>
                            <CardBody>
                                <Button color="danger" disable className="btn-pill">Class 1</Button>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}