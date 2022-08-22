import React, {useEffect} from 'react';
import LayoutMenu from './menu';

import styles from './index.module.css';

interface Props {}
const Layout: React.FunctionComponent<Props> = () => {
    useEffect(() => {}, []);
    return (
        <div className='h-full w-full flex flex-col'>
            <header className={styles.header}>
                <div className={styles.headerTitle}>QUOTE-ADMIN</div>
            </header>
            <main>
                <LayoutMenu />
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://github.com/orgs/ddupup/repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github
                </a>
            </footer>
        </div>
    );
};
export default Layout;
