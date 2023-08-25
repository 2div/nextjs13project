import getDomain from "@/app/lib/getDomain"



async function getData() {
    // 1 endpoint - API?
    const domain = getDomain()
    const endpoint =`${domain}/api/posts ` // -> third party api request
    const res = await fetch(endpoint) //http GET

    if (!res.ok){
        throw new Error("fetch faild")
    }
    return res.json()

}

export default async function BlogPage() {
    const data = await getData()
    console.log(process.env.PUBLIC_DOMAIN)
    const items = data.items ? [...data.items] :[]
    return <main>
        <h1>Hello world</h1>
        {items.map((item,indx) => {
            return <li key={`post-${indx}`}>{item.title}</li>
        })}
    </main>
}