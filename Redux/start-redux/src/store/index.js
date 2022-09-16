import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
}); 
// configureStore은 createStore처럼 store를 만든다. 다른점은 여러 개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다.

// createSlice는 서로 다른 리듀서에 해당하는 고유 액션 식별자를 자동으로 생성한다. 
// counterSlice.actions를 사용하면 액션 식별자 값을 얻을 수 있다.
// counterSlice.actions에는 작성된 함수의 리듀서 영역에 있는 key의 이름이 들어있어 해당 메서드에 접근 할 수 있다.

export default store;


