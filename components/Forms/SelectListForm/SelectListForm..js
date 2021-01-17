import React from 'react';
import Selects from '../../CheckboxList/Select/Selects';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const SelectListForm = () => (
    <>
        <Row justify="center" align="middle">
            <Title level={2}>Select List Form</Title>
        </Row>
        <Row justify="center" align="middle">
            <Col xs={{ span: 20, offset: 2}} lg={{ span: 20, offset: 1 }}>
                <Selects />
            </Col>
        </Row>
    </>
)

export default SelectListForm;