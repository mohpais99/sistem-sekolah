import { useRouter } from 'next/router';
import React, {useEffect} from 'react';

export default function LoadingScreen({status, path}) {
    const route = useRouter()
    return (
        <div className="loader-div">
            <span className="loader">
                <span></span>
                <span></span>
            </span>
        </div>
    )
}
