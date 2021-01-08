import React, { useState } from 'react';
import { Form, Input, Button, Typography, Spin } from 'antd';
import Notification from '../../../utils/notifications';

const { Title } = Typography;

const BrandsAsAuthorCredits = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async ({ type, email }) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type, email })
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
      <Title level={2}>Brand As Author Credits Purchased V1</Title>

      <Form name="basic" layout="vertical" onFinish={onFinish}>
        <Form.Item label="type" hidden name="type" initialValue={5}>
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

export default BrandsAsAuthorCredits;
