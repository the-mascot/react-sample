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

// state 타입정의
type reduxTestState = {
    number: number;
}

// 모든 액션 객체들에 대한 타입을 정의
// ReturnType<typeof ____> 는 특정 함수의 반환 값을 추론한다.
// 상단부에서 액션 타입을 선언 할 때 as const 를 하지 않으면, 이 부분이 제대로 동작 x.
// | 는 유니온 타입 or 느낌으로 3 타입 중에 하나의 타입은 만족해야 한다.
type reduxTestAction = | ReturnType<typeof increaseByCount> | ReturnType<typeof increase> | ReturnType<typeof decrease>;

// state 초기 값
const initialState:reduxTestState = {
    number: 1
};

function reduxTestReducer(state:reduxTestState = initialState, action:reduxTestAction): reduxTestState {
    console.log(action);
    // action 이 유니온타입임으로 action.type 은 세개의 action 에 공통으로 들어가기 때문에 현재 접근 가능.
    const type = action.type;
    // const payload = action.payload; 는 increaseByCount 에 만 있기 때문에 타입이 확실히 정해지지 않은 지금은 접근 불가(타입가드).

    // 타입에 따라 실행할 메서드를 분기.
    switch (type) {
        case "INCREASE_BY_COUNT":
            // increaseByCount 타입으로 확실히 된 지금 payload 접근 가능.
            const count = action.payload.count;
            // 불변성을 위해 기존 ...state 와 함께 변경할 값을 return 해 준다.
            return { ...state, number: state.number + (count !== null ? count : 1) };
        case "INCREASE":
            return { ...state, number: state.number + 1 };
        case "DECREASE":
            return { ...state, number: state.number -1 };
        default:
            return state;
    }

}

export default reduxTestReducer;
