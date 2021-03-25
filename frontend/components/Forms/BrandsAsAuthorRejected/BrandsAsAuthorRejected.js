import React, { useState } from 'react';
import { Form, Input, Typography, Image, Row, Col } from 'antd';
import Notification from '../../../utils/notifications';
import EmailInput from '../../UI/EmailInput';
import ButtonComponent from '../../UI/ButtonComponent';

const { Title } = Typography;

const BrandsAsAuthorRejected = ({ email }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async ({ type, email, name, storyTitle }) => {
    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          type, email, 
          'dynamicTemplateData': { name, storyTitle, }, 
          'templateId': '' 
        }),
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
        <Title level={2}>Brand as Author Story Rejected</Title>
      </Row>

      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
          <Form name="basic" layout="vertical" onFinish={onFinish}>
            <Form.Item label="type" hidden name="type" initialValue={7}>
              <Input />
            </Form.Item>

            <EmailInput email={email} />

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

            <ButtonComponent isLoading={isLoading} />

          </Form>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10 }}>
          <Title level={4}>Example</Title>
          <Image
            src="/form-images/baa-story-rejected.png"
          />
        </Col>
      </Row>
    </>
  );
};

export default BrandsAsAuthorRejected;
