import {useRef} from 'react'

function Dom() {

    const h2Ref = useRef(null);
    const btnRef = useRef(null);

    const changeStyle = () =>{
        h2Ref.current.style.color="green";
        btnRef.current.innerText="Style Modified"
    }
  return (
    <div style={{textAlign:'center'}}>
      <h2 ref={h2Ref}>React useRef() Concept</h2>
      <button ref={btnRef} onClick={changeStyle}>Change Style</button>
    </div>
  )
}

export default Dom;
