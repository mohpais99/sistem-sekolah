// import Link from 'next/link';
import Router from 'next/router';
import React from 'react';

export default function notFound() {
    const handleBack = e => {
        e.preventDefault()
        Router.back()
    }
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                {/* <Link href="/">Kembali ke halaman login</Link> */}
                <a className="cursor" onClick={handleBack}>Kembali ke halaman sebelumnya!</a>
            </div>
        </div>
    )
}
