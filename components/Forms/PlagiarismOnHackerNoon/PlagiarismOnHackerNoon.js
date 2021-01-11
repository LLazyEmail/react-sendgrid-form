import React, { useState } from 'react';
import { Form, Input, Button, Typography, Image, Row, Col, Spin } from 'antd';
import Notification from '../../../utils/notifications';
// after my pull request we should import our email component
// import EmailInput from '../../UI/EmailInput';  

const { Title } = Typography;

const PlagiarismOnHackerNoon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async ({ email, type }) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, type })
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
        <Title level={2}>Plagiarism on Hacker Noon</Title>
      </Row>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
          >
            {/* <EmailInput /> */}
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                    required: true,
                    type: 'email',
                    message: 'Email is required!'
                    }
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item label="type" hidden name="type" initialValue={1}>
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
            src="/form-images/plagiarism-on-hackernoon.png"
          />
        </Col>
      </Row>
    </>
  );
};

export default PlagiarismOnHackerNoon;