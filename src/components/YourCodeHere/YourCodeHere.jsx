import React from 'react';
import { Link } from 'react-router-dom';
import { UserContainer } from '../User/UserContainer.jsx';
import './YourCodeHere.scss';

export function YourCodeHere(){

  return (
    <UserContainer>


      {/*YOUR CODE HERE*/}

      <div className="Test">
        <h1>Your Code Here</h1>
        See UI Elements <Link target="_blank" to="/ui">here</Link>
      </div>

      {/*YOUR CODE HERE*/}


    </UserContainer>
  );
}
