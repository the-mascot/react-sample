import "../assets/redux-test.css"
import {useDispatch, useSelector} from "react-redux";
import {toolDecrease, toolIncrease, toolIncreaseByCount} from "../slice/ReduxToolkitSlice";
import {ToolRootState} from "../toolkitStore";

export default function ReduxToolkitTest() {

    return (
        <div className="redux-test-wrap">
            <h1>Redux Toolkit Test</h1>
            <h2>Root : </h2>
            <div className="grid">
                <Left1 />
                <Right1 />
            </div>
        </div>
    );
}

function Left1(props: any) {
    return (
        <div>
            <h2>Left1 : {}</h2>
            <Left2 />
        </div>
    );
}

function Left2(props: any) {
    return (
        <div>
            <h2>Left2 : {}</h2>
            <Left3 />
        </div>
    );
}

function Left3(props: any) {
    // useSelect로 state 가져 올 수 있다.
    const number = useSelector((state: ToolRootState) => state.reduxToolkit.number);
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
            <input type="button" value="+2" onClick={() => dispatch(toolIncreaseByCount({ count: 5 }))} style={style} />
            <input type="button" value="+" onClick={() => dispatch(toolIncrease({}))} style={style} />
            <input type="button" value="-" onClick={() => dispatch(toolDecrease({}))} style={style} />
        </div>
    );
}
