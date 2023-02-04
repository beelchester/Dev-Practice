import { useRouter } from 'next/router'
import React from 'react'
import styles from "./Card.module.css" // this is how importing style is recommended in nextjs
const Card = ({name, phone, email, image, id}) => {
  const router = useRouter()
  return (
    <div className={styles.card} onClick={()=> router.push(`/cats/${id}`)} style={{cursor: "pointer"}}>
      <div className={styles["card-header"]}> 
      {/* had to wrap in [] here as we cant have styles.card-header */}
      <img src={image} alt="cat" className={styles["card-img"]}/>
    </div>
    <div>
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
    </div>
  )
}

export default Card