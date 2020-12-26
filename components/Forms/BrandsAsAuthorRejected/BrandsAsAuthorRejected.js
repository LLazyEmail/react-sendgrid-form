import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';

const { Title } = Typography;

const BrandsAsAuthorRejected = () => {
  const onFinish = ({ type, email, name, storyTitle }) => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type,
        email,
        name,
        storyTitle,
      })
    });
  };

  return (
    <>
      <Title level={2}>Brand as Author Story Rejected</Title>

      <Form name="basic" layout="vertical" onFinish={onFinish}>
        <Form.Item label="type" hidden name="type" initialValue={7}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Email is required!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Company Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Company Name is required!'
            }
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
              message: 'Story Title is required!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit form
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default BrandsAsAuthorRejected;
