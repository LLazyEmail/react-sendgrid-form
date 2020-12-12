import React from 'react';
import {
    Form, Input, Button, Col, Row, Space, Typography
  } from 'antd';

  const { Title } = Typography;

const BrandsAsAuthorCredits = () => {

    const onFinish = ({type, email}) => {
        console.log('Success:', type, email);
        fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type, email })
        })
      };

    return (
        <>
            <Title level={2}>Brand As Author Credits Purchased V1</Title>
        
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
            >

            <Form.Item
                label="type"
                hidden={true}
                name="type"
                initialValue={5}
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

            <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Submit 1 layout
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default BrandsAsAuthorCredits;
