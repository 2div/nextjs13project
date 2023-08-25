export default function getDomain() {
    const protocol = process.env.NEXT_PUBLLIC_VERCEL_ENV === 
    "production" ? "https" : "http"
    
    const domain = process.env.NEXT_PUBLLIC_VERCEL_URL? 
    process.env.NEXT_PUBLLIC_VERCEL_URL : "localhost:3000"
    
    return `${protocol}://${domain}`
}