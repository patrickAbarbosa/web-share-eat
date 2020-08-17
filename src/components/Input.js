/*
  How to use this component

<Input
  label='Your label' 
  placeholder='Your paceholder'
  onChangeText=
  type='text' // When it is currency to use money
/>
*/

import React from 'react'

// Input Mask
import InputMasked from 'react-masked-text'

const moneyInput = (props) => {
  return (
    <InputMasked
      style={{ width: '10em'}}
      kind='money'
      placeholder='R$ 0,00'
      onChangeText={props.onChange}
    />
  )
}

const renderInput = (props) => {
  switch (props.type) {
    case 'textarea':
      return (
        <textarea {...props} />
      )
    
    case 'money':
      return (
        <InputMasked
          style={{ width: '10em'}}
          kind='money'
          placeholder='R$ 0,00'
          onChangeText={props.onChangeText}
          value={props.value}
        />
      )
  
    default:
      return (
        <input 
          {...props} 
          onChange={value => props.onChangeText(value.target.value)} 
        />
      )
  }
}

const Input = (props) => {
  
  return (
    <>
      <label>{props.label}</label>
      {props.type === 'money' ? 
        moneyInput(props)
        : renderInput(props)
      }
    </>
  )
}

export default Input