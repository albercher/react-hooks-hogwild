import React, { useState } from 'react'

function Tile( {pigObj} ){
    const [showButton, setShow] = useState(false)

    const PigInfo = () => {
        return (
            <>
                <h3>Specialty: {pigObj.specialty}</h3>
                <h3>Weight: {pigObj.weight}</h3>
                {pigObj.greased ? <h3>Greased</h3> : null}
                <h3>Highest Medal Achieved: {pigObj.["highest medal achieved"]}</h3>
            </>
        )
    }

function handleClick(){
    setShow(!showButton)
}

    return (
        <div onClick={handleClick}>
            <h1>{pigObj.name}</h1>
            <img src={pigObj.image} alt="pig"></img>
            {showButton ? <PigInfo /> : null}
            
        </div>
    )
}

export default Tile