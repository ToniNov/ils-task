import React from 'react';

import { Alert } from 'antd';

type PropsType = {
  error: string;
};

export const ErrorNotification: React.FC<PropsType> = ({ error }) => {
  return <Alert message="Error" description={error} type="error" showIcon />;
};
