import React, { useCallback, useState } from "react";
import MusicControl from "../parts/musicControl/MusicControl";
import FileInput from "../parts/fileInput/FileInput";

const Songs = () => {
  const [uploadedfile, setuploadedfile] = useState("");
  const [arrayFiles,setarrayFiles] = useState([]);


  // Create and map the playlist 
  const playList = useCallback(() => {
    const songsInformations = [];
    for (let i = 0; i < arrayFiles.length; i++) {
      songsInformations.push(URL.createObjectURL(arrayFiles[i]));
    }
    return songsInformations;
  }, [arrayFiles]);

  const mappedPlaylist = playList().map((songinformation) => {
    return <MusicControl key={songinformation} songinformation={songinformation} />;
  });

  
  return (
    <>
      <header>
        <h1>Songs</h1>

        <div>
          <FileInput fileStorage={{uploadedfile,setuploadedfile,setarrayFiles}}/>
        </div>
      </header>

      <div>{mappedPlaylist}</div>
    </>
  );
};
export default Songs;
