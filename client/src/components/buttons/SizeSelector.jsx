import React, { useEffect, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const SelectSizeButton = ({ sizes, sizeSelector }) => {
  
  if (sizes.skus !== undefined) {
    const skuArray = Object.keys(sizes.skus);
    console.log('Sku array: ', skuArray)
    return ( 
      <PopupState variant="popover" popupId="size-popup-menu">
        {(popupState) => (
          <>
            <button {...bindTrigger(popupState)}>
              Select Size
            </button>
            <Menu {...bindMenu(popupState)}>
              {(skuArray.map(sku => (
              <MenuItem onClick={() => sizeSelector(sku)}>{sku}</MenuItem>
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

export default SelectSizeButton;
