export async function makeGetRequest(endpoint){
    try {
        const response = await fetch(endpoint)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
    
    
}