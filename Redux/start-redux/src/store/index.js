import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = {counter:0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState : initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter +1,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'increase'){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }


//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter-1,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }

//     return state;
// }

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
}); // configureStore은 createStore처럼 store를 만든다. 다른점은 여러 개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다.

export default store;


