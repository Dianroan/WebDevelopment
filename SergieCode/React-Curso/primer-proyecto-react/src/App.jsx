import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomeScreen } from "./routes/HomeScreen";
import { AboutScreen } from "./routes/AboutScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { UsuarioProvider } from "./context/UsuarioProvider";
import { LogInScreen } from "./routes/LogInScreen";
import { uploadFile } from "./firebase/config";

export const App = () => {
    const handleFileChange = (e) => {
        console.log("hoa");

        const file = e.target.files[0];
        if (file) {
            uploadFile(file);
        } else {
            console.error('No file selected');
        }
    };

    return (
        <>
            <p>Hola</p>
            <input type="file" name="file" id="" onChange={handleFileChange} />
        </>
    );
};
