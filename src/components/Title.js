import styles from './styles.module.css';
const Title = (props) => {
  const { title } = props;
  return (
    <>
      <div className={styles.mainTitle}>{title}</div>
    </>
  );
};
export default Title;
