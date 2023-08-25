'use client'

import { useEffect } from "react"

export default function Error ({error,reset}) {
    useEffect(()=> {
        console.log('Error is :',error)
    },[error])
    const retry=() => {
        reset()
    }
    return <div>
        <h2>Something went wrong happend!</h2>
        <button onClick={retry}>Try again</button>
    </div>
}