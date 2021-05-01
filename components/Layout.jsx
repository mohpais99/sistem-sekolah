import Sidebar from './Sidebar';
import Head from 'next/head';
import Header from './Header';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { AuthContextProvider } from '../stores/authContext';

export default function Layout({main, title, children}) {
    const router = useRouter()
    const [side, setSide] = useState(true)
    const handleSidebar = () => {
        setSide(!side)
    }
    return (
        <AuthContextProvider>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar handleSidebar={handleSidebar} {...router} />
                    <main className={main + ` trantition2`}>
                        <Header />
                        <div className="content" style={{marginTop: "-70px"}}>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </AuthContextProvider>
    )
}
