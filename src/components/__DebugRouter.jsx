import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AuthRequiredLink } from './Auth/AuthRequiredLink.jsx';
import { parseLocationPathname, parseLocationSearch } from '../utils.js';


export function __DebugRouter(){
  const location = useLocation();
  const params = useParams();

  const locationPathEntries = parseLocationPathname(location.pathname);
  const locationSearchEntries = parseLocationSearch(location.search);

  return (
    <div className="pt-4">
      <ul className="list-unstyled mb-5">
        <li className="mb-2">
          <Link to="/">Go home</Link>
        </li>
        <li>
          <AuthRequiredLink to="/programs">Go to Programs</AuthRequiredLink>
        </li>
      </ul>

      <pre className="mb-4">
        Location: {JSON.stringify(location, null, 2)}
        <br/>
        <br/>
        Params: {JSON.stringify(params, null, 2)}
        <br/>
        <br/>
        Path: {JSON.stringify(locationPathEntries, null, 2)}
        <br/>
        <br/>
        Search: {JSON.stringify(locationSearchEntries, null, 2)}
      </pre>
    </div>
  );
}
