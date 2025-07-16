import styles from "./Display.module.css"

const Display = () =>{

  return <div className={styles["display"]}>
      <input type='text' className={styles['display-text']}></input>
    </div>

}

export default Display