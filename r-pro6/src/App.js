import {Text} from './Text'
import {useEffect, useState} from 'react'
import './index.css'
function App() {
  const [count,setCount] = useState(1)



useEffect(()=>{
 let y =  setInterval(()=>{
    setCount(count + 1)
  },3000)

  return () => clearInterval(y)
},[count])


 if(count > 3){
    setCount(1)
  }
  if(count < 1){
 setCount(3)
  }


    const increase = () =>{
     setCount(count + 1)
    }
    
  const decrease = () =>{
    setCount(count - 1)
   }



  return (<div className='container text-center'>
    <button  onClick={()=>decrease()}className='btn p-2 bg-success'>left</button>
<div className='BigDiv container'>

{Text.map(x=>{
const {id,name,parag} = x
let p;

if(count == id){p='center'} 
if((count-1) == id || (count+2) == id){p = 'right'}
 if((count+1) == id || (count-2) == id){p = 'left'} 

return <article className={`artic ${p}`} key={id}>
 <header>
  {name}
 </header>
<p>{parag}</p>
</article>
}
)
}

</div>
<button onClick={()=>increase()}className='btn p-2 bg-success'>right</button>
</div>
    );
}


export default App;