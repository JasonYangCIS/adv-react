import { useState, useEffect } from 'react';

export default function useForm(initial = {}) {
  // create a state obj for our input
  const [inputs, setInputs] = useState(initial);

  // take all values of object, convert to array and then convert to string so we can watch for changes
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      // array destructuring
      [value] = e.target.files;
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
