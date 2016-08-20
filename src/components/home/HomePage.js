/**
 * Created by bobak on 2016-08-18.
 */
import React from 'react';
import {Link} from 'react-router';
class HomePage extends React.Component{
  render(){
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More </Link>
      </div>
    );
  }
}
export default HomePage;