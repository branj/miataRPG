import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import { Material } from '../../libs/models/material';



interface FocusViewProp {
    material : Material
}

const MaterialsDescriptionComponent: React.FC<FocusViewProp> = ({material}) => {
    
    return (
        <PageHeader
            ghost={false}
            title={false}
            subTitle={material.description}
            extra={[
                <Button key="1" type="primary">
                    Get Item Now!
                </Button>,
            ]}
            >
            <Descriptions size="small" column={3}>
                <Descriptions.Item label="Referrer">{material.referral.title}</Descriptions.Item>
                <Descriptions.Item label="Referrer Website">
                    <a href={material.referral.referralUrl}>View</a>
                </Descriptions.Item>
                <Descriptions.Item label="Cost">{material.cost}</Descriptions.Item>
            </Descriptions>
        </PageHeader>
    );
  
}

export default MaterialsDescriptionComponent;