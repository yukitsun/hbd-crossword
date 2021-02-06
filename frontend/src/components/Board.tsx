import React, { FC } from 'react';
import Square, { SquareValue } from './Square';

type Props = {
squares : SquareValue[][],
finish : boolean,
}

const Board :FC<Props> = (props) => {
    const renderSquare = (row:number, i:number, num:number|null=null, sp:boolean = false) => 
        <Square
            value={props.squares[row][i]} number={num} sp={sp}
        />

    return (
    <div>
        {
            // [[0, 1, 2], [0, 1, 2], [0, 1, 2]].map((row, index) =>
            //     <div key={index} className="board-row">
            //         {row.map(i => renderSquare(index, i))}
            //     </div>
            // )
            
            <>
            <div className="board-row">
                {renderSquare(0,0,1)}
                {renderSquare(0,1,2)}
                {renderSquare(0,2)}
                {renderSquare(0,3,3)}
                {renderSquare(0,4,20,props.finish)}
                {renderSquare(0,5)}
                {renderSquare(0,6,6)}
                {renderSquare(0,7,7)}
            </div>
            <div className="board-row">
                {renderSquare(1,0,4,props.finish)}
                {renderSquare(1,1)}
                {renderSquare(1,2,21)}
                {renderSquare(1,3)}
                {renderSquare(1,4)}
                {renderSquare(1,5)}
                {renderSquare(1,6,5,props.finish)}
                {renderSquare(1,7)}
            </div>
            <div className="board-row">
                {renderSquare(2,0,8)}
                {renderSquare(2,1)}
                {renderSquare(2,2)}
                {renderSquare(2,3)}
                {renderSquare(2,4)}
                {renderSquare(2,5,9)}
                {renderSquare(2,6)}
                {renderSquare(2,7)}
            </div>
            <div className="board-row">
                {renderSquare(3,0)}
                {renderSquare(3,1,10)}
                {renderSquare(3,2)}
                {renderSquare(3,3,22)}
                {renderSquare(3,4,15)}
                {renderSquare(3,5)}
                {renderSquare(3,6)}
                {renderSquare(3,7)}
            </div>
            <div className="board-row">
                {renderSquare(4,0,11)}
                {renderSquare(4,1)}
                {renderSquare(4,2)}
                {renderSquare(4,3)}
                {renderSquare(4,4)}
                {renderSquare(4,5)}
                {renderSquare(4,6)}
                {renderSquare(4,7,12)}
            </div>
            <div className="board-row">
                {renderSquare(5,0,13,props.finish)}
                {renderSquare(5,1)}
                {renderSquare(5,2)}
                {renderSquare(5,3)}
                {renderSquare(5,4,14)}
                {renderSquare(5,5)}
                {renderSquare(5,6)}
                {renderSquare(5,7,null,props.finish)}
            </div>
            <div className="board-row">
                {renderSquare(6,0)}
                {renderSquare(6,1)}
                {renderSquare(6,2,16)}
                {renderSquare(6,3)}
                {renderSquare(6,4)}
                {renderSquare(6,5)}
                {renderSquare(6,6,19)}
                {renderSquare(6,7)}
            </div>
            <div className="board-row">
                {renderSquare(7,0,17,props.finish)}
                {renderSquare(7,1)}
                {renderSquare(7,2)}
                {renderSquare(7,3)}
                {renderSquare(7,4,18,props.finish)}
                {renderSquare(7,5)}
                {renderSquare(7,6)}
                {renderSquare(7,7)}
            </div>
            </>
        }
    </div>
    );
}

export default Board;