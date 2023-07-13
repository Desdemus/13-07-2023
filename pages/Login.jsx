import { useState } from "react";
import { auth } from "./mocks/auth";
import { useRouter } from 'next/router';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onHandleUsername = (e) => setUsername(e.target.value);

    const onHandlePassword = (e) => setPassword(e.target.value);

    const onHandleSubmit = (e) => {
        e.preventDefault();

        try {
            if (auth.username === username && auth.password === password) {
                router.push('/Dashboard');
                localStorage.setItem("auth", true);
            }
            throw new Error("Credenziali non valide");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={onHandleSubmit}>
                <input
                    value={username}
                    onChange={onHandleUsername}
                    type="text"
                    placeholder="Username"
                    required
                />
                <input
                    value={password}
                    onChange={onHandlePassword}
                    type="password"
                    placeholder="Password"
                    required
                />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;