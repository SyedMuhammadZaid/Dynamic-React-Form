import React, { useState } from 'react'
import DynamicForm from '../DynamicForm'
import DatePickerComponent from '../CustomComponent/datePicker'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import * as yup from 'yup';

const ExampleForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const submissionHandler = (data) => {
        console.log(data)
    }

    const data = {
        style: {
            commonFieldStyles: { display: 'flex', flexDirection: 'column', gap: '5px', width: '300px' },
            commonFieldErrorStyles: { margin: '0px', padding: '0px' },
            footerStyles: { width: '100%' }
        },
        title: {
            content: 'Testing Form',
            style: { width: "100%", textAlign: "center" }
        },
        fields: [
            {
                type: 'text',
                name: 'firstName',
                label: 'FirstName',
                placeHolder: 'Enter your firstName',
                inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            },
            {
                type: 'text',
                name: 'lastName',
                label: 'LastName',
                placeHolder: 'Enter your lastName',
                inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            },
            {
                type: 'email',
                name: 'email',
                label: 'Email',
                placeHolder: 'Enter your email',
                inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            },
            {
                type: 'password',
                name: 'password',
                label: 'Password',
                placeHolder: 'Enter your password',
                inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px'},
                icon: showPassword ? <FaEyeSlash style={{ position: 'absolute', bottom: '10px', right: '7px' }} /> : <FaEye style={{ position: 'absolute', bottom: '10px', right: '7px' }} />,
                passwordType: showPassword && 'text',
                iconStyle: { position: 'relative' },
                iconProps: {
                    onClick: () => { setShowPassword(!showPassword) }
                }
            },
            {
                type: 'number',
                name: 'phone',
                label: 'Phone Number',
                placeHolder: 'Enter your number',
                inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            },
            {
                type: 'select',
                name: 'interest',
                label: 'Interest',
                placeHolder: 'Select Your Interest',
                options: [{ value: 'javascript', name: 'JavaScript' }, { value: 'python', name: 'Python' },],
                inputStyle: { height: "25px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            },
            {
                type: 'custom',
                name: 'date',
                label: 'Date',
                customComponent: <DatePickerComponent />,
                style: { display: 'block', width: '100%' }
            },  
            {
                type: 'checkbox',
                name: 'rememberCheck',
                label: 'Remember Me',
                style: { flexDirection: 'row', alignItems: 'center' },
                inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            },
            {
                type: 'radio',
                name: 'preference',
                label: 'Your Preference:',
                style: { flexDirection: 'row', alignItems: 'center', gap: '10px', flexWrap: 'wrap' },
                options: [{ value: 'Frontend', name: 'Frontend' }, { value: 'Backend', name: 'Backend' }],
                radioContainerStyle: { display: 'flex', alignItems: 'center' }
            },
            {
                type: 'textarea',
                name: 'suggestion',
                label: 'Your Suggestions',
                style: { width: '100%' },
                inputStyle: { borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' },
                inputProps: {
                    cols: 10
                }
            }
        ],
        validationSchema: {
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().min(8).max(12).required(),
            preference: yup.string().required()
        }
    }


    return (
        <div style={{ maxWidth: '700px', width: '100%', margin: '3rem auto' }}>
            <DynamicForm
                data={data}
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '15px', padding: '5px 10px' }}
                submissionButtonText={'Submit Form'}
                submissionButtonStyle={{ width: "200px", height: '30px', borderRadius: '5px', outline: 'none', border: '1px solid green', background: 'green', color: 'white' }}
                submissionHandler={submissionHandler}
            />
        </div>
    )
}

export default ExampleForm