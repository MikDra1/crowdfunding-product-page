/* eslint-disable react/prop-types */
import styles from './Button.module.css'

function Button({onClick, children}) {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    )
}

export default Button
