import React from 'react';
import { Layout, Card, Descriptions } from 'antd';
import { Carousel } from 'antd';
import { CARS } from '../../libs/constants/Cars';
import { Car } from '../../libs/models/car';
import { Tabs } from 'antd';
import Meta from 'antd/lib/card/Meta';

const { TabPane } = Tabs;
const { Content } = Layout;

class ChooseCarView extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed:any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const onChange = () => {
        console.log();
    }  
    return (
        <Layout>
          <Content style={{textAlign: 'center'}}>  

          <Tabs defaultActiveKey="1" tabPosition={"left"} >
            {
                CARS.map((i) => (
                    <TabPane tab={`${i.model}`} key={i.model}>
                        <Card 
                            hoverable
                            title={i.make + " " + i.model} 
                            cover={<img alt="example" src={i.image} />}
                            extra={<input type='checkbox' />} 
                            style={{ width: 300 }}>
                            <Meta

                                title="Year"
                                description={i.year}
                            />
                            <Meta
                                title="Engine"
                                description={i.engine}
                            />
                             <Meta
                                title="Transmission"
                                description={i.transmission}
                            />
                        </Card>
                    </TabPane>
                ))
            }
    
            </Tabs>
          </Content>
        </Layout>
    );
  }
}
export default ChooseCarView;
 