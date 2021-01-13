import { useRef } from 'react';

export default function FileUploader({ onFileSelect }) {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (file)
      console.log(file);
    else 'No file selected'
  };

  return (
    <div>
      <input type="file" onChange={handleFileInput} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
    </div>
  )
}