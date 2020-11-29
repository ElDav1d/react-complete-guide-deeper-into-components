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
    color: 'white'
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
        onClick={pseudoStoreContext.save}
        >
          SAVE ITEM
      </button>
      <button
        style={{...styleButton, ...styleButtonRed}}
        onClick={pseudoStoreContext.clear}
        >
          CLEAR LIST
        </button>
    </div>
  )
}

export default charControls;