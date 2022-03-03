import classnames from 'classnames';
import styles from './button.module.css'; 
/* console.log(styles) */



export const Button = (props) => {
    /* let className =[
      styles.btn,
      props.theme === 'primary' ? styles.primary: '',
      props.theme === 'error' ? styles.error: '',
    ].join (' ') */

    let className = classnames (styles.btn, {
      [styles.primary]: props.theme === 'primary',
      [styles.error]: props.theme === 'error',
    })

    return (<button 
    className={className} 
    onClick={props.onClick} 
    disabled={props.disabled} 
    >
      {
        props.children
      }
    </button>)
  }