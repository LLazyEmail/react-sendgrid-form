import React from 'react';
import {
    Form, Input, Button, Checkbox, Col, Row, Space, Typography
  } from 'antd';

  const { Title } = Typography;

const BrandsAsAuthorStory = () => {

    const onFinish = ({type, email, handle, storyTitle, hasCredits }) => {
        console.log('Success:', type, email, handle, storyTitle, hasCredits);
        fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type, email, handle, storyTitle, hasCredits })
        })
      };

    return (
        <>
            <Title level={2}>Brand as Author Story Submitted #sponsors</Title>
        
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
            >
            <Form.Item
                label="type"
                hidden={true}
                name="type"
                initialValue={6}
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
                valuePropName="checked"
            >
                <Checkbox>Has Credits?</Checkbox>
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
