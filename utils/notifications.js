// Notifications for form sending
import { notification } from 'antd';

const Notification = (type, error) => {
  if(type === 'success') {
    notification.success({
      message: `Success`,
      description: 'Form submited successful',
      placement: 'bottomRight',
    });
  } else {
    notification.error({
      message: `Error`,
      description: `${error}`,
      placement: 'bottomRight',
    });
  }
};

export default Notification;