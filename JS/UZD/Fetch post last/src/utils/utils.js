export function makeRequest(endpoint){
    const response = fetch(endpoint)
    const data = response.json()

    return data
}