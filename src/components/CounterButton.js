import styles from './styles.module.css';
export default function CounterButton(props) {
  return <button className={styles.counterBtn} onClick={props.onClickHandler}>{props.children}</button>;
}
