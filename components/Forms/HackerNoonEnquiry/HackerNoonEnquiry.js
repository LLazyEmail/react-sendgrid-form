import React from 'react';
import { Form, Input, Button, Typography, DatePicker } from 'antd';
import CheckboxGroup from './CheckboxGroup';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const HackerNoonEnquiry = () => {
  const onFinish = ({}) => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type,
        email
      })
    });
  };

  return (
    <>
      <Title level={2}>Hacker Noon Enquiry Form</Title>

      <Form name="basic" layout="vertical" onFinish={onFinish}>
        <Form.Item label="type" hidden name="type" initialValue={3}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Your Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Your Name!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Your Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email Address!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Your Company Name"
          name="company"
          rules={[
            {
              required: true,
              message: 'Please input your Company Name!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Your Company Website"
          name="company_url"
          rules={[
            {
              required: true,
              message: 'Please input Your Company Website!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="What's your position at the company?"
          name="ocupation"
          rules={[
            {
              required: true,
              message: 'Please input your position at the company!'
            }
          ]}>
          <Input />
        </Form.Item>

        <CheckboxGroup />

        <RangePicker label="What date are you looking to have your ad live" />

        <Form.Item label="Any other message for us?" name="message">
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

export default HackerNoonEnquiry;
