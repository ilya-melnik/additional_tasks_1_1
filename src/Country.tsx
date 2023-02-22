import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue: BanknotsType) => void
}

export const Country = (props: CountryPropsType) => {
    const setAll = (value: BanknotsType) => {
        props.setFilterValue(value)
    }

    const setDollars = (value: BanknotsType) => {
        props.setFilterValue(value)
    }

    const setRUBLS = (value: BanknotsType) => {
        props.setFilterValue(value)
    }

    return (
        <div>
            <button onClick={() => {
                setAll('All')
            }}>All
            </button>
            <button onClick={() => {
                setDollars('Dollars')
            }}>Dollars
            </button>
            <button onClick={() => {
                setRUBLS('RUBLS')
            }}>RUBLS
            </button>
            <City data={props.data}/>
        </div>
    );
};

