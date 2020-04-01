import React from 'react';
import { Select } from 'antd';
import { CARS } from '../../libs/constants/Cars';
const { Option } = Select;



const CarSelectComponent: React.FC = () => {
    
    return (
        <Select 
            size="large" placeholder="Choose Car" style={{ width: '100%' }}>
            {CARS.map((car, index)=>{
                return <Option value={index}>{car.make} - {car.model}</Option>
            })}
        </Select>
    );
  
}

export default CarSelectComponent;