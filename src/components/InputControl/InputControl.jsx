/* eslint-disable react/prop-types */
import styles from "./InputControl.module.css";

function InputControl({ label, type, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input className="w-fit md:w-full" type={type || "text"} {...props} />
    </div>
  );
}

export default InputControl;
