import React, { FC } from 'react';

export type SquareValue = string | null | undefined;

type Props = {
  value: SquareValue,
  number: number | null,
  sp:boolean,
};

const  Square: FC<Props> = (props:Props) => 
    <div className={props.value === undefined ? 'square black' : 'square'}>
        <div className='num'> {props.number}</div>
        <div className={props.sp ? ' pink':''}> {props.value}</div>
    </div>

export default Square;