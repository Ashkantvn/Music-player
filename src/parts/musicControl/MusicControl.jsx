import React from 'react'

const MusicControl = ({songinformation})=>{
    return(
        <>
            <audio controls>
                <source src={songinformation}/>
                Your browser does not support audio tag
            </audio>
        </>
    )
}

export default MusicControl;