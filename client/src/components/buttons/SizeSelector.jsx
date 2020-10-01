import React, { useEffect, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const SelectSizeButton = ({ sizes, sizeSelector }) => {
  
  if (sizes.skus !== undefined) {
    const skuArray = Object.keys(sizes.skus);

    return ( 
      <PopupState variant="popover" popupId="size-popup-menu">
        {(popupState) => (
          <>
            <button {...bindTrigger(popupState)}>
              Select Size v
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
