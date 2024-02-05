## *React 기본 학습 프로젝트*

### `npm start`

### `npm run build`

### 배운 것들
1. Layout 설정 - `Layout.tsx`
2. React-Router 사용법
   1. router Link 에서 state 전달 - `RouterPropTest.tsx -> RouterPropTestResult.tsx` 
   2. router Link 의 path variable 넘기는 법 - `StudentList.tsx -> StudentDetail.tsx`
3. React useState, props 로 컴포넌트 간 데이터 전달 - `UseStateTest.tsx`
4. React-Redux store 로 상태 관리 + Typescript - `ReduxTest.tsx, /reducers/*, store.ts`
5. React-Redux-toolkit 로 상태 관리 - `ReduxToolkitTest.tsx, /slice/*, toolitStore.ts`

### 유의사항
redux store 와 toolkit 을 사용한 store 2개가 있어 index.tsx 에 Provider 에서 둘 중 하나만 사용.

### 참고자료 & Thanks to
유튜브 - 생활코딩, 유튜브 조교형님, 코딩알려주는누나

블로그 - [기억보다 기록을](https://kyounghwan01.github.io/blog/TS/fundamentals/assertion-guard-interface/#%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8-%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A5%E1%86%AB-type-assertion)
