import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div className={styles["display"]}>
      <input
        type="text"
        className={styles["display-text"]}
        value={displayValue}
        readOnly
      ></input>
    </div>
  );
};

export default Display;
