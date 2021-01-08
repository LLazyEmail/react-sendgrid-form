import React, { useState } from 'react';
import { Form, Input, Button, Typography, Image, Row, Col, Spin } from 'antd';
import Notification from '../../../utils/notifications';

const { Title } = Typography;

const PromotionalStoryDetected = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async ({ type, email, full_name, url, time }) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type,
          email,
          full_name,
          url,
          time
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
      <Row justify="center" align="middle">
        <Title level={2}>Promotional story detected #writers</Title>
      </Row>

      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
          <Form name="basic" layout="vertical" onFinish={onFinish}>
            <Form.Item label="type" hidden name="type" initialValue={4}>
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
              label="Full Name"
              name="full_name"
              rules={[
                {
                  required: true,
                  message: 'Full Name is required!'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Url"
              name="url"
              rules={[
                {
                  required: true,
                  message: 'Url is required!'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Time"
              name="time"
              rules={[
                {
                  required: true,
                  message: 'Time is required!'
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
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10 }}>
          <Title level={4}>Example</Title>
          <Image
            src="/form-images/baa-promotional-story.png"
        />
        </Col>
      </Row>
    </>
  );
};

export default PromotionalStoryDetected;
