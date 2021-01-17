import React from 'react';
import { Form, Input } from 'antd';

const EmailInput = ({ email }) => (
        <Form.Item
              initialValue={email || ''}
              label='Email'
              name='email'
              rules={[
                    {
                        required: true,
                        type: 'email',
                        message: `Please input correct email!`
                    }
                ]}
            >
              <Input />
        </Form.Item>
)

export default EmailInput;