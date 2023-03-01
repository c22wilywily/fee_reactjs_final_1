import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

export default function CapNhatKetQua({ listCapDau }) {
    const [listCacCapDauCapNhat, setListCacCapDauCapNhat] = useState()

    useEffect(() => {
        setListCacCapDauCapNhat(listCapDau)
    }, [listCapDau])

    function deleteCapNhat(stt) {
        const ArrCapNhat = [...listCapDau]
        setListCacCapDauCapNhat(ArrCapNhat.filter(item => item.Stt !== stt))
    }



    return (
        <div>
            <h3>2. Cập nhật kết quá các cặp đấu vòng 1</h3>
            <Container>
                <Row>
                    <Col>
                        {listCacCapDauCapNhat?.map((value, index) =>
                            <Card key={index}>
                                <Card.Body>
                                    <Card.Title>
                                        <Badge bg="light" text="dark">Falg</Badge>
                                        {value.TenDoiA}
                                        <input style={{ width: '50px' }} />
                                        vs
                                        <input style={{ width: '50px' }} />
                                        {value.TenDoiB}
                                        <Badge bg="light" text="dark">Falg</Badge>

                                        <Button onClick={() => deleteCapNhat(value.Stt)}>X</Button>
                                    </Card.Title>
                                    <Card.Text>
                                        Ngày thi đấu: {value.Thoigian} - {value.TenBang}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
