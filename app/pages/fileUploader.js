import { useRef } from 'react';

export default function FileUploader({ onFileSelectSuccess }) {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      console.log(file.name);
    } else 'No file selected'
  };

  return (
    <div>
      <input type="file" onChange={handleFileInput} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
    </div>
  )
}