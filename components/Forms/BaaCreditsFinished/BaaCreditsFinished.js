import React from 'react';
import {
  Form, Input, Button, Col, Row, Space, Typography,
} from 'antd';

const { Title } = Typography;

const BaaCreditsFinished = () => {
  const onFinish = ({ type, email, first_name }) => {
    console.log('Success:', email, first_name);
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, email, first_name }),
    });
  };

  return (
    <>
      <Title level={2}>BAA Credits Finished #sponsors</Title>

      <Form
        name="basic"
        onFinish={onFinish}
        layout="vertical"
      >

        <Form.Item
          label="type"
          hidden
          name="type"
          initialValue={2}
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default BaaCreditsFinished;
