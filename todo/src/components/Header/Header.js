import React from "react";
import styles from "./Header.module.css";
const Header = (props) => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.toLocaleString('default', { month: 'short' })).toUpperCase(); //January is 0!
  const yyyy = today.getFullYear();
  const day = String(today.toLocaleDateString('default',{weekday : 'long'}))
  
  return (
    <>
      <div className={styles.header}>
        <div className={styles.DateStyleClass}>
          <div className={styles.Date}>{dd}</div>
          <div className={styles.MonthAndYear}>
            <div className={styles.Month}>{mm}</div>
            <div className={styles.Year}>{yyyy}</div>
          </div>
        </div>
        <div className={styles.DayStyleClass}>{day}</div>
      </div>
    </>
  );
};

export default Header;
