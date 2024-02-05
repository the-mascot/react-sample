import {combineReducers} from "redux";
import reduxTestReducer from "./reduxTestReducer";

/* combineReducer 로 여러 reducer 등록 */
const rootReducer = combineReducers({
    reduxTestReducer
});

// rootReducer 를 store 에 등록을 위해 export
export default rootReducer;

// rootReducer 의 반환 값을 유추해준다.
// 추후 이 값을 컨테이너 컴포넌트에서 불러와서 사용해야 함으로 내보내 준다.
export type RootState = ReturnType<typeof rootReducer>;
