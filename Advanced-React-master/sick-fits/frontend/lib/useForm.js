import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state obj for our input
  const [inputs, setInputs] = useState(initial);
  // {
  //   name: 'jason',
  //   description: 'nice shoes',
  //   price: 1000
  // }

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      // file upload is wonky, this is how we support it
      value[0] = e.target.files;
    }

    setInputs({
      // copy existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    // transform obj to array, map over it and set values to null, then transform array back to obj
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return things we want to surface from custom hook
  return { inputs, handleChange, resetForm, clearForm };
}
