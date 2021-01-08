import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, Spin } from 'antd';
import Notification from '../../../utils/notifications';

const { Title } = Typography;

const BrandsAsAuthorStory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async ({ type, email, handle, storyTitle, hasCredits }) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type,
          email,
          handle,
          storyTitle,
          hasCredits
        })
      });
      if (response.status !== 200) {
        Notification('error', response.statusText);
      } else {
        Notification('success');
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Notification('error', error);
    }
  };

  return (
    <>
      <Title level={2}>Brand as Author Story Submitted #sponsors</Title>

      <Form name="basic" layout="vertical" onFinish={onFinish}>
        <Form.Item label="type" hidden name="type" initialValue={6}>
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
          label="Handle"
          name="handle"
          rules={[
            {
              required: true,
              message: 'Handle is required!'
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
        <Form.Item label="Has Credits" name="hasCredits" valuePropName="checked">
          <Checkbox>Has Credits?</Checkbox>
        </Form.Item>

        <Form.Item>
          {isLoading ? (
            <Spin tip="Submiting...">
              <Button type="primary" htmlType="submit" block>
                Submit form
              </Button>
            </Spin>
          ) : (
            <Button type="primary" htmlType="submit" block>
              Submit form
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default BrandsAsAuthorStory;
