import React from 'react';
import { Modal, Input, Select, Row, Col, Checkbox, Avatar } from 'antd';
import { FOCUS_NODES } from '../../libs/constants/FocusNodes';
import { COLORS } from '../../libs/constants/ux/colors';
import { TransferItem } from 'antd/lib/transfer';
import { CARS } from '../../libs/constants/Cars';
import PlayerFactory from '../../libs/factories/PlayerFactory';
import GameSession from '../../libs/session/GameSession';
import { PlayerIcon, PlayerObjectIcon, FocusIcon } from '../AppIcons';

const { Option } = Select;

interface ModalProp {
    show: boolean
}

const CreatePlayerModal: React.FC<ModalProp> = ({show}) => {
    
    const [selectedFocus, setSelectedFocus] = React.useState([] as any)
    const [selectedColor, setSelectedColor] = React.useState()
    const [selectedName, setSelectedName] = React.useState()
    const [selectedCar, setSelectedCar] = React.useState()
    const [visible, setVisible] = React.useState(show)

    React.useEffect(()=>{setVisible(show); console.log(show)},[show])
    
    const transferData:Array<TransferItem> = [];
    FOCUS_NODES.map((node) => {        
        return transferData.push({
            key: node.id,
            title: node.name,
            description: node.description,
            chosen: false
        })
    })

    const handleFocusUpdate = (targetKeys: any) => {
        setSelectedFocus(targetKeys);
    };

    const handleNameChange = (data:any) => {
        setSelectedName(data.target.value);
    };

    const handleColorChange = (index:any) => {
        setSelectedColor(COLORS[index]);
    };

    const handleCarChange = (data:any) => {
        setSelectedCar(data);
    };
    
    const handleOk = () => {
        var player = PlayerFactory.make(
            selectedName,
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            'Some description',
            selectedColor.value,
            CARS[selectedCar],
            selectedFocus.map((v:any) => {
                return FOCUS_NODES[v]
            })
        )
        GameSession.setPlayer(player);
        window.location.assign('/garage')
    };

    const handleCancel = () => {
        setVisible(false)
    };

    const checkBoxOpts =  FOCUS_NODES.map((n,i)=> {
       var disabled = (selectedFocus.length >= 3 && !selectedFocus.includes(i))
       return { label: n.name, value: i, disabled: disabled }
    })
   
    return (
        <Modal
            title="Create Driver"
            centered
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            closable={false}
        >   
            <Row gutter={[20, 20]} align="middle">
                <Col span={2}>
                    <PlayerIcon />
                </Col>
                <Col span={22}>
                <Input.Group size="large">
                    <Row gutter={0}>
                        <Col span={21}>
                            <Input 
                                onChange={handleNameChange}
                                size="large" 
                                placeholder="Driver Name" 
                                />
                        </Col>
                        <Col span={3}>
                            <Select 
                                onChange={handleColorChange}
                                showArrow={false}
                                size="large" 
                                placeholder="color" 
                                style={{ width: '100%' }}>
                                {COLORS.map((color, index)=>{
                                    return <Option value={index} select> <Avatar size="small" style={{ backgroundColor:  color.value}} /></Option>
                                })}
                            </Select>
                        </Col>
                    </Row>
                </Input.Group>
               
                </Col>   
                <Col span={2}>
                    <PlayerObjectIcon />
                </Col>
                <Col span={22}>
                    <Select 
                    onChange={handleCarChange}
                    size="large" 
                    placeholder="Choose Car" 
                    style={{ width: '100%' }}>
                    {CARS.map((car, index)=>{
                        return <Option value={index}>{car.make} - {car.model}</Option>
                    })}
                    </Select>
                </Col>

                <Col span={2}>
                    <FocusIcon />
                </Col>
                <Col span={22}>
                    <Checkbox.Group options={checkBoxOpts} defaultValue={['0']} onChange={handleFocusUpdate} />
                </Col>
                
            </Row>
        </Modal>
    );
  
}

export default CreatePlayerModal;