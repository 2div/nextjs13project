'use client'

export default function Error ({error,reset}) {
    console.log('Error is :',error)
    return <div>
        <h2>Something went wrong!</h2>
    </div>
}