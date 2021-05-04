import Link from 'next/link';
import React from 'react';

export default function notFound() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <Link href="/">Kembali ke halaman login</Link>
            </div>
        </div>
    )
}
