export async function getClue() {
    const response = await fetch("https://jservice.xyz/api/random-clue");
    
    if (response.ok !== true) {
        return Error(await response.status)
    } else {
        return (await response.json())
    }
    
}

