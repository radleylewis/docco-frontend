import React from 'react';

import './ContractList.css';
// import {css,jsx} from '@emotion/core';


export const ContractList = (props) => {
  const {contractList} = props;

  // renders each contract with font awesome symbol;
  const view = contractList.map(contract => {
    return (
      <div key={contract.id} className="my-contract">
        <i className="far fa-file icon-sizing" />
        <div className="contract-title">{contract.title}</div>
      </div>
    );
  });

  return <div className="contract-list">{view}</div>;
};

// this can be moved to the parent Container ones the structure is passed and the contracts passed as props.contractList; the pages entry can be accordingly changed to name of parent container;

export default ContractList;