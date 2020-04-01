import React from 'react';
import { Card, Avatar } from 'antd';
import { Material } from '../../libs/models/material';
import Meta from 'antd/lib/card/Meta';


interface MaterialViewProp {
    material : Material
}

const MaterialView: React.FC<MaterialViewProp> = ({material}) => {
    return (
        <Card 
            actions={[
                'Get Now',
                'View On Amazon',
            ]}
            cover={
                material.referral.image
            }
        >
            <Meta
                avatar={<Avatar />}
                title={material.title}
                description={material.description}
            /> 
        </Card>
    );  
}

export default MaterialView;