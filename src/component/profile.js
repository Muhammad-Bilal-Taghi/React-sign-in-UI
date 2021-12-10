import React from "react";


function Profile (prop) {
    const Green=()=>{
        alert ("I am Muhammad Bilal and My Qualification is Bachelor in Commerce")
    }
      return (
          <div>
              <h2 onClick={Green}>{prop.text.name}</h2>
              <h2 onClick={Green}>{prop.data}</h2>
          </div>
      )
}
export default Profile;
