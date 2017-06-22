import React from 'react';
import './current.css'

export default props => (
  <div className="bg-info text-center current">
    Current integer is:<br /><strong>{props.current}</strong>
  </div>
)