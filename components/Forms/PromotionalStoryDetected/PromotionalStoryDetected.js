import React from 'react';
import {
    Form, Input, Button, Col, Row, Space, Typography
  } from 'antd';

  const { Title } = Typography;

const PromotionalStoryDetected = () => {

    const onFinish = ({type, email, full_name, url, time}) => {
        console.log('Success:', type, email, full_name, url, time);
        fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type, email, full_name, url, time })
        })
      };

    return (
        <>
            <Title level={2}>Promotional story detected #writers</Title>
        
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
            >
             <Form.Item
                label="type"
                hidden={true}
                name="type"
                initialValue={4}
            >
                <Input />
            </Form.Item> 

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
