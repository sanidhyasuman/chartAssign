import Sidebar from './SideBar';
import styles from './Layout.module.css'; // CSS for the layout

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
