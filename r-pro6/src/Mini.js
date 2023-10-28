import { useState } from "react"

export default function Mini({id,name,parag,count}) {
    const [position,setPosition] = useState('left')

    return (
    <>

<article className={`artic ${position}`} key={id}>
 <header>
  {name}
 </header>
<p>{parag}</p>
</article>


    </>
  )
}
