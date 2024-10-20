import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { HomeScreen } from "./routes/HomeScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { ContactScreen } from "./routes/ContactScreen"
import { UsuarioProvider } from "./context/UsuarioProvider"
import { LogInScreen } from "./routes/LogInScreen"
export const App = () => {
    return (
        <>
            <UsuarioProvider>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/login" element={<LogInScreen />} />
                    <Route path="/about" element={<AboutScreen />} />
                    <Route path="/contact" element={<ContactScreen />} />
                    <Route path="/*" element={<Navigate to='/' />} />
                </Routes>
            </UsuarioProvider>
        </>
    )
}
