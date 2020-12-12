import React, { useContext } from 'react';
import Context from '../../../context/context';
import String from './String/String';

const stringsList = () => {
  const context = (useContext(Context));
  return (
    <ul>
      {
        context.savedStrings.map((string, index) => {
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