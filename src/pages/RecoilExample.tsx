import  {useRecoilValue, useRecoilState} from  'recoil'
import {counterState} from '../contexts/recoil/Atoms'
import {incrementSelector, dencrementSelector} from '../contexts/recoil/selectors'

export default function RecoilExample() {
  const [count, setCounter] = useRecoilState(counterState)
  let increment = useRecoilValue(incrementSelector)
  let dencrement = useRecoilValue(dencrementSelector)
 
  const onClickSum = () => {
    setCounter(increment)
  }

  const onClickSub = () => {
    setCounter(dencrement)
  }
  
  return (
    <div>
      <button onClick={onClickSum} >click here</button>
      <button onClick={onClickSub} >click here</button>
     <h1><strong>{count}</strong></h1>
    </div>
  );
}
