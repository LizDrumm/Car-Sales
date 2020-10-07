import React from 'react';


import {connect} from 'react-redux'
import {removeFeatures} from '../actions'


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
        onClick={()=>{props.removeFeatures(props.feature)}}
        >X</button>
      {props.feature.name}
    </li>
  );
};

export default  connect(null , {removeFeatures})(AddedFeature);


