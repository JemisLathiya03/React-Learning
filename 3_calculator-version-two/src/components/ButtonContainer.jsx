import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  let buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles["button-container"]}>
      {buttonName.map((item) => (
        <button
          key={item}
          type="button"
          className={styles["button"]}
          onClick={() => onButtonClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
