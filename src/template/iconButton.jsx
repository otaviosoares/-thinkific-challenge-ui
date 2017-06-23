import React from 'react';

export default props => {
  if (props.hide) {
    return null;
  }

  return (
    <button className={'btn btn-'+ props.styles}
      onClick={props.onClick} 
      disabled={props.disabled}>
      <i className={'fa fa-'+ props.icon}/>
    </button>
  )
}