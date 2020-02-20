import React from 'react'
import t from 'format-message'
import styles from './index.css'

export const Header = () => (
  <header className={styles.header}>{t('This is a header.')}</header>
)
