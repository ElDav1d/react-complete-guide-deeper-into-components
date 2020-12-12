import React, { useContext } from 'react';
import PseudoStoreContext from '../../../context/pseudo-store-context';
import String from './String/String';

const stringsList = () => {
  const pseudoStoreContext = (useContext(PseudoStoreContext));
  return (
    <ul>
      {
        pseudoStoreContext.savedStrings.map((string, index) => {
          return (
            <String
              string={string}
              key={index}
            />
          )
        })
      }
    </ul>
  );
};

export default stringsList;