import styles from "./Button.module.css"
const Button = ({isOutline, text, icon, ...rest}) => {
  return (
    <button className= {isOutline? styles.outlinebtn : styles.primarybtn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
