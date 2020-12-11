import React from 'react';
import {
    Form, Input, Button, Col, Row, Space, Typography
  } from 'antd';

  const { Title } = Typography;

const BrandsAsAuthorStory = () => {

    const onFinish = ({email, handle, storyTitle, hasCredits}) => {
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
                label="Handle"
                name="handle"
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
                label="Story Title"
                name="storyTitle"
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
                label="Has Credits"
                name="hasCredits"
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

export default BrandsAsAuthorStory;
