import React from 'react'
import styles from "./Card.module.css" // this is how importing style is recommended in nextjs
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}></div> 
      {/* had to wrap in [] here as we cant have styles.card-header */}
      
    </div>
  )
}

export default Card