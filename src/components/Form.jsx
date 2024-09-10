import { useState } from 'react'

export const Form = () => {

    // const [test, setTest] = useState('')
    // function Hc(e) {
    //     setTest(e.target.value)
    //     console.log(e)
    // }

    const [name, setName] = useState({ firstName: '', lastName: '' })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name)
    }

    return (
        <div>
            <form>

                {/* <input onChange={(e) => setTest(e.target.value)} type="text" value={test} />
                <h3>{test}</h3>
                 */}

                <input onChange={(e) => setName({ ...name, firstName: e.target.value })} type="text" value={name.firstName} />

                <input onChange={(e) => setName({ ...name, lastName: e.target.value })} type="text" value={name.lastName} />

                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>

            </form>
        </div>
    )
}
