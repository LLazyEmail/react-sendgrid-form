import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const Old2019 = () => {
  const onFinish = ({ email, type }) => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, type })
    });
  };

  return (
    <>
      <Title level={2}>Old 2019 version</Title>

      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input correct email!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="type" hidden name="type" initialValue={1}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit Old 2019 Form
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Old2019;
