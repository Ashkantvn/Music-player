import React, { useState } from 'react'

const MusicControl = ({songinformation})=>{
    const [isClicked, setisClicked] = useState(false)
    const {title,type,url} = songinformation;
    const [isplay , setisplay] = useState(false);

    const playHandler = ()=>{
        setisplay(isplay=>isplay=true);
    }
    const pauseHandler = ()=>{
        setisplay(isplay=>isplay=false);
    }
    return(
        <div className='text-center flex flex-col gap-5 shadow-lg p-9 '>
            <button onClick={()=>{setisClicked(!isClicked)}}>{title}</button>
            
            <audio controls={isClicked} onPlay={playHandler} onPause={pauseHandler}>
                <source src={url} type={type}/>
                Your browser does not support audio tag
            </audio>
            {isplay && <h1 className='text-orange-300'>Is playing...</h1>}
        </div>
    )
}

export default MusicControl;