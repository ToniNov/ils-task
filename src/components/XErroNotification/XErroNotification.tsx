import React from 'react';

import { Alert } from 'antd';

type PropsType = {
  error: Error;
};

export const ErrorNotification: React.FC<PropsType> = ({ error }) => {
  return <Alert message="Error" description={error.message} type="error" showIcon />;
};
