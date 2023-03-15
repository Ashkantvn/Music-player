import React from "react";
import {HiUpload} from "react-icons/hi"

const FileInput = ({ fileStorage }) => {
  const { uploadedfile, setuploadedfile,setarrayFiles } = fileStorage;

  // Event handlers
  const inputHandler = (e) => {
    setuploadedfile((uploadedfile) => (uploadedfile = e.target.files[0]));
  };

  const addButtonHandler = () => {
    if(uploadedfile){
      setarrayFiles(oldArrayFiles=>[...oldArrayFiles,uploadedfile]);
      setuploadedfile("");
    }
  };

  return (
    <>
      <label htmlFor="files" className="flex items-center"><HiUpload/><span className=" ml-1">Choose a file</span></label>
      <input id="files" className=" hidden" type="file" onChange={inputHandler} />
      <button className="my-6" onClick={addButtonHandler}>Add</button>
    </>
  );
};

export default FileInput;
