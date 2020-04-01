import React from 'react';
import { Table, Typography } from 'antd';
import { Material } from '../../libs/models/material';
import MaterialsDescriptionComponent from './MaterialsDescriptionComponent';


const { Text } = Typography;


interface MaterialsTableProp {
    materials : Material []
}

const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
    }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys:any, selectedRows:any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record:any)=> ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };    

const MaterialsTable: React.FC<MaterialsTableProp> = ({materials}) => {
    var costToCreate = 0;
    materials.forEach(element => {
        costToCreate+= element.cost
    });
    return (
        <Table
        rowSelection={{
            type: 'checkbox',
             ...rowSelection,
            }}
            expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}><MaterialsDescriptionComponent material={record} /></p>,
                rowExpandable: record => true,
            }}
            columns={columns}
            dataSource={materials}
            summary={pageData => {
                return (
                    <>
                    <tr>
                      <th colSpan={2}>Total</th>
                      <td>&nbsp;</td>
                      <td>
                        <Text type="danger">{costToCreate}</Text>
                      </td>
                    </tr>
                  </>)
            }}
        />
    );  
}

export default MaterialsTable;