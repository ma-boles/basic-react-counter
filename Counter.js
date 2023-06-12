import React from "react"

export default function Counter () {

    const [count,setCount] = React.useState(0)
    
    function add() {
        setCount(count + 1) 
    }

    function minus () {
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <h1 className="title">Basic Counter</h1>
            <div className="counterDisplay">
                <h2>{count}</h2>
            </div>
            <button onClick={minus}>-</button>
            <button onClick={add}>+</button>
        </div>

    )
}
