import React, { useState } from 'react'

const DatePickerComponent = ({ value, onChange }) => {

    const [dateValue, setDateValue] = useState('')

    const dateHandler = (date) => {
        setDateValue(date)
        onChange(date)
    }

    return (
        <div className='' style={{ width: '100%' }}>
            <input
                style={{ height: "25px", width: '290px', borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }}
                type='date' onChange={dateHandler} value={value || dateValue} />
        </div>
    )
}

export default DatePickerComponent