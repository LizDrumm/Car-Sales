import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeatures, removeFeatures } from './actions/index';
import { connect } from 'react-redux';

const App = (props) => {


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//THIRD- DID THIS

//call it twice and pass the component into the second invocation
//function passed into connect does two things- when redux calls this function it will pass in the entire state object from store, return an object, every property on the returned will be added to the props of the connect component 
// export default connect((state)=>{
//   return{
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice,
//   }
// },{})(App);

const mapStateToProps= state =>{
    return {
      car: state.car,
      additionalFeatures: state.additionalFeatures,
      additionalPrice: state.additionalPrice,
    }
  }
  export default connect(mapStateToProps, { addFeatures, removeFeatures })(App);