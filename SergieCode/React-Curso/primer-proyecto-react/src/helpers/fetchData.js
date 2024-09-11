export const fetchUsers = async (endPoint) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const info = await response.json()
        console.log(info)
        //setData(info)
        // setIsLoading(false)
        return {
            data: info,
            isLoading: false
        }
    }
    catch (error) {
        console.error(error)
    }
}