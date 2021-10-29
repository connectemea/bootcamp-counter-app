import styles from './styles.module.css';
export default function Count(props) {
  // object destructuring
  const { value } = props;
  return <div className={styles.countValue}>{value}</div>;
}
