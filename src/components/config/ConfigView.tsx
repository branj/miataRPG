import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ChooseCarView from './ChooseCarView';

const { Content } = Layout;

class ConfigView extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed:any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <Layout>
          <Content style={{textAlign: 'center'}}>  
            <ChooseCarView /> 
          </Content>
        </Layout>
    );
  }
}

export default ConfigView
