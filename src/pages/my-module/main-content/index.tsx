import React from 'react'
import t from 'format-message'
import { Item } from './item'
import { getUniqueID } from '../utils'
import { Button } from '../../../shared/button'
import { Aside } from './aside'
import styles from './index.css'

type Props = {
  items: MyItem[]
  methodA: (text: string) => void
  methodB: (item: MyItem) => void
}

export const MainContent = ({ items, methodA }: Props) => {
  const handleClick = () => methodA(`item-${getUniqueID()}`)

  return (
    <main className={styles.mainContent}>
      <article className={styles.article}>
        <h1>{t('Article')}</h1>
        <p>{t('I am text in article, also there can be an image:')}</p>
      </article>

      <article className={styles.article}>
        <h2>Lorem ipsum</h2>

        <section>
          <ul>
            {items.map(item => (
              <Item key={item.id} id={item.id} text={item.text} />
            ))}
          </ul>
        </section>

        <section>
          <Button onClick={handleClick} data-qa="main-content-add-item-btn">
            {t('Add an item')}
          </Button>
        </section>
      </article>

      <Aside />
    </main>
  )
}
