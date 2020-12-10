export async function getClue() {
    const response = fetch("https://jservice.xyz/api/random-clue");
    
    if (response.ok !== true) {
        return Error(await response.status)
    } else {
        console.log(await response.status)
        console.log((await response.json()))
        return (await response.json())
    }
    
}

