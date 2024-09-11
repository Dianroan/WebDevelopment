import { useEffect, useState } from "react"
import { fetchUsers } from "../helpers/fetchData"

export const useFetchData = (endPoint) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    /**
     * const
     */
    const getData = async () => {
        const { data, isLoading } = await fetchUsers(endPoint)
        setData(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
        getData()
        /*
        fetchUsers(endPoint).then(
            (response) => {
                setData(response.data)
                setIsLoading(response.isLoading)
            },
        )*/
    }, [endPoint])

    return {
        data,
        isLoading
    }
}
