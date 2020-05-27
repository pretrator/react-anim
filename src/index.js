import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie'
import animationData from './5785-checkmark.json'
 const App=()=>{
    const [stop,setStop]=useState(false)
    const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
 }
 return (
  <div>
  <h1>First time anim</h1>
  <p>Click on the animation to pause it</p>
  <Lottie options={defaultOptions}
        height={400}
        width={400}
        isPaused={stop}
        onClick={()=>setStop(!stop)}
  />
</div>
 )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

