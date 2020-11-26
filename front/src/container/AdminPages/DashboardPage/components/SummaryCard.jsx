import React from 'react'

import {Col, Row, Button,
    Card, CardBody
    } from 'reactstrap';

import styled from 'styled-components'

export default ({title, text, label, action}) => {
    return(
        <Card className="main-card">
            <CardBody>
                <div className="fsize-2">
                    <p>{title}</p>
                </div>
                <div className="fsize-4">
                    <p>{text}</p>
                </div>
                <h6 className="widget-subheading mb-0 opacity-5">{label}</h6>
            </CardBody>
        </Card>
    )
}