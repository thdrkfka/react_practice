// const Hello = () => {
//   <p>Hello</p>
// };
// export default Hello;

import World from "./World"
import styles from './Hello.modules.css'

export default function Hello() {
  // return <p>Hello</p>;
  return (
    <div>
      <p style={
        {
          color: 'red',
          fontSize: '50px',
          backgroundColor: 'blue'
        }
      }>Hello</p>
      <World />
      <div className={styles.box}>
        css 테스트 hello
      </div>

    </div>
  )
}