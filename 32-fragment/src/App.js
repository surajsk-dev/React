import logo from './logo.svg';
import './App.css';
import Col from './Col';

// first way
// import React from 'react';

// second way
// import {Fragment} from 'react'


function App() {
  return (

    // first way - import React from 'react'
    // <React.Fragment>
    //   <h1>Tommy</h1>
    //   <h1>Grace</h1>
    // </React.Fragment>

    // second way-import {Fragment} from 'react'
    // <Fragment>
    //   <h1>Tommy</h1>
    //   <h1>Grace</h1>
    // </Fragment>

    // third way empty <></>
    // <>
    //   <h1>Tommy</h1>
    //   <h1>Grace</h1>
    // </>


    // create table get data from col component

    <div id = 'App'>
      <table>
        <tbody>
          <tr>
            <Col />
          </tr>
        </tbody>
      </table>

    </div>




    
  );
}

export default App;
