import React from 'react';
import { Form, Input } from 'antd';

const MyInput = props => {
    return (
        <Form.Item
              label={props.label}
              name={props.name}
              rules={[
                    {
                        required: true,
                        type: props.type ? props.type : '',
                        message: `Please input ${props.message}`
                    }
                ]}
            >
              <Input />
        </Form.Item>
    )
}

export default MyInput;