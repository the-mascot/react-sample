import "../assets/redux-test.css"
import {useState} from "react";

export default function UseStateTest() {
    /*
    * useState를 사용하면 number를 전달 하기위해
    * 계속해서 props를 생성해야된다.
    * props 지옥...
    * Right3 에서 클릭이벤트 발생하면 number를 바꾸기 위해 Root까지 increase를 전달하고
    * 다시 Left로 내려 값을 바꾸는 노가다...
    * */
    const [number, setNumber] = useState(1);
    return (
        <div className="redux-test-wrap">
            <h1>useState Test</h1>
            <h2>Root : {number}</h2>
            <div className="grid">
                <Left1 number={number} />
                <Right1 onIncrease={() => {
                    setNumber(number + 1);
                }} />
            </div>
        </div>
    );
}

function Left1(props: any) {
    return (
        <div>
            <h2>Left1 : {props.number}</h2>
            <Left2 number={props.number} />
        </div>
    );
}

function Left2(props: any) {
    return (
        <div>
            <h2>Left2 : {props.number}</h2>
            <Left3 number={props.number} />
        </div>
    );
}

function Left3(props: any) {
    return (
        <div>
            <h2>Left3 : {props.number}</h2>
        </div>
    );
}

function Right1(props: any) {
    return (
        <div>
            <h2>Right1</h2>
            <Right2 onIncrease={() => {
                props.onIncrease();
            }} />
        </div>
    );
}

function Right2(props: any) {
    return (
        <div>
            <h2>Right2</h2>
            <Right3 onIncrease={() => {
                props.onIncrease();
            }} />
        </div>
    );
}

function Right3(props: any) {
    return (
        <div>
            <h2>Right3</h2>
            <input type="button" value="+" onClick={() => {
                props.onIncrease();
            }}  />
        </div>
    );
}
