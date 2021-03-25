import React from 'react';
import { notification } from 'antd';

const openNotification = (type) => {
  notification[type]({
    message: `Notification`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement: 'bottomRight',
  });
};

const useOnFinish = async(props) => {
  try {
    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    });
    console.log(response);
    if (response.status !== 200) {
      openNotification('error');
    } else {
      openNotification('info');
    }
  } catch (error) {
    console.error(error);
    openNotification('error');
  }
};

export default useOnFinish;