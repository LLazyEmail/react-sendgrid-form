import React, { useState } from 'react';
import HomepageTagsForm from '../../CheckboxList/HomepageTagsForm';
import { Col, Row, Typography, Form } from 'antd';
import Notification from '../../../utils/notifications';
import ButtonComponent from '../../UI/ButtonComponent';

const { Title } = Typography;

const SelectListForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const onFinish = async ({ email, type }) => {
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:3001/api/send-email', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, type })
            });
        if (response.status !== 200) {
            Notification('error', response.statusText);
        } else {
            Notification('success');
        }
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            Notification('error', error);
        }
    };
    return (
        <>
            <Row justify="center">
                <Title level={2}>Select List Form</Title>
            </Row>
            <div style={{width: '40vw'}}>
                <Col xs={{ span: 20, offset: 2}} lg={{ span: 20, offset: 2 }}>
                    <Form
                        name="basic"
                        layout="vertical"
                        initialValues={{
                            remember: true
                        }}
                        onFinish={onFinish}
                    >
                        <HomepageTagsForm />
                        
                        <ButtonComponent isLoading={isLoading} />
                    </Form>
                </Col>
            </div>
        </>
    )
}

export default SelectListForm;