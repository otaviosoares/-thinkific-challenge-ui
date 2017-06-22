import React from 'react';
import './current.css'

export default props => (
  <div className="col-xs-12 col-sm-6 col-md-4">
    <div className="bg-primary text-center current">
      Current integer is:<br /><strong>{props.current}</strong>
    </div>
  </div>
)