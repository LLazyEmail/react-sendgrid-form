import React from 'react';
import {
    Form, Input, Button, Col, Row, Space, Typography
  } from 'antd';

  const { Title } = Typography;

const PromotionalStoryDetected = () => {

    const onFinish = ({email, full_name, url, time}) => {
        console.log('Success:', email);
        fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        })
      };

    return (
        <>
            <Title level={2}>Promotional story detected #writers</Title>
        
            <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Full Name"
                name="full_name"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Url"
                name="url"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Time"
                name="time"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default PromotionalStoryDetected;
