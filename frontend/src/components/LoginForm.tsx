import React, { ReactElement, useState, useContext } from 'react'
import { UserContext } from "./App";
import styles from "../Main.module.css";
import Header from './Header';

interface Props {
  onLoginClick: (userName: string, password: string) => void | undefined
}

export default function LoginForm({onLoginClick}: Props): ReactElement {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div>
      <div className={styles.header}>
        <ul className={styles.headerList}>
          <li className={styles.headerLogo}><a>Financial Freedom</a></li>
          <li className={styles.headerItem}><a>Budget</a></li>
          <li className={styles.headerItem}><a>Data</a></li>
          <li className={styles.headerItem}><a>Transactions</a></li>
        </ul>
      </div>
      <div className={styles.content}>
        <form className={styles.loginForm}>
          <h1 style={{paddingBottom: "20px"}}>Login</h1>
          <label>User Name</label>
          <input
            value={userName}
            onChange={(e: any) => setUserName(e.target.value)}
            className={styles.inputStyle}
          />
          <label>Password</label>
          <input
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className={styles.inputStyle}
            style={{marginBottom: "40px"}}
            type="password"
          />
          <button
            onClick = {(e) => {
              e.preventDefault();
              onLoginClick(userName, password);
            }}
            className={styles.buttonStyle}
            style={{backgroundColor: "#aaaaaa"}}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}