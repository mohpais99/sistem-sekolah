import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Breadcrumbs() {
    return (
        <ol className="breadcrumb p-0 m-0 font-24">
            <li>
                <span>
                    {/* <FontAwesomeIcon icon={["fas", "tachometer-alt"]} className="mr-2" style={{width: "1.5rem"}} /> */}
                    Dashboard
                </span>
            </li>
            {/* <li><a href="#">Materi</a></li> */}
        </ol>
    )
}

export default Breadcrumbs
