import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router'
import * as G from '../helpers/Global';

export default function Sidebar({handleSidebar, pathname, name, role}) {
    const feature = require('./Routes').default
    const router = useRouter()
    return (
        <div className="left shadow">
            <div className="sidebar--button position-absolute cursor" onClick={() => handleSidebar} style={{width: "18px", top: "2.6em", right: "1.5em", zIndex: "100"}}>
                <FontAwesomeIcon icon={['fas', 'bars']} />
            </div>
            <div className="row">
                <div className="col-sm-12 py-4 px-5">
                    <div className="side-profile">
                        <Image src="/avatar.svg" alt="Picture of the author" width="72" height="72" className="profile-img" />
                    </div>
                    <div className="side-info mt-2" >
                        <h5 className="poppins-bold mb-0"><strong>{G.capitalize(name)}</strong></h5>
                        <span className="poppins-light">{G.capitalize(role)}</span>
                    </div>
                </div>
            </div>
            <div className="row side-menu">
                {
                    feature.map(feat => 
                        <div 
                            key={feat.id} 
                            onClick={(e) => {
                                e.preventDefault(), 
                                router.push(feat.layout + feat.path)
                            }} 
                            className={`menu cursor ${feat.layout + feat.path === pathname ? 'active' : ''}`}>
                                <div className="icon">
                                    {feat.icon}
                                </div>
                                <span>{feat.name}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
