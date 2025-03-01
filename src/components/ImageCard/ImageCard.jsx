import React from 'react'
import styles from './ImageCard.module.css'
import { FavoriteBorderOutlined, CommentOutlined, VisibilityOutlined } from '@mui/icons-material'

const ImageCard = ({
    image,
    title,
    views,
    likes,
    comments,
    onClick
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
        <img src={image} alt={title} />
        <div className={styles.stats}>
            <span><FavoriteBorderOutlined/>{likes}</span>
            <span><CommentOutlined/>{comments}</span>
            <span><VisibilityOutlined/>{views}</span>
        </div>
    </div>
  )
}

export default ImageCard