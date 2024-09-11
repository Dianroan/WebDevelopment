import { UserList } from "./userList"
import { useState } from "react"

export const UsersApp = () => {
    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = () => {
        //fetchUsers()
        setEndPoint('comments')
    }
    /*
        useEffect(() => {
            fetchUsers()
        }, [])
    */
    return (
        <>
            <h1>Users App</h1>
            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleFetch}>Aqui se llama a la api</button>
        </>
    )
}
