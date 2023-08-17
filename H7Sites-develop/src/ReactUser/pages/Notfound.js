import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
 return(
    <div className="container">
            <div className="py-4">
    <h1>Oops! 404 - Not Found!</h1>
    <Link to="/" class="btn btn-primary">Go Home</Link>
  </div>
  </div>
 );
 };

export default Notfound;