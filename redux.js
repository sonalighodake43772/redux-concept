const redux =require("redux");

const countReducer=(state={counter:0},action)=>
{
    return(action.type==="increment"?
        {counter:state.counter+1}:
        {counter:state.counter-1});
    

}
const store=redux.createStore(countReducer);
//  console.log(store.getState());

const countsubscriber=()=>
{
  const lateststate=  store.getState();
  console.log(lateststate);
}
store.subscribe(countsubscriber);

store.dispatch({type:"decrement"});
store.dispatch({type:"decrement"});
store.dispatch({type:"decrement"});
store.dispatch({type:"decrement"});  
// store.dispatch({type:"increment"});
// store.dispatch({type:"increment"});
