//

import React from "react";

const styles = {
  div: {
    // textAlign:center,
    marginTop:150
  },

  img: {
    width:140
  }
}

const profileImage = () => (
  <div style={styles.div}>
  <h1>Hi!</h1>
    <img className="rounded-circle img-fluid" alt = "yash" src={"https://i.imgur.com/QqweSRw.jpg"} />
  </div>
);

export default profileImage;
