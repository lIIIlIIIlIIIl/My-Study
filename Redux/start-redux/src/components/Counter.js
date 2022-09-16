import { useSelector, useDispatch } from 'react-redux'; // connect : 클래스 컴포넌트 근처에서 클래스 컴포넌트를 스토어에 연결
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); // Redux store에 대한 action을 보냄
  const counter = useSelector(state => state.counter); // store가 관리하는 데이터에 접근하는 방법
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 5});
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
