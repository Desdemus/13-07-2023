import { useState, useContext } from "react";
import { UserContext } from "../../pages/Dashboard";

const Greet = () => {
    const user = useContext(UserContext);

    return <h1>Welcome {user.name}</h1>;
};

export default Greet;