import React, {useContext} from 'react';
import PseudoStoreContext from '../../../context/pseudo-store-context'

const charControls = props => {
  const styleContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '15rem',
    margin: 'auto',
  }
  
  const styleButton = {
    padding: '.5rem',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    boxShadow: '0px 3px 7px rgba(0, 0, 0, 0.5)'
  }

  const styleButtonGreen = {
    backgroundColor: 'green'
  }

  const styleButtonRed  = {
    backgroundColor: 'red'
  }

  const pseudoStoreContext = (useContext(PseudoStoreContext));

  return (
    <div style={styleContainer}>
      <button
        style={{...styleButton, ...styleButtonGreen}}
        onClick={pseudoStoreContext.saveInput}
        >
          SAVE ITEM
      </button>
      <button
        style={{...styleButton, ...styleButtonRed}}
        onClick={pseudoStoreContext.clearInput}
        >
          CLEAR LIST
        </button>
    </div>
  )
}

export default charControls;