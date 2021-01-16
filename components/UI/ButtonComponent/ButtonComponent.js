import React from 'react';
import { Form, Button, Spin } from 'antd';

const ButtonComponent = ({ isLoading }) => (
    <Form.Item>
        {isLoading ? (
            <Spin tip="Submiting...">
                <Button type="primary" htmlType="submit" block>
                    Submit form
                </Button>
            </Spin>
            ) : (
            <Button type="primary" htmlType="submit" block>
                Submit form
            </Button>
        )}
    </Form.Item>
)

export default ButtonComponent;