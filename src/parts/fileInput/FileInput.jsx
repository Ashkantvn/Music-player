import React from "react";

const FileInput = ({ fileStorage }) => {
  const { uploadedfile, setuploadedfile,setarrayFiles } = fileStorage;

  // Event handlers
  const inputHandler = (e) => {
    setuploadedfile((uploadedfile) => (uploadedfile = e.target.files[0]));
  };

  const addButtonHandler = () => {
    setarrayFiles(oldArrayFiles=>[...oldArrayFiles,uploadedfile]);
    setuploadedfile("");
  };

  return (
    <>
      <input type="file" onChange={inputHandler} />
      <button onClick={addButtonHandler}>Add</button>
    </>
  );
};

export default FileInput;
