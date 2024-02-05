import "../assets/redux-test.css"
import {Provider, useDispatch, useSelector} from "react-redux";
import {decrease, increase, increaseByCount} from "../reducers/reduxTestReducer";
import {RootState} from "../reducers/rootReducer";
import store from "../store";


export default function ReduxTest() {

    return (
        <div className="redux-test-wrap">
            <h1>Redux Test</h1>
            <h2>Root : {}</h2>
            <div className="grid">
                <Left1 />
                <Right1 />
            </div>
        </div>
    );
}

function Left1() {
    return (
        <div>
            <h2>Left1 : {}</h2>
            <Left2 />
        </div>
    );
}

function Left2() {
    console.log('Left2');
    return (
        <div>
            <h2>Left2 : {}</h2>
            <Left3 />
        </div>
    );
}

function Left3() {
    console.log('Left3');   // redux를 이용하면 리랜더링 되는 컴포넌트만 호출됨.
    // useSelector state 가져 올 수 있다.
    const number = useSelector((state: RootState) => state.reduxTestReducer.number);
    return (
        <div>
            <h2>Left3 : {number}</h2>
        </div>
    );
}

function Right1() {
    return (
        <div>
            <h2>Right1</h2>
            <Right2 />
        </div>
    );
}

function Right2() {
    return (
        <div>
            <h2>Right2</h2>
            <Right3 />
        </div>
    );
}

function Right3() {
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
            <input type="button" value="+2" onClick={() => dispatch(increaseByCount(2))} style={style} />
            <input type="button" value="+" onClick={() => dispatch(increase())} style={style} />
            <input type="button" value="-" onClick={() => dispatch(decrease())} style={style} />
        </div>
    );
}
