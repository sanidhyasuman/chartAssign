import Link from 'next/link';
import styles from './Sidebar.module.css'; // Import CSS module for styling

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Menu</h2>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}>
                    <Link href="/pages/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link href="/pages/settings">
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
