import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknotes color={props.money.banknotes === 'Dollars' ? 'blue' : 'green'}>
                <div key={props.money.number}>
                    <div>{props.money.banknotes}</div>
                    <div>{props.money.value}</div>
                    <div>{props.money.number}</div>
                </div>
            </Banknotes>
        </>
    );
};

const Banknotes = styled.div`
  background-color: ${props => {
    if (props.color === 'blue') {
      return 'darkgreen'
    } else {
      return '#61dafb'
    }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`
//
// const DollarsStyle = styled.div`
//   background-color: darkgreen;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
// const RubbleStyle = styled.div`
// background-color: #61dafb;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
