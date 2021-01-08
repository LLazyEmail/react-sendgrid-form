import React, { useState } from 'react';
import { Form, Input, Button, Typography, Image, Row, Col, Spin } from 'antd';
import Notification from '../../../utils/notifications';

const { Title } = Typography;

const GotFlaggedAsBaa = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async ({
    type,
    email,
    first_name,
    article_link,
    article_title,
    brand
  }) => {
    try {
      const response = await fetch('/api/send-email', {
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
        <Title level={2}>got flagged as BAA #sponsors</Title>
      </Row>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
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
                  message: 'First Name is required!'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Article Link"
              name="article_link"
              rules={[
                {
                  required: true,
                  message: 'Article Link is required!'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Article Title"
              name="article_title"
              rules={[
                {
                  required: true,
                  message: 'Article Title Link is required!'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Brand"
              name="brand"
              rules={[
                {
                  required: true,
                  message: 'Brand Link is required!'
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
            src="/form-images/baa-got-flaged.png"
          />
        </Col>
      </Row>
    </>
  );
};

export default GotFlaggedAsBaa;
