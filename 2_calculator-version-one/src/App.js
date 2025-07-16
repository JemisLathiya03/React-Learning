import logo from './logo.svg';
import styles from './App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';

function App() {
  return<div className={styles["calculator-body"]}>
  <div className={styles["calculator-container"]}>
    <Display></Display>
    <ButtonContainer></ButtonContainer>
  </div>
  </div> ;
}

export default App;
