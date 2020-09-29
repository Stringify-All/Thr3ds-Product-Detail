import React from 'react';
import styled from 'styled-components';



const AddItem = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <button>Select Size</button>
          </div>
          <div class="col-md-4">
            <button>1</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10">
            <button type="submit">Add To Bag +</button>
          </div>
          <div class="col-md-2">
            <button>*</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddItem;