import React from 'react';
import IconButton from '../template/iconButton'

export default props => (
  <div className="next">
    <h4>Get next integer</h4>
    <IconButton
      styles='primary'
      icon='arrow-right'
      disabled={props.isLoading}
      onClick={props.onClick} />
  </div>
)