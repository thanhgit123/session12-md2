import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {action} from '../../action/action.js'
export default function Header() {
    const data = useSelector(store =>store)
    const dispatch = useDispatch();

    const handleClick=()=>{
        dispatch(action("increase"))
    }
  return (
    <div>
        count:{data.reducer}
        <button onClick={handleClick}>click</button>

    </div>
  )
}
