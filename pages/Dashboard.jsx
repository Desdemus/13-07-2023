import { useEffect, useState } from "react";
import Greet from "./components/greet";
import { createContext } from "react";
export const UserContext = createContext();


export default function Dashboard() {
    const state = {
        name: "Francesco",
    };
    const [isLogged, setLogged] = useState(false);

    useEffect(() => {
        setLogged(JSON.parse(localStorage.getItem("auth")));
    }, []);

    return isLogged ? <UserContext.Provider value={state}>


        <div className="Dashboard">
            <p>Nome</p>
            <p>Email</p>
            <p>Age</p>
        </div>
        <Greet />
    </UserContext.Provider>
        : ("/login")
        ;
}


