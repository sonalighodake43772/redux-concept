import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter)
  const toggleCounterHandler = () => {};
  const incrementhandler=()=>
  {
    dispatch({type:"increment"});
  }
  const increasehandler=()=>
  {
    dispatch({type:"increase" ,amount:5});
  }
  const increaseby2=()=>
  {
    dispatch({type:"incrementby2" ,value:2});
  }
  const decreaseby2=()=>
  {
    dispatch({type:"decrementby2" ,value:2});
  }
  const decrementhandler=()=>
  {
    dispatch({type:"decrement"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={increasehandler}>increment by 5</button>
        <button onClick={increaseby2}>increment by 2</button>
        <button onClick={decreaseby2}>decrement by 2</button>
        <button onClick={decrementhandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
