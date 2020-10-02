import React from 'react';

const AddItemButton = ({addToCart}) => {

    return(
    <>
      <button type="submit" 
      onClick={() => addToCart()}>Add To Bag +</button>
    </>
  )
};

export default AddItemButton;
