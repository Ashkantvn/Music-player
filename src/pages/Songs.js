import React, { useCallback, useState } from "react";

const Songs = () => {
  const [uploadedfile, setuploadedfile] = useState("");
  const [arrayFiles, setarrayFiles] = useState([]);




  
  const playList = useCallback(() => {
    const songsLists = [];
    for (let i = 0; i < arrayFiles.length; i++) {
      songsLists.push(URL.createObjectURL(arrayFiles[i]));
    }
    return songsLists;
  }, [arrayFiles]);




  const a = playList().map((song) => {
    return (
      <audio key={song} controls>
        <source src={song} />
        Your browser does not support audio tag
      </audio>
    );
  });



  return (
    <>
      <div>
        <h1>Songs</h1>
        <div>
          <input
            type="file"
            onChange={(e) => {
              setuploadedfile(
                (uploadedfile) => (uploadedfile = e.target.files[0])
              );
            }}
          />
          <button
            onClick={() => {
              arrayFiles.push(uploadedfile);
              setuploadedfile("");
            }}
          >
            Add
          </button>
        </div>
      </div>
      {/* <div>{mappedPlayList}</div> */}
      {a}
    </>
  );
};
export default Songs;
