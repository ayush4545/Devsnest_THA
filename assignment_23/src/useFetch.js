import { useEffect, useState } from "react"
import axios from 'axios';
export const useFetch=(url=undefined)=>{
    const [data,setData]=useState(null)
    useEffect(async()=>{
        const res=await axios.get(url)
        setData(res)
      },[url])
    return data
}