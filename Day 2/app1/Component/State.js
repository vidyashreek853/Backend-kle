import React, {usesState} from 'react'

const state = () => {
    const [count, setCount] =  usesState(0);

    const Increment = () => {
        setCount(count + 1);
    };

  return (

    <div>
    <h1>{count}</h1>
    <button onClick={() => Increment ()}>Increment</button>  
    </div>
  )
}

export default state
