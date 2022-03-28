import { useState } from "react";
import styles from "../styles/PrintForm.module.css";


export default function PrintForm({ lineItems }) {
  return (
    <div className={styles.printFormContainer}>
      <div className={styles.printForm}></div>
    </div>
  );
}
