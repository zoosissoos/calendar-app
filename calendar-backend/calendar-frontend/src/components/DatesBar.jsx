import React from 'react';
import Radium from 'radium';


const DatesBar = () => {
  const dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return(
    <div style={styles.cal}>
      {dates.map(date => {
        return (
          <div>
            { date }
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  cal: {
    boxSizing: 'border-box',
    width: '80vw',
    height: '20px',
    color: 'black',
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'row wrap',
    position: 'relative',
    justifyContent: 'space-around'
  }
}



export default Radium(DatesBar);