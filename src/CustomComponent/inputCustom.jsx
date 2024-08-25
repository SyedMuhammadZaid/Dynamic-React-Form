import React, { useState } from 'react'

const InputCustom = ({ onChange, value }) => {

    const [state, setState] = useState('')
    const inputHandler = (e) => {
        setState(e.target.value);
        onChange(e)
    }
    return (
        <input type='text'
            value={state || value}
            onChange={inputHandler}
            style={{ border: '1px solid red' }}
        />
    )
}

export default InputCustom