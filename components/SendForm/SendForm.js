import React from 'react';
import {
  Form, Input, Button, Col, Row, Space,
} from 'antd';
import Old2019 from '../Forms/Old2019';
import BaaCreditsFinished from '../Forms/BaaCreditsFinished';
import GotFlaggedAsBaa from '../Forms/GotFlaggedAsBaa';
import PromotionalStoryDetected from '../Forms/PromotionalStoryDetected/PromotionalStoryDetected';
import BrandsAsAuthorStory from '../Forms/BrandsAsAuthorStory/BrandsAsAuthorStory';
import BrandsAsAuthorCredits from '../Forms/BrandsAsAuthorCredits/BrandsAsAuthorCredits';

const SendForm = () => (
  <>
    <Row
      style={{ marginTop: '100px' }}
      gutter={{
        xs: 8, sm: 16, md: 24, lg: 32,
      }}
    >
      <Col span={3} />
      <Col span={6}>
        <Old2019 />
      </Col>
      <Col span={6}>
        <BaaCreditsFinished />
      </Col>
      <Col span={6}>
        <GotFlaggedAsBaa />
      </Col>
      <Col span={3} />
    </Row>
    <Row
      style={{ marginTop: '100px' }}
      gutter={{
        xs: 8, sm: 16, md: 24, lg: 32,
      }}
    >
      <Col span={3} />
      <Col span={6}>
        <PromotionalStoryDetected />
      </Col>
      <Col span={6}>
        <BrandsAsAuthorCredits />
      </Col>
      <Col span={6}>
        <BrandsAsAuthorStory />
      </Col>
      <Col span={3} />
    </Row>
  </>
);

export default SendForm;
