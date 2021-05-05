import Sidebar from './Sidebar';
import Head from 'next/head';
import Header from './Header';
import { useRouter } from 'next/router'
import { useState } from 'react';
import useAuth, { ProtectRoute } from '../helpers/Context';

const feature = require('./Routes').default

function Layout({main, title, children}) {
    const {user} = useAuth()
    const router = useRouter()
    const [side, setSide] = useState(true)
    const handleSidebar = () => {
        setSide(!side)
    }
    
    return (
        <ProtectRoute>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar handleSidebar={handleSidebar} {...router} {...user} />
                    <main className={main + ` trantition2`}>
                        <Header {...user} />
                        <div className="content" style={{marginTop: "-70px"}}>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </ProtectRoute>
    )
}

export default Layout;