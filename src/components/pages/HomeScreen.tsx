import React from 'react';
import {  Empty, Menu, Card, Button } from 'antd';
import CreatePlayerModal from '../player/CreatePlayerModal';
import SubMenu from 'antd/lib/menu/SubMenu';


const HomeScreen: React.FC = () => {
    
    const [show, setShow] = React.useState<boolean>(false)
    
    const handleClick = (data:any) => {
        setShow(!show)
    }

    return (
        
        <div>
            <CreatePlayerModal show={show}  />
            <Empty
                image={<></>}
                description={
                <div style={{textAlign:'center'}}>
                    <Card 
                        style={{ width: 300,  display: 'inline-block', padding: '0' }}
                        actions={[
                            <Button type="danger" onClick={handleClick} key="1">
                                New Player
                            </Button>
                        ]}
                    >       
                        <div style={{width:'100%', height:'115px'}}><img width='115px' src="/miata.svg" />RPG</div>
                        Focus.Gather.Repeat
                     </Card>
                </div>
                }
                >
            </Empty>
      </div>
    );
  
}

export default HomeScreen;