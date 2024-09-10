import { useState } from 'react'

export const Cuse = () => {

    const [count, setCount] = useState(0)

    const [factor, setFactor] = useState(1)

    function Addnum() {
        setCount(count + factor)
    }

    function Desnum() {
        setCount(count - factor)
    }

    function Addfact() {
        setFactor(factor + 1)
    }

    function Decfact() {
        setFactor(factor - 1)
    }

    return (
        <div>
            <h3>the counter is : {count} </h3>
            <button onClick={Addnum}>increse</button><br /> <br />
            <button onClick={Desnum}>decrese</button>

            <h3>the factor is : {factor} </h3>
            <button onClick={Addfact}>increse</button><br /> <br />
            <button onClick={Decfact}>decrese</button>
        </div>
    )
}
