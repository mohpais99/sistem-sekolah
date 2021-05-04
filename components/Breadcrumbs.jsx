import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter, Link } from 'next/router';
import * as G from '../helpers/Global';

function Breadcrumbs() {
    const router = useRouter()
    const handleLoop = () => {
        const route = router.pathname.split("/")
        const pathArr = route.slice(2)
        return pathArr.map((path, i) => {
            return (
                <li key={i}>
                    <span>{G.capitalize(path)}</span>
                </li>
            )
        })
    }
    return (
        <ol className="breadcrumb p-0 m-0 font-24">
            {
                handleLoop()
            }
            {/* <li>
                <span>
                    <FontAwesomeIcon icon={["fas", "tachometer-alt"]} className="mr-2" style={{width: "1.5rem"}} />
                    Dashboard
                </span>
            </li> */}
            {/* <li><a href="#">Materi</a></li> */}
        </ol>
    )
}

export default Breadcrumbs
