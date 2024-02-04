import "../assets/redux-test.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toolDecrease, toolIncrease, toolIncreaseByCount} from "../slice/ReduxToolkitSlice";

export default function ReduxTest() {

    const [number, setNumber] = useState(1);
    return (
        <div className="redux-test-wrap">
            <h1>Redux Toolkit Test</h1>
            <h2>Root : {number}</h2>
            <div className="grid">
                <Left1 number={number} />
                <Right1 onIncrease={() => { setNumber(number + 1); }} />
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
    console.log('Left2');
    return (
        <div>
            <h2>Left2 : {props.number}</h2>
            <Left3 number={props.number} />
        </div>
    );
}

function Left3(props: any) {
    console.log('Left3');   // redux를 이용하면 리랜더링 되는 컴포넌트만 호출됨.
    // useSelect로 state 가져 올 수 있다.
    const number = useSelector((state: any) => state.number);
    return (
        <div>
            <h2>Left3 : {number}</h2>
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
    const style = {
        margin: "10px 10px",
        width: "60px",
        height: "30px"
    }

    // dispatch 로 reducer 호출
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Right3</h2>
            <input type="button" value="+2" style={style} />
            <input type="button" value="+"  style={style} />
            <input type="button" value="-" style={style} />
        </div>
    );
}
