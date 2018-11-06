import React from 'react'
import { Image } from 'react-bootstrap'
import { ITEM_IMAGE, ICON_ZOOM } from '~/constants'
import styles from './index.scss'

const ProductImage = () => (
  <div className={styles.imageContainer}>
    <img
      alt="zoom"
      src={ICON_ZOOM}
      className={styles.zoomIcon}
    />
    <Image
      src={ITEM_IMAGE}
      alt="avatar"
      responsive
      className={styles.image}
    />
  </div>
)

export default ProductImage
