import styles from "./Navigation.module.css"
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container` }>
        <div> <img src="/images/Frame 2 1.png" alt="logo" /></div>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
        </ul>
    </nav>
  )
}

export default Navigation
