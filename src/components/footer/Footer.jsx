import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Footer() {
    const data = useSelector(store => store)
    const dispatch = useDispatch();
  return (
    <div>
            count: {data.reducer1}
            <button onClick={()=>dispatch({type:"add"})}>add </button>
    </div>
  )
}
