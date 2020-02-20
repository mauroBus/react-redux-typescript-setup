import React from 'react'
import t from 'format-message'
import styles from './index.css'

export const Footer = () => (
  <footer role="contentinfo" className={styles.footer}>
    {t('This is a footer.')}
  </footer>
)
