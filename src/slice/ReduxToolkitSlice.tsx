// state 값 타입정의
import {createSlice} from "@reduxjs/toolkit";

type reduxToolkitTestState = {
    number: number;
}

// 액션객체 타입정의
type reduxToolkitTestAction = {
    type: string,
    payload?: { // ? 는 있을수도 있고 없을수도 있는데, 있으면 count 는 number 타입 체크
        count: number
    }
}

// 초기 값
let initialState:reduxToolkitTestState = {
    number: 1
}

// Redux Toolkit 의 새로운 기능
// createSlice 에 reducers 를 정의하면 action.type 값을 알아서 겹치지 않게 만들어줌.
// return ...state 생략 가능, 새로운 state 만 정의 해주면 된다.
const reduxToolkitSlice = createSlice({
    name: "reduxToolkitSlice",
    initialState,
    reducers: {
        toolIncreaseByCount(state: reduxToolkitTestState, action: reduxToolkitTestAction){
            state.number = state.number + (action.payload?.count !== undefined ? action.payload?.count : 1);
        },
        toolIncrease(state, action) {
            state.number++;
        },
        toolDecrease(state, action) {
            state.number--;
        }
    }
});

export const { toolIncreaseByCount, toolIncrease, toolDecrease } = reduxToolkitSlice.actions;
// reducer 를 toolkitStoolkitStore 에 등록 하기 위해 export
export default reduxToolkitSlice.reducer
