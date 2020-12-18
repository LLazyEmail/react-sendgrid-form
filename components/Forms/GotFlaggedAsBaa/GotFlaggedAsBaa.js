import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const GotFlaggedAsBaa = () => {
  const onFinish = ({ type, email, first_name, article_link, article_title, brand }) => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type,
        email,
        first_name,
        article_link,
        article_title,
        brand
      })
    });
  };

  return (
    <>
      <Title level={2}>got flagged as BAA #sponsors</Title>

      <Form name="basic" layout="vertical" onFinish={onFinish}>
        <Form.Item label="type" hidden name="type" initialValue={3}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Article Link"
          name="article_link"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Article Title"
          name="article_title"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Brand"
          name="brand"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}>
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

export default GotFlaggedAsBaa;
