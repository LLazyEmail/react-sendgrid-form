import React from 'react';
import {
    Form, Input, Button, Col, Row, Space, Typography
  } from 'antd';

  const { Title } = Typography;

const Old2019 = () => {

    const onFinish = ({email}) => {
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
            <Title level={2}>Old 2019 version</Title>
        
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

            <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Submit 1 layout
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Old2019;
