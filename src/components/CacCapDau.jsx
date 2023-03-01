import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FaEdit } from "react-icons/fa";
import { TenCapDau, TenDoiTuyen, ThongSo } from './const';
import CapNhatKetQua from './CapNhatKetQua';



export default function CacCapDau() {
    const CacTenCapDau = [
        {
            Stt: 1,
            Bang: 'A',
            Thoigian: '20/11/2022, 23:00',
            TenDoiA: TenDoiTuyen.Quatar,
            TenDoiB: TenDoiTuyen.Ecuador,
            TenBang: ThongSo.BangA
        },
    ]
    const [ThongTinCacCapDau, setThongTinCacCapDau] = React.useState(TenCapDau)
    const [a, setA] = React.useState(CacTenCapDau)



    function CapDau({ arr }) {
        return (
            <Row>
                {arr?.map(value =>
                    <Col>
                        <Card>
                            <Card.Header className='d-flex align-items-center'>
                                <Form.Check
                                    type="checkbox"
                                    label={value.Thoigian} />
                                <Badge className='mx-3' bg="secondary">{value.Bang}</Badge>
                                <Button className='mx-1' size="sm" variant="primary"><FaEdit /></Button>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <Badge bg="light" text="dark">Falg</Badge>
                                    {value.TenDoiA}
                                </Card.Title>
                                <Card.Title>
                                    <Badge bg="light" text="dark">Falg</Badge>
                                    {value.TenDoiB}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        )
    }


    return (
        <div>
            <Container>
                <h3>1. Các cặp đấu vòng 1 - WorldCup 2022</h3>
                <Row>
                    <CapDau arr={ThongTinCacCapDau} />
                    <Col>
                        <CapNhatKetQua listCapDau={a} />
                    </Col>
                    <Col>p
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
