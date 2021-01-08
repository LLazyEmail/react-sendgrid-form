import React, { useState } from 'react';
import { Form, Input, Button, Typography, Image, Row, Col, Spin } from 'antd';
import Notification from '../../../utils/notifications';

const { Title } = Typography;

const BaaCreditsFinished = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async ({ type, email, first_name }) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type, email, first_name })
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
        <Title level={2}>BAA Credits Finished #sponsors</Title>
      </Row>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
          <Form name="basic" onFinish={onFinish} layout="vertical">
            <Form.Item label="type" hidden name="type" initialValue={2}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input correct email!'
                }
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
                  message: 'Please input first name!'
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
            src="/form-images/baa-credits-finished.png"
          />
        </Col>
      </Row>
    </>
  );
};

export default BaaCreditsFinished;
