import reactLogo from "/react.svg"; // 이미지가 host 에 있거나, 외부 URI로 있을 경우에만 정상 호출
import viteLogo from "/vite.svg";
import Button from "./components/Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["root"]}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.react}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <Button />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
