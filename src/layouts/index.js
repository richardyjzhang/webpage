import Header from '../component/Header';
import styles from './index.css';

export default function (props) {
  return (
    <div className={styles.homePageRoot}>
      <Header />
      {props.children}
    </div>
  );
}