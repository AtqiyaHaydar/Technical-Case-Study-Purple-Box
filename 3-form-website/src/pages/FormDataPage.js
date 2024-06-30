import React from 'react';
import { useSelector } from 'react-redux';

function FormDataPage() {
  const formData = useSelector((state) => state.form.formData);

  return (
    <div>
      <h1>Form Data</h1>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}

export default FormDataPage;