import React from 'react'

export const GridItem = ( { id, title, url}) => {
        // console.log({ id, title, url});
    return (
        <div className="card animate__animated animate__bounce">  
        {/* <div className="card animate__animated animate__heartBeat">                    */}
            <img src= { url } alt = { title } />
            <p>{ title }</p>
        </div>
    )
}
