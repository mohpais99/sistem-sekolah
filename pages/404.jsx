import React from 'react';
import Link from 'next/link';

export default function notFound() {
    
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <Link href="/">Homepage</Link>
            </div>
        </div>
    )
}
