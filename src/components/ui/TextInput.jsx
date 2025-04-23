import React from 'react'

const TextInput = (props) => {
  return (
    <div className='flex flex-col w-4/5'>
    <label htmlFor="title">{props.label}</label>
    <input className='my-2.5 p-2.5 border-1 rounded p-2.5' type="text" {...props} />
  </div>
  );
};

export default TextInput;
