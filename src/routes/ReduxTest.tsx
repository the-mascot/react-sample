import "../assets/redux-test.css"
import {useState} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {createStore} from "redux";

// 액션타입 선언
// 뒤에 as const(const 형태의 타입 단언) 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'INCREASE' 와 같이 실제 문자열 값으로 추론되도록 함('INCREASE' 값이 아니면 안됨).
const INCREASE_BY_COUNT = 'INCREASE_BY_COUNT' as const;
const INCREASE = 'INCREASE' as const;
const DECREASE = 'DECREASE' as const;

// action 생성 함수 선언
// count 에 따라 덧셈 해주는 함수
export const increaseByCount = (count: number) => ({
    // action 구성요소
    type: INCREASE_BY_COUNT,    // type: 액션의 종류를 나타내는 문자열
    payload: { count : count }  // payload: 액션과 함께 전달할 데이터
});

// +1 해주는 함수
export const increase = () => ({
    type: INCREASE
});

// -1 해주는 함수
export const decrease = () => ({
    type: DECREASE
})

// state 값 타입정의
type reduxTestState = {
    number: number;
}

// 모든 액션 객체들에 대한 타입을 정의
// ReturnType<typeof ____> 는 특정 함수의 반환 값을 추론한다.
// 상단부에서 액션 타입을 선언 할 때 as const 를 하지 않으면, 이 부분이 제대로 동작 x.
// | 는 유니온 타입 or 느낌으로 3 타입 중에 하나의 타입은 만족해야 한다.
type reduxTestAction = | ReturnType<typeof increaseByCount> | ReturnType<typeof increase> | ReturnType<typeof decrease>;

// 초기 값
const initialState:reduxTestState = {
    number: 1
}

function reducer(currentState:reduxTestState = initialState, action:reduxTestAction): reduxTestState {
    console.log(action);
    // action 이 유니온타입임으로 action.type 은 세개의 action 에 공통으로 들어가기 때문에 현재 접근 가능.
    const type = action.type;
    // const payload = action.payload; 는 increaseByCount 에 만 있기 때문에 타입이 확실히 정해지지 않은 지금은 접근 불가(타입가드).

    // 기존 state는 불변성으로 놔두고 새로운 state 정의
    const newState = { ...currentState }

    // 타입에 따라 실행할 메서드를 분기.
    if (type === 'INCREASE_BY_COUNT') {
        // increaseByCount 타입으로 확실히 된 지금 payload 접근 가능.
        const count = action.payload.count;
        newState.number = newState.number + (count !== null ? count : 1);
    }
    else if (type === 'INCREASE') {
        newState.number++;
    } else if (type === 'DECREASE') {
        newState.number--;
    }

    return newState;
}

const store = createStore(reducer);

export default function ReduxTest() {

    const [number, setNumber] = useState(1);
    return (
        <div className="redux-test-wrap">
            <h1>Redux Test</h1>
            <h2>Root : {number}</h2>
            <div className="grid">
                <Provider store={store}>
                    <Left1 number={number} />
                    <Right1 onIncrease={() => { setNumber(number + 1); }} />
                </Provider>
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
            <input type="button" value="+2" onClick={() => dispatch(increaseByCount(2))} style={style} />
            <input type="button" value="+" onClick={() => dispatch(increase())} style={style} />
            <input type="button" value="-" onClick={() => dispatch(decrease())} style={style} />
        </div>
    );
}
