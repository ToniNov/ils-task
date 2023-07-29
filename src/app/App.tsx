import { FC } from 'react';

import { Layout } from 'antd';

import { ReactComponent as Logo } from '../assets/logosvg.svg';
import { XTable } from '../components/XTable/XTable';

import styles from './App.module.scss';

const { Header, Sider, Content } = Layout;

const App: FC = () => {
  return (
    <Layout className={styles.appLayout}>
      <Header className={styles.header}>
        <Logo />
      </Header>
      <Layout>
        <Sider className={styles.sider} width="30%">
          <XTable />
        </Sider>
        <Content className={styles.content}>Add main container content here</Content>
      </Layout>
    </Layout>
  );
};

export default App;
