import React, { useState } from 'react'

const MusicControl = ({songinformation})=>{
    const [isClicked, setisClicked] = useState(false)
    const {title,type,url} = songinformation;
    return(
        <div className='text-center flex flex-col gap-5 shadow-lg p-9 '>
            <button onClick={()=>{setisClicked(!isClicked)}}>{title}</button>
            
            <audio controls={isClicked}>
                <source src={url} type={type}/>
                Your browser does not support audio tag
            </audio>
        </div>
    )
}

export default MusicControl;