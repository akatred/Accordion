import React, { useState } from "react";


const FileUploader = () => {
    const [file, setFile] = useState(null)
    const [status, setStatus] = useState('idle')

    const handleChange = (e) => {
        const data = e.target.files[0]
        setFile(data)
        setStatus('uploading')
    }

    const handleUpload = async() => {
      if(!file) return;
      const formdata = new FormData()
      formdata.append('file',file)
      try{
        const response = await fetch("http://localhost:7777/uploadfile",{
          method:"POST",
          body:formdata
        })
        if(!response.ok){
          const result = await response.text()
          console.log(result)
          setStatus('uploaded')
        }
      }catch(err){
        console.log('error', err)
      }

    }

  return(
    <>
    <input
    type="file"
    className=" p-2"
    onChange={handleChange}
    />
  {file && (<>
  <h2>{(file.size/1024).toFixed(2)} KB</h2>
    <h3>{file.name}</h3>
    {status==='uploading' && <button onClick={handleUpload}>Upload</button>}
    {status==='uploaded' && <h1>Uploaded</h1>}
    </>)
   }
    </>
  );
};

export default FileUploader;
