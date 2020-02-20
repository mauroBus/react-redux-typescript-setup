import classList from 'classnames'
import React, { ReactNode, PureComponent } from 'react'
import styles from './index.css'

export type Props = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<any>) => any
  onKeyDown?: (e: React.KeyboardEvent<any>) => any
}

export class Button extends PureComponent<Props> {
  static displayName: string

  public focus = () => {
    this.buttonRef && this.buttonRef.focus()
  }

  buttonRef: HTMLButtonElement | null
  setButtonRef = (ref: HTMLButtonElement | null) => {
    // eslint-disable-next-line immutable/no-mutation
    this.buttonRef = ref
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' && this.props.disabled) {
      event.preventDefault()
    } else if (this.props.onKeyDown) {
      this.props.onKeyDown(event)
    }
  }

  render() {
    const {
      children,
      className,
      disabled,
      onClick,
      ...propsToSpread
    } = this.props

    return (
      <button
        {...propsToSpread}
        aria-disabled={disabled ? 'true' : undefined}
        className={classList(styles.base, styles.default, className)}
        onClick={disabled ? undefined : onClick}
        onKeyDown={this.handleKeyDown}
        ref={this.setButtonRef}
        data-buc="Button"
      >
        {children}
      </button>
    )
  }
}
