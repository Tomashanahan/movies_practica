import { useEffect, useState } from "react"

function useFetch(url) {
    const [info,setInfo] = useState(null)
    
    async function getData(url) {
        try{
            const res = await fetch(url)
            const data = await res.json()
            setInfo(data)
        }catch (e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getData(url)
    },[url])

    return info
}

export default useFetch