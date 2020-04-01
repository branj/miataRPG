import React from 'react';

import { FOCUS_NODES } from '../../libs/constants/FocusNodes';
import FocusNode from './FocusNode';


class FocusNodes extends React.Component {
  state = {
    collapsed: false,
  };
  
  onCollapse = (collapsed:any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (FOCUS_NODES.map((node, i) => {
           return <FocusNode xp={10} key={i} node={node} />
    })); 
  }
}

export default FocusNodes