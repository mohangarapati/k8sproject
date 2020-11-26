import React from 'react'
import {Col, Row, Button,
    Card, CardBody,CardHeader, CardTitle
    } from 'reactstrap';
import Chart from 'react-apexcharts'
import {
    LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceLine, ResponsiveContainer, 
} from 'recharts';
import styled from 'styled-components'

export default ({chartdata, piechartdata}) => {
    const options4 = {
        chart: {
            id: 'apexchart-example-2'
        },
      labels: ['Group1', 'Group2'],
    }
    return(
        <div className=" page-headers">
                        
            <Col md="12">
                <div className="fsize-2 ">
                    <p className="page-title">DASHBOARD</p>
                </div>
                <Row>
                    <Col lg="3" md="12">
                        <Card className="bg-card pie-card">
                            <CardBody>
                                <Row>
                                    <Col md="8"><div className="fsize-2"><p>Classes</p></div></Col>
                                    <Col md="4"><a>Reports</a></Col>
                                </Row>
                                <Col md="12">
                                    {piechartdata && 
                                    <Chart options={options4} series={piechartdata} type="donut" width="120%" />
                                    }
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="9" md="12">
                        <Card className="bg-card round-card">
                            <CardBody>
                                <Row>
                                    <Col md="8"><div className="fsize-2 "><p>Classe Strength</p></div></Col>
                                    <Col md="4"><a>Reports</a></Col>
                                </Row>
                                <ResponsiveContainer className="mt-1" width='100%' aspect={4.0 / 0.9}>
                                    <LineChart data={chartdata}>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="name" stroke="#ffffff"/>
                                        <YAxis stroke="#ffffff"/>
                                        <Tooltip/>
                                        <Line type="monotone" dataKey="pv" stroke="#000000" activeDot={{r: 8}}
                                            />
                                        <Tooltip/>
                                        <Line type="monotone" dataKey="uv" stroke="#ffffff"
                                            strokeDasharray="3 4 5 2"/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
            
        </div>
    )
}