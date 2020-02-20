import React from 'react'
import styles from './item.css'

type Props = {
  id: string
  text: string
}

export const Item = ({ text }: Props) => <li className={styles.item}>{text}</li>
