import { useEffect, useState } from 'react'

export default function PrevState(state) {
    const [first, setfirst] = useState()
    useEffect(() => {  
      return () => {
        setfirst(state) 
      }
    }, [state,first])
    
  return first
}
