import React from 'react';
import { Checkbox, Row, Col } from 'antd';

const CheckboxGroup = () => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <Checkbox.Group style={{ width: '80%' }} onChange={onChange}>
    <Row>
      <Checkbox value="A">Billboard Advertisement</Checkbox>
    </Row>
    <Row>
      <Checkbox value="B">Targeted Advertisement</Checkbox>
    </Row>
    <Row>
      <Checkbox value="C">Newsletters</Checkbox>
    </Row>
    <Row>
      <Checkbox value="D">Branded Stories</Checkbox>
    </Row>
    </Checkbox.Group>
  );
};

export default CheckboxGroup;
