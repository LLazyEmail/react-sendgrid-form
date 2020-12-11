import React from 'react';
import {
  Form, Input, Button, Col, Row, Space,
} from 'antd';

const SendForm = () => {
  const onFinish = ({email}) => {
    console.log('Success:', email);
    fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row>
      <Col span={8} />
      <Col span={8} style={{ marginTop: '100px' }}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Row>
            <Space>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit 1 layout
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit 2 layout
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit 3 layout
                </Button>
              </Form.Item>
            </Space>
          </Row>
        </Form>
      </Col>
      <Col span={8} />
    </Row>
  );
};

export default SendForm;
