import React from 'react';
import { Layout } from 'antd';
import FocusNodes from '../focus/FocusNodes';

const { Content } = Layout;

class CareerView extends React.Component {
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
            <FocusNodes />
          </Content>
        </Layout>
    );
  }
}

export default CareerView
