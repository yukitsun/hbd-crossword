import { Grid } from '@material-ui/core';
import React, {FC, useCallback, useEffect, useState} from 'react';
import Board from './Board';
import { InputForm } from './InputForm';
import { SquareValue } from './Square';

const Game :FC = () => {

    const V_PROBLEMS = [
        {
            'problem':'【１】天然石や牛の角からできたプレートで肌を擦り、圧をかけて血液やリンパの流れを良くする美容法',
            'answer':'カッサ',
            'xy':{x:0, y:0},
            'direction':'v'
        },
        {
            'problem':'【２】肉球',
            'answer':'ミートボール',
            'xy':{x:1, y:0},
            'direction':'v'
        },
        {
            'problem':'【３】トーマス・〇〇、マッサ〇〇カレー',
            'answer':'マン',
            'xy':{x:3, y:0},
            'direction':'v'
        },
        {
            'problem':'【２０】荷札、付箋',
            'answer':'タグ',
            'xy':{x:4, y:0},
            'direction':'v'
        },
        {
            'problem':'【６】口の端についてたりする',
            'answer':'メシツブ',
            'xy':{x:6, y:0},
            'direction':'v'
        },
        {
            'problem':'【７】尾',
            'answer':'シッポ',
            'xy':{x:7, y:0},
            'direction':'v'
        },
        {
            'problem':'【２１】キャッチ・アンド・〇〇〇〇',
            'answer':'リリース',
            'xy':{x:2, y:1},
            'direction':'v'
        },
        {
            'problem':'【９】竹宮ゆゆこ原作ラノベ、アニメ化もした、ラブコメ',
            'answer':'トラドラ',
            'xy':{x:5, y:2},
            'direction':'v'
        },
        {
            'problem':'【２２】「この人の手を離さない。僕の魂ごと離してしまう気がするから」',
            'answer':'イコ',
            'xy':{x:3, y:3},
            'direction':'v'
        },
        {
            'problem':'【１５】ウサギ警察官とキツネ詐欺師がでてくる映画',
            'answer':'ズートピア',
            'xy':{x:4, y:3},
            'direction':'v'
        },
        {
            'problem':'【１１】女声の高い音域を指します',
            'answer':'ソプラノ',
            'xy':{x:0, y:4},
            'direction':'v'
        },
        {
            'problem':'【１２】つんがほしい楽器',
            'answer':'フルート',
            'xy':{x:7, y:4},
            'direction':'v'
        },
        {
            'problem':'【１９】おなか　〇〇〇ダンスとかいう',
            'answer':'ベリー',
            'xy':{x:6, y:5},
            'direction':'v'
        },
        {
            'problem':'【１６】平和の象徴？',
            'answer':'ハト',
            'xy':{x:2, y:6},
            'direction':'v'
        },
    ]

    const H_PROBLEMS = [
        {
            'problem':'【１】八百万いるやつ',
            'answer':'カミ',
            'xy':{x:0, y:0},
            'direction':'h'
        },
        {
            'problem':'【２】山のホテルで食せます',
            'answer':'マタギメシ',
            'xy':{x:3, y:0},
            'direction':'h'
        },
        {
            'problem':'【４】車、バイク、自転車に共通します',
            'answer':'ツーリング',
            'xy':{x:0, y:1},
            'direction':'h'
        },
        {
            'problem':'【５】量より〇〇',
            'answer':'シツ',
            'xy':{x:6, y:1},
            'direction':'h'
        },
        {
            'problem':'【８】釈迦？とかブッダ？が得意なやつ',
            'answer':'サトリ',
            'xy':{x:0, y:2},
            'direction':'h'
        },
        {
            'problem':'【９】プレッツェルのパイプの中にチョコが詰められたやつ',
            'answer':'トッポ',
            'xy':{x:5, y:2},
            'direction':'h'
        },
        {
            'problem':'【１０】(┌^o^)┐',
            'answer':'ボーイズラブ',
            'xy':{x:1, y:3},
            'direction':'h'
        },
        {
            'problem':'【１１】スパゲッティと表現されたりする',
            'answer':'ソースコード',
            'xy':{x:0, y:4},
            'direction':'h'
        },
        {
            'problem':'【１２】グルテンを主な原料とした加工食品',
            'answer':'フ',
            'xy':{x:7, y:4},
            'direction':'h'
        },
        {
            'problem':'【１３】「押す」の対義語',
            'answer':'プル',
            'xy':{x:0, y:5},
            'direction':'h'
        },
        {
            'problem':'【１４】🐯＋🔔',
            'answer':'トラベル',
            'xy':{x:4, y:5},
            'direction':'h'
        },
        {
            'problem':'【１６】お祭りには必須',
            'answer':'ハッピ',
            'xy':{x:2, y:6},
            'direction':'h'
        },
        {
            'problem':"【１９】EDWIN、LEVI'Sときたら",
            'answer':'リー',
            'xy':{x:6, y:6},
            'direction':'h'
        },
        {
            'problem':'【１７】クリエイターが文章やマンガ、写真、音声を投稿することができ、ユーザーはそのコンテンツを楽しんで応援できるメディアプラットフォーム',
            'answer':'ノート',
            'xy':{x:0, y:7},
            'direction':'h'
        },
        {
            'problem':'【１８】式や値が想定したものになっているか確認するときや、テストコードを書いているときにつかう',
            'answer':'アサート',
            'xy':{x:4, y:7},
            'direction':'h'
        },
    ]

    const getInitSquares = () => {
        return [
            ['','',undefined,'','','','',''],
            ['','','','','',undefined,'',''],
            ['','','',undefined,undefined,'','',''],
            [undefined,'','','','','','',undefined],
            ['','','','','','',undefined,''],
            ['','',undefined,undefined,'','','',''],
            ['',undefined,'','','',undefined,'',''],
            ['','','',undefined,'','','',''],
        ]
    }

    const [current, setCurrent] = useState<SquareValue[][]>(getInitSquares())
    const [isFinish, setFinish] = useState<boolean>(false);

    const hiraToKana = (str:string) => {
        return str.replace(/[\u3041-\u3096]/g, function(match) {
            var chr = match.charCodeAt(0) + 0x60;
            return String.fromCharCode(chr);
        });
    }


    // inputの値をcontentにセットする
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, direction:string, x:number, y:number, length:number) => {
        if (isFinish) return;
        
        let val = [...event.target.value];
        let cur = [...current];

        if (direction === 'h') {
            let wk = current[y].slice(0);
            for (let i = 0; i < length; i++) {
                if (val[i] === undefined) {
                    wk[x] = null;
                } else {
                    wk[x] = hiraToKana(val[i]);
                    wk[x] = wk[x] === 'ッ' ? 'ツ' : wk[x];
                }
                x++;
            }
            cur[y] = wk;
            
        } else {
            for (let i = 0; i < length; i++) {
                let wk = current[y].slice(0);
                if (val[i] === undefined) {
                    wk[x] = null;
                } else {
                    wk[x] = hiraToKana(val[i]);
                    wk[x] = wk[x] === 'ッ' ? 'ツ' : wk[x];
                }
                cur[y] = wk;
                y++;
            }
        }
        setCurrent(cur);
    }

    useEffect(() => {
        let val = [
            ['カ','ミ',undefined,'マ','タ','ギ','メ','シ'],
            ['ツ','ー','リ','ン','グ',undefined,'シ','ツ'],
            ['サ','ト','リ',undefined,undefined,'ト','ツ','ポ'],
            [undefined,'ボ','ー','イ','ズ','ラ','ブ',undefined],
            ['ソ','ー','ス','コ','ー','ド',undefined,'フ'],
            ['プ','ル',undefined,undefined,'ト','ラ','ベ','ル'],
            ['ラ',undefined,'ハ','ツ','ピ',undefined,'リ','ー'],
            ['ノ','ー','ト',undefined,'ア','サ','ー','ト'],
        ]
        if (JSON.stringify(val) === JSON.stringify(current)) {
            setFinish(true);
        }
    }, [current])

    // const [state, setState] = useState({
    //     history: [
    //         {
    //           squares: Array(9).fill(null)
    //         }
    //     ],
    //     stepNumber: 0,
    //     xIsNext: true
    // });


    // useEffect(() => {
    //     setCurrent(state.history[state.stepNumber].squares);
    // }, [state])

    return (
    <div className="game">
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <div className="game-board">
                <Board
                    squares={current}
                    finish={isFinish}
                />
                </div>
            </Grid>
            <Grid item xs={6}>
                
                <img src={require('../hbd.png').default} style={{width:300}} />
            </Grid>
        </Grid>
        <div className="game-info">
            <>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <span>たてのもんだい</span>
                    {V_PROBLEMS.map((item) =>(
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <span>{item.problem}</span>
                            </Grid>
                            <Grid item xs={4}>
                                <InputForm onChange={(e) => handleInputChange(e, item.direction, item.xy.x, item.xy.y, item.answer.length)} length={item.answer.length} />
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={6}>
                    <span>よこのもんだい</span>
                    {H_PROBLEMS.map((item) =>(
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <span>{item.problem}</span>
                            </Grid>
                            <Grid item xs={4}>
                                <InputForm onChange={(e) => handleInputChange(e, item.direction, item.xy.x, item.xy.y, item.answer.length)} length={item.answer.length} />
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>





            </>
        </div>
    </div>
    );
}

export default Game;