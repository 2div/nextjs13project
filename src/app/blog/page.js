async function getData() {
    // const endpoint ="http://locsalhost:3000/api/posts"
    // const res = await fetch(endpoint)
    // if (!res.ok){
    //     throw new Error("fetch faild")
    // }
    return {}//res.json()

}

export default async function BlogPage() {
    const data = await getData()
    console.log(data)
    console.log(data)
    const items = data.items ? [...data.items] :[]
    console.log(items)
    return <main>
        <h1>Hello world</h1>
        {items.map((item,indx) => {
            return <li key={`post-${indx}`}>{item.title}</li>
        })}
    </main>
}