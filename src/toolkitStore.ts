import {configureStore} from "@reduxjs/toolkit";
import ReduxToolkitSlice from "./slice/ReduxToolkitSlice";

/*Redux Toolkit Store Configuration*/
export const toolkitStore = configureStore({
    reducer: {
        reduxToolkit: ReduxToolkitSlice
    }
});

/*
configureStore를 한번 호출하면 기존에 수동으로 하던 모든 설정 작업이 자동으로 이루어집니다
슬라이스 리듀서가 자동으로 combineReducers()에 전달됩니다
redux-thunk 미들웨어가 자동으로 추가됩니다
개발 모드 미들웨어가 추가되어, 실수로 상태를 변경하는 것을 방지합니다
Redux DevTools 확장 프로그램이 자동으로 설정됩니다
미들웨어와 DevTools 인핸서가 결합되어 스토어에 추가됩니다
*/

export default toolkitStore;

export type ToolRootState = ReturnType<typeof toolkitStore.getState>
