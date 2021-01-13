import React from 'react';
import { Checkbox, Row } from 'antd';

const Checkboxes = () => {
  const change = (value) => {
    console.log('checked = ', value);
  };

  return (
    <Checkbox.Group style={{ width: '100%' }} onChange={change}>
      <Row>
        <Checkbox value="1">programming</Checkbox>
      </Row>
      <Row>
        <Checkbox value="2">startups</Checkbox>
      </Row>
      <Row>
        <Checkbox value="3">decentralization</Checkbox>
      </Row>
      <Row>
        <Checkbox value="4">python</Checkbox>
      </Row>
      <Row>
        <Checkbox value="5">blockchain</Checkbox>
      </Row>
      <Row>
        <Checkbox value="6">technology</Checkbox>
      </Row>
      <Row>
        <Checkbox value="7">cryptocurrency</Checkbox>
      </Row>
      <Row>
        <Checkbox value="8">entrepreneurship</Checkbox>
      </Row>
      <Row>
        <Checkbox value="9">business</Checkbox>
      </Row>
      <Row>
        <Checkbox value="10">bitcoin</Checkbox>
      </Row>
      <Row>
        <Checkbox value="11">react</Checkbox>
      </Row>
      <Row>
        <Checkbox value="12">marketing</Checkbox>
      </Row>
      <Row>
        <Checkbox value="13">ux</Checkbox>
      </Row>
      <Row>
        <Checkbox value="14">devops</Checkbox>
      </Row>
      <Row>
        <Checkbox value="15">web-development</Checkbox>
      </Row>
      <Row>
        <Checkbox value="16">venture-capital</Checkbox>
      </Row>
      <Row>
        <Checkbox value="17">social-media</Checkbox>
      </Row>
      <Row>
        <Checkbox value="18">design</Checkbox>
      </Row>
      <Row>
        <Checkbox value="19">coding</Checkbox>
      </Row>
      <Row>
        <Checkbox value="20">security</Checkbox>
      </Row>
      <Row>
        <Checkbox value="21">artificial-intelligence</Checkbox>
      </Row>
      <Row>
        <Checkbox value="22">amazon</Checkbox>
      </Row>
    </Checkbox.Group>
  );
};

export default Checkboxes;
