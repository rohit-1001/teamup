import React from 'react';
import notfound from "../assets/notfound.png"

const NotFound = () => {
  return (
    <div style={{margin: "0 auto",
      width: "900px",
      height: "auto",
      paddingTop: "120px"
      }}>
    <img style={{
      maxWidth: "100%",
      height: "auto"
    }} src={notfound} alt="404 Not Found" />
    </div>
  )
}

export default NotFound
