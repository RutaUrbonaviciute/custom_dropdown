import React from 'react';
import Loader from "react-loader-spinner";

export const LoaderDropdown: React.FC = () => (
  <ul className='custom-dropdown'>
    <li className="custom-dropdown__element">
      <Loader type="ThreeDots" color="#667580" height={40} width={40} />
    </li>
  </ul>
)



