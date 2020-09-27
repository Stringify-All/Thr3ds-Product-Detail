import React from 'react';
import styled from 'styled-components';

const SloganHeader = styled.h1`
  padding-top: 10px;
  padding-left: 20px;
  font-size: 16px;
  font-style: bold;
`;

const SloganDesc = styled.p`
  padding-left: 20px;
  font-size: 14px;
  list-style: none;
`;

const SloganDescription = ({selected}) => {

  return (
    <div class="container">
      <div class="row">  
        <div class="col-sm-8">
          <SloganHeader>
            <p>{selected.slogan}</p>
          </SloganHeader>
          <SloganDesc>
            {selected.description}
          </SloganDesc>
        </div>
        <div class="col-sm-4">
          <SloganDesc>
            <li>✓ Placeholder for features</li>
            <li>✓ Placeholder for features</li>
          </SloganDesc>
        </div>
      </div>
    </div>
  )

};

export default SloganDescription;