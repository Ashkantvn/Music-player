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
      songsInformations.push({
        title:arrayFiles[i]?.name,
        url:URL.createObjectURL(arrayFiles[i]),
        type:arrayFiles[i]?.type
      });
    }
    return songsInformations;
  }, [arrayFiles]);



  const mappedPlaylist = playList().map((songinformation) => {
    return <MusicControl key={songinformation.url} songinformation={songinformation} />;
  });

  
  return (
    <>
      <header className="flex flex-col my-24 items-center">
        <h1 className="font-bold">Songs</h1>

        <div className="my-9 flex flex-col items-center">
          <FileInput fileStorage={{uploadedfile,setuploadedfile,setarrayFiles}}/>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-9">{mappedPlaylist}</div>
    </>
  );
};
export default Songs;
