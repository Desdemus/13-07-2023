import { useEffect, useState } from "react";

export default function Dashboard() {

    const [isLogged, setLogged] = useState(false);

    useEffect(() => {
        setLogged(JSON.parse(localStorage.getItem("auth")));
    }, []);

    return isLogged ? (
        <div className="Dashboard">
            <p>Nome</p>
            <p>Email</p>
            <p>Age</p>
        </div>
    ) : ("/login")
        ;
}