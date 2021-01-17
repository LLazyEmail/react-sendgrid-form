import React from 'react';
import Checkboxes from '../../CheckboxList/Checkboxes';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const CheckboxListForm = () => (
    <>
        <Row justify="center" align="middle">
            <Title level={2}>Checkbox List Form</Title>
        </Row>
        <Row justify="center" align="middle">
            <Col xs={{ span: 20, offset: 2}} lg={{ span: 20, offset: 1 }}>
                <Checkboxes />
            </Col>
        </Row>
    </>
)

export default CheckboxListForm;