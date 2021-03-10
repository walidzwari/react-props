import React from 'react'

const Profile = ({name,bio,pro,children, handleName}) => {
    const styleObject = { color: "red", textAlign:"center" }
    
    return (
        <div style={styleObject} >  
            <h1>{name}</h1>
            <h2>{bio}</h2>
            <h3>{pro}</h3>
            <p>{children}</p>

            <a href="/" onClick={()=>handleName(name)} >
            Click me
        </a>

        </div>
    )

}
export default Profile
