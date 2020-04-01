import React from 'react';
import { Layout, Menu, Breadcrumb, Progress, Card } from 'antd';
import { FocusNode } from '../../libs/models/models';

const { Header, Content, Footer } = Layout;

interface FocusViewProp {
    focus : FocusNode
}

const FocusView: React.FC<FocusViewProp> = ({focus}) => {
    
    return (
        <Card title={focus.name}>
            {focus.description}
        </Card>
    );
  
}

export default FocusView;