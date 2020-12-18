import React from 'react';
import { Checkbox, Row, Col } from 'antd';

const CheckboxGroup = () => {
    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    return (
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
            <Checkbox value="A">Billboard Advertisement</Checkbox>
            <Checkbox value="B">Targeted Advertisement</Checkbox>
            <Checkbox value="C">Newsletters</Checkbox>
            <Checkbox value="D">Branded Stories</Checkbox>
      </Checkbox.Group>
    );
};

export default CheckboxGroup;
