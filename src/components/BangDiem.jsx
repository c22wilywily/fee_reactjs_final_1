import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { TenDoi, ThongSo } from './const';
import { useState } from 'react';


export default function BangDiem() {
    const [CacDoiBangA, setCacDoiBangA] = useState(TenDoi.BangA)
    const [CacDoiBangB, setCacDoiBangB] = useState(TenDoi.BangB)



    function HeaderTableBangDiem({ TenBang }) {
        return (
            <Table responsive >
                <thead>
                    <tr>
                        <th>{TenBang}</th>
                        <th>{ThongSo.Thang}</th>
                        <th>{ThongSo.Hoa}</th>
                        <th>{ThongSo.Thua}</th>
                        <th>{ThongSo.HieuSo}</th>
                        <th>{ThongSo.Diem}</th>
                    </tr>
                </thead>
                {TenBang === ThongSo.BangA ? <BodyTableBangDiem isBang={true} /> : <BodyTableBangDiem isBang={false} />}
            </Table>
        )
    }

    function ChildrenTable({ arr }) {
        return (
            <tbody>
                {arr.map((value, index) =>
                    <tr key={index}>
                        <td>{value.Ten}</td>
                        <td>{value.Thang}</td>
                        <td>{value.Hoa}</td>
                        <td>{value.Thua}</td>
                        <td>{value.HieuSo}</td>
                        <td>{value.Diem}</td>
                    </tr>
                )}
            </tbody>
        )
    }

    function BodyTableBangDiem({ isBang }) {
        if (isBang) {
            return (
                <ChildrenTable arr={CacDoiBangA} />
            )
        } else {
            return (
                <ChildrenTable arr={CacDoiBangB} />
            )
        }
    }

    return (
        <div>
            <Container>
                <h3>4. Bảng điểm</h3>
                <Row>
                    <Col>
                        <HeaderTableBangDiem TenBang={ThongSo.BangA} />
                    </Col>
                    <Col>
                        <HeaderTableBangDiem TenBang={ThongSo.BangB} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
