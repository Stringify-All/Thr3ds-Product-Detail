import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const QuantityButton = ({quantities, quantitySelector, size}) => {
  
  console.log('size: ', size);
  const skus = quantities.skus;
  if (skus !== undefined) {
    let qArray = Object.entries(skus);
    let qSelectorArr = [];
    let inStock = null;
    for (let i = 0; i < qArray.length; i++) {
      if (qArray[i].includes(size)) {
        inStock = qArray[i][1];
        console.log('in stock: ', inStock);
        for (let j = 1; j < inStock + 1; j++) {
          qSelectorArr.push(j);
        }
      }
    }
    
    return (
      <PopupState variant="popover" popupId="size-popup-menu">
        {(popupState) => (
          <>
            <button {...bindTrigger(popupState)}>
              1 v
            </button>
            <Menu {...bindMenu(popupState)}>
              {(qSelectorArr.map(quantity => (
              <MenuItem onClick={() => quantitySelector(quantity)}>{quantity}
              </MenuItem>
          )))}
            </Menu>
          </>
        )}
      </PopupState>
    )
  } else {
    return (<div>Loading...</div>);
  };
};

export default QuantityButton;
