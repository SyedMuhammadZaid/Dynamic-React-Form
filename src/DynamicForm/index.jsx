import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

const DynamicForm = ({
  data,
  type = 'create',
  submissionButtonText,
  submissionButtonClassName,
  submissionButtonStyle,
  submissionHandler,
  ...formProps
}) => {

  // storing custom components values in a state, to handle the populated data case to the custom component
  // in case of edit form.
  const [customComponentValue, setCustomComponentValue] = useState({})


  // initializing useForm and setting validations
  const schema = Yup.object().shape(data?.validationSchema) || {};
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  // form submit
  const formSubmit = async (data) => {
    console.log(data)
    let resp = await submissionHandler(data);
    if (resp) {
      reset()
      return
    }
  }

  // in case of edit data and we want to populate the data into our fields.
  const mappedEditData = (data) => {
    if (type == 'edit') {
      let fieldsEditData = {};
      for (let item of data) {
        let name = item?.name;
        fieldsEditData[name] = item?.value || '';
      }
      reset(fieldsEditData)
    }
  }

  useEffect(() => {
    if (type == 'edit') {
      mappedEditData(data?.fields)
    }
    return () => reset()
  }, [])


  const renderFields = (data) => {

    return data?.fields?.map((formField) => {
      let { type } = formField
      switch (type) {
        case 'text':
          return (
            <Controller
              name={formField?.name}
              key={formField?.name}
              defaultValue={''}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <div
                    className={`${formField?.className || ''} ${data?.style?.commonFieldClasses || ''}`}
                    style={{ ...data?.style?.commonFieldStyles, ...formField?.style }}>
                    {formField?.label && <label htmlFor={formField?.name} className={formField?.labelClassName} style={formField?.labelStyle}>{formField?.label}</label>}
                    <input id={formField?.name} type={'text'} readOnly={formField?.readOnly || false}
                      className={formField?.inputClassName} style={formField?.inputStyle} placeholder={formField?.placeHolder}
                      {...field} {...formField?.inputProps} />
                    {formField?.icon && <span className={formField?.iconClassName} style={formField?.iconStyle}
                      {...formField?.iconProps}>{formField?.icon}
                    </span>}
                    {fieldState?.error?.message &&
                      <p style={{ color: 'red', ...data?.style?.commonFieldErrorStyles }}
                        className={data?.style?.commonFieldErrorClasses || ''}>
                        {fieldState?.error.message}
                      </p>}
                  </div>
                )
              }}
            />
          )
        case 'number':
          return (
            <Controller
              name={formField?.name}
              key={formField?.name}
              defaultValue={''}
              control={control}
              render={({ field, fieldState }) => {
                return (

                  <div
                    className={`${formField?.className || ''} ${data?.style?.commonFieldClasses || ''}`}
                    style={{ ...data?.style?.commonFieldStyles, ...formField?.style }}>
                    {formField?.label && <label htmlFor={formField?.name} className={formField?.labelClassName} style={formField?.labelStyle}>{formField?.label}</label>}
                    <input id={formField?.name} type={'number'} readOnly={formField?.readOnly || false}
                      className={formField?.inputClassName} style={formField?.inputStyle} placeholder={formField?.placeHolder}
                      {...field} {...formField?.inputProps} />
                    {formField?.icon && <span className={formField?.iconClassName} style={formField?.iconStyle}
                      {...formField?.iconProps}>{formField?.icon}
                    </span>}
                    {fieldState?.error?.message &&
                      <p style={{ color: 'red', ...data?.style?.commonFieldErrorStyles }}
                        className={data?.style?.commonFieldErrorClasses || ''}>
                        {fieldState?.error.message}
                      </p>}
                  </div>


                )
              }}
            />
          )
        case 'email':
          return (
            <Controller
              name={formField?.name}
              key={formField?.name}
              defaultValue={''}
              control={control}
              render={({ field, fieldState }) => {
                return (

                  <div
                    className={`${formField?.className || ''} ${data?.style?.commonFieldClasses || ''}`}
                    style={{ ...data?.style?.commonFieldStyles, ...formField?.style }}>
                    {formField?.label && <label htmlFor={formField?.name} className={formField?.labelClassName} style={formField?.labelStyle}>{formField?.label}</label>}
                    <input id={formField?.name} type={'email'} readOnly={formField?.readOnly || false}
                      className={formField?.inputClassName} style={formField?.inputStyle} placeholder={formField?.placeHolder}
                      {...field} {...formField?.inputProps} />
                    {formField?.icon && <span className={formField?.iconClassName} style={formField?.iconStyle}
                      {...formField?.iconProps}>{formField?.icon}
                    </span>}
                    {fieldState?.error?.message &&
                      <p style={{ color: 'red', ...data?.style?.commonFieldErrorStyles }}
                        className={data?.style?.commonFieldErrorClasses || ''}>
                        {fieldState?.error.message}
                      </p>}
                  </div>
                )
              }}
            />
          )
        case 'password':
          return (
            <Controller
              name={formField?.name}
              key={formField?.name}
              defaultValue={''}
              control={control}
              render={({ field, fieldState }) => {
                return (

                  <div
                    className={`${formField?.className || ''} ${data?.style?.commonFieldClasses || ''}`}
                    style={{ ...data?.style?.commonFieldStyles, ...formField?.style }}>
                    {formField?.label && <label htmlFor={formField?.name} className={formField?.labelClassName} style={formField?.labelStyle}>{formField?.label}</label>}
                    <input id={formField?.name} type={formField?.passwordType || 'password'} readOnly={formField?.readOnly || false}
                      className={formField?.inputClassName} style={formField?.inputStyle} placeholder={formField?.placeHolder}
                      {...field} {...formField?.inputProps} />
                    {formField?.icon && <span className={formField?.iconClassName} style={formField?.iconStyle}
                      {...formField?.iconProps}>{formField?.icon}
                    </span>}
                    {fieldState?.error?.message &&
                      <p style={{ color: 'red', ...data?.style?.commonFieldErrorStyles }}
                        className={data?.style?.commonFieldErrorClasses || ''}>
                        {fieldState?.error.message}
                      </p>}
                  </div>
                )
              }}
            />
          )
        case 'select':
          return (
            <Controller
              name={formField?.name}
              key={formField?.name}
              defaultValue={''}
              control={control}
              render={({ field, fieldState }) => {
                return (

                  <div
                    className={`${formField?.className || ''} ${data?.style?.commonFieldClasses || ''}`}
                    style={{ ...data?.style?.commonFieldStyles, ...formField?.style }}>
                    {formField?.label && <label htmlFor={formField?.name} className={formField?.labelClassName} style={formField?.labelStyle}>{formField?.label}</label>}
                    <select id={formField?.name}
                      className={formField?.inputClassName} style={formField?.inputStyle} placeholder={formField?.placeHolder}
                      {...field} {...formField?.inputProps}>
                      {formField?.options && formField?.options?.map((opt) => (<option value={opt?.value}>{opt.name}</option>))}
                    </select>
                    {fieldState?.error?.message &&
                      <p style={{ color: 'red', ...data?.style?.commonFieldErrorStyles }}
                        className={data?.style?.commonFieldErrorClasses || ''}>
                        {fieldState?.error.message}
                      </p>}
                  </div>
                )
              }}
            />
          )
        case 'textarea':
          return (
            <Controller
              name={formField?.name}
              key={formField?.name}
              defaultValue={''}
              control={control}
              render={({ field, fieldState }) => {
                return (

                  <div
                    className={`${formField?.className || ''} ${data?.style?.commonFieldClasses || ''}`}
                    style={{ ...data?.style?.commonFieldStyles, ...formField?.style }}>
                    {formField?.label && <label htmlFor={formField?.name} className={formField?.labelClassName} style={formField?.labelStyle}>{formField?.label}</label>}
                    <textarea
                      id={formField?.name}
                      className={formField?.inputClassName} style={formField?.inputStyle} placeholder={formField?.placeHolder}
                      {...field} {...formField?.inputProps}
                    />
                    {fieldState?.error?.message &&
                      <p style={{ color: 'red', ...data?.style?.commonFieldErrorStyles }}
                        className={data?.style?.commonFieldErrorClasses || ''}>
                        {fieldState?.error.message}
                      </p>}
                  </div>
                )
              }}
            />
          )
        case 'radio':
          return (
            <Controller
              name={formField?.name}
              key={formField?.name}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <div
                    className={`${formField?.className || ''} ${data?.style?.commonFieldClasses || ''}`}
                    style={{ ...data?.style?.commonFieldStyles, ...formField?.style }}>
                    {formField?.label && <label htmlFor={formField?.name} className={formField?.labelClassName} style={formField?.labelStyle}>{formField?.label}</label>}
                    {
                      formField?.options?.map((option) => {
                        const inputId = `${formField?.name}-${option?.value}`;
                        return (
                          <div
                            style={formField?.radioContainerStyle} className={formField?.radioContainerClasses}
                          >
                            <input
                              id={inputId}
                              name={formField?.name} 
                              className={formField?.inputClassName} style={formField?.inputStyle}
                              type="radio"
                              value={option?.value}
                              checked={field.value === option?.value}
                              onChange={(e) => field.onChange(e.target.value)}
                            />
                            <label
                              htmlFor={inputId} className={formField?.labelClassName} style={formField?.labelStyle}
                            >{option?.name}
                            </label>
                          </div>
                        )
                      })
                    }
                    {fieldState?.error?.message &&
                      <p style={{ color: 'red', ...data?.style?.commonFieldErrorStyles }}
                        className={data?.style?.commonFieldErrorClasses || ''}>
                        {fieldState?.error.message}
                      </p>}
                  </div>

                )
              }}
            />
          )
        case 'checkbox':
          return (
            <Controller
              name={formField?.name}
              key={formField?.name}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <div
                    className={`${formField?.className || ''} ${data?.style?.commonFieldClasses || ''}`}
                    style={{ ...data?.style?.commonFieldStyles, ...formField?.style }}>
                    {formField?.label && <label htmlFor={formField?.name} className={formField?.labelClassName} style={formField?.labelStyle}>{formField?.label}</label>}
                    <input
                      id={formField?.name}
                      className={formField?.inputClassName} style={formField?.inputStyle} placeholder={formField?.placeHolder}
                      type='checkbox' {...field} />
                    {fieldState?.error?.message &&
                      <p style={{ color: 'red', ...data?.style?.commonFieldErrorStyles }}
                        className={data?.style?.commonFieldErrorClasses || ''}>
                        {fieldState?.error.message}
                      </p>}
                  </div>

                )
              }}
            />
          )
        case 'custom':
          return (
            <Controller
              name={formField?.name}
              key={formField?.name}
              control={control}
              render={({ field: { onChange, value }, fieldState }) => {
                return (
                  <div
                    className={`${formField?.className || ''} ${data?.style?.commonFieldClasses || ''}`}
                    style={{ ...data?.style?.commonFieldStyles, ...formField?.style }}>
                    {formField?.label && <label htmlFor={formField?.name} className={formField?.labelClassName} style={formField?.labelStyle}>{formField?.label}</label>}
                    {
                      formField?.customComponent && React.cloneElement(formField?.customComponent,
                        {
                          onChange: (e) => {
                            onChange(e)
                          },
                          value: value,
                        })
                    }
                    {fieldState?.error?.message &&
                      <p style={{ color: 'red', ...data?.style?.commonFieldErrorStyles }}
                        className={data?.style?.commonFieldErrorClasses || ''}>
                        {fieldState?.error.message}
                      </p>}
                  </div>
                )
              }}
            />)
        default:
          return <p style={{ color: 'red' }}>{`Not a valid type: ${type}`}</p>
      }
    })
  }

  return (

    <form onSubmit={handleSubmit} {...formProps}>
      {/* // if we have to place a title of a form */}
      {data?.title && <h3 className={data?.title?.className} style={data?.title?.style}>{data?.title?.content}</h3>}
      {renderFields(data)}
      <div className={data?.style?.footerClasses} style={data?.style?.footerStyles}>
        <button type='submit'
          className={submissionButtonClassName}
          style={submissionButtonStyle}
          onClick={handleSubmit((data) => formSubmit(data))}
        >
          {submissionButtonText ? submissionButtonText : 'submit'}
        </button>
      </div>
    </form>

  )
}

export default DynamicForm