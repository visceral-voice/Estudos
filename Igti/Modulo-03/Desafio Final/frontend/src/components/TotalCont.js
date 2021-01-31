import React from 'react'

export default function TotalCont({ textContent, countContent, contColor }) {
  let styleColor = "";
  if (contColor === "Blue") {
    styleColor = styles.textBlue;
  }
  if (contColor === "Green") {
    styleColor = styles.textGreen;
  }
  if (contColor === "Red") {
    styleColor = styles.textRed;
  }
  return (
    <div>
        <span style={styles.textHead}> {textContent}: </span>
        <span style={styleColor}> {countContent} </span>
    </div>
  )
}

const styles = {
  textHead: {
    fontWeight: "bold",
    fontSize: "1.3rem"
  },
  textBlue: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "Blue"
  },
  textGreen: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "Green"
  },
  textRed: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "Red"
  }
};