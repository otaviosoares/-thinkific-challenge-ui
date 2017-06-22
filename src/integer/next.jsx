import React from 'react';
import IconButton from '../template/iconButton'

export default props => (
  <div className="next">
    <h4>Get next integer</h4>
    <IconButton
      style='primary'
      icon='arrow-right'
      onClick={props.onClick} />
  </div>
)