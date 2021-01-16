import React, { useState } from 'react';
import { Form, Input, Button, Typography, Spin, Row, Col, Image } from 'antd';
import Notification from '../../../utils/notifications';
import EmailInput from '../../UI/EmailInput';
import ButtonComponent from '../../UI/ButtonComponent';

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

      <Row justify="center" align="middle">
        <Title level={2}>Brand As Author Credits Purchased V1</Title>
      </Row>

      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
          <Form name="basic" layout="vertical" onFinish={onFinish}>
            <Form.Item label="type" hidden name="type" initialValue={5}>
              <Input />
            </Form.Item>

            <EmailInput />

            <ButtonComponent isLoading={isLoading} />

          </Form>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10 }}>
          <Title level={4}>Example</Title>
            <Image
                src="/form-images/baa-credits-purchased.png"
            />
        </Col>
      </Row>
    </>
  );
};

export default BrandsAsAuthorCredits;
