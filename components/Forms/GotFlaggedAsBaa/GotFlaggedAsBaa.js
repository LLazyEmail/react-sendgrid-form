import React from 'react';
import {
    Form, Input, Button, Col, Row, Space, Typography
  } from 'antd';

  const { Title } = Typography;

const GotFlaggedAsBaa = () => {

    const onFinish = ({email, first_name, article_link, article_title, brand}) => {
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
            <Title level={2}>got flagged as BAA #sponsors</Title>
        
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
                label="First Name"
                name="first_name"
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
                label="Article Link"
                name="article_link"
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
                label="Article Title"
                name="article_title"
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
                label="Brand"
                name="brand"
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

export default GotFlaggedAsBaa;
