import React, { useState } from 'react';
import { Form, Input, Checkbox, Typography, Row, Col, Image } from 'antd';
import Notification from '../../../utils/notifications';
import EmailInput from '../../UI/EmailInput';
import ButtonComponent from '../../UI/ButtonComponent';

const { Title } = Typography;

const BrandsAsAuthorStory = ({ email }) => {
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
      <Row justify="center" align="middle">
        <Title level={2}>Brand as Author Story Submitted #sponsors</Title>
      </Row>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
            <Form name="basic" layout="vertical" onFinish={onFinish}>
                <Form.Item label="type" hidden name="type" initialValue={6}>
                    <Input />
                </Form.Item>

                <EmailInput email={email} />

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

                <ButtonComponent isLoading={isLoading} />

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

export default BrandsAsAuthorStory;
