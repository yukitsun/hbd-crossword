import React, { FC } from 'react';

export type SquareValue = string | null;

type Props = {
  onClick: () => void,
  value: SquareValue,
};

const  Problem: FC<Props> = (props:Props) => 
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>

export default Problem;