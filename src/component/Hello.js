// const Hello = () => {
//   <p>Hello</p>
// };
// export default Hello;

import World from "./World"
import './Hello.css'

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
      <div className="box">
        css 테스트
      </div>

    </div>
  )
}