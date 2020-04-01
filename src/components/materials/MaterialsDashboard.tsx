import React from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import { Material } from '../../libs/models/material';
import MaterialView from './MaterialView';

interface MaterialsProp {
    materials : Material []
}

const gridStyle = {
    
}

const MaterialsDashboard: React.FC<MaterialsProp> = ({materials}) => {
    const [selectedMaterial, setSelectedMaterial] = React.useState(materials[0])

    const handleMaterialClick = (materialIndex: number) => {
        setSelectedMaterial(materials[materialIndex]);
    }
    
    return (
        <Row gutter={16}>
                <Col span={8}>
                    <Card title="Items">
                    {materials.map((e,i) => { 
                        return <Card.Grid style={gridStyle}>
                                    <div  onMouseEnter={() => {handleMaterialClick(i)}} >
                                        <Avatar>{e.title}</Avatar>
                                    </div>
                                </Card.Grid>
                        }
                    )}
                    </Card>
                </Col>
                <Col span={8}>
                    <MaterialView material={selectedMaterial} />
                </Col>
        </Row>
    );  
}

export default MaterialsDashboard;