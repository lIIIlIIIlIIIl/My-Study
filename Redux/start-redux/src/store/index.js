import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialCounterState = {counter:0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        },
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
}); 
// configureStore은 createStore처럼 store를 만든다. 다른점은 여러 개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다.

// createSlice는 서로 다른 리듀서에 해당하는 고유 액션 식별자를 자동으로 생성한다. 
// counterSlice.actions를 사용하면 액션 식별자 값을 얻을 수 있다.
// counterSlice.actions에는 작성된 함수의 리듀서 영역에 있는 key의 이름이 들어있어 해당 메서드에 접근 할 수 있다.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;


