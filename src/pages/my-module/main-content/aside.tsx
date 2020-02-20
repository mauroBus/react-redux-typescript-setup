import React from 'react'
import t from 'format-message'
import styles from './aside.css'

export const Aside = () => (
  <aside className={styles.aside}>
    <p>{t('Aside')}</p>
    <nav data-qa="aside-nav">
      <ul className={styles.list}>
        {[...new Array(4)].map((_, index) => (
          <li key={index} data-qa="aside-nav-link">
            <a className={styles.link} href="/">
              {t('Link {nbr, number}', { nbr: index + 1 })}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)
