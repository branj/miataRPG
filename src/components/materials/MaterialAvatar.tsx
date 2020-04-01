import React from 'react';
import {  Avatar } from 'antd';
import { Material } from '../../libs/models/material';


interface MaterialProp {
    material : Material,
    color? : string
}

const MaterialAvatar: React.FC<MaterialProp> = ({material, color}) => {
    return (
        <Avatar>
            {material.title}
        </Avatar>
    );  
}

export default MaterialAvatar;