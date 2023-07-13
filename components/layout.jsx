import styles from "../styles/layout.module.scss";
import Link from "next/link";

const DefaultLayout = ({ children }) => {
    const links = [
        {
            id: 1,
            name: "Homepage",
            value: "/",
        },
        {
            id: 2,
            name: "About",
            value: "/about",
        },
        {
            id: 3,
            name: "Who",
            value: "/who",
        },
        {
            id: 4,
            name: "👤",
            value: "/Login",
        },
        {
            id: 5,
            name: "Dashboard",
            value: "/Dashboard",
        },
    ];

    return (
        <div className={styles.DefaultLayout}>
            <div className={styles.navbar}>
                <ul>
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link href={link.value}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.content}>{children}</div>
            <div className={styles.footer}>
            </div>
        </div>
    );
};

export default DefaultLayout;