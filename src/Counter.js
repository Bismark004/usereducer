import React, { useReducer } from "react";
import reducer from './reducer';

function Counter(){
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
        </div>

    )
}
export default Counter;