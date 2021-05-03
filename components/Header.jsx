import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import useAuth from '../helpers/Context';
import * as G from '../helpers/Global';

export default function Header(props) {
    const { logout } = useAuth();
    const [show, setShow] = useState(false)
    const handleProfile = () => {
        setShow(!show)
    }
    const handleLogOut = (e) => {
        e.preventDefault()
        // router.push('/')
        logout()
    }
    return (
        <div className="head bg-success-custom">
            <div className="col-12">
                <div className="row">
                    <div className="col-3 pl-0 my-auto">
                        <Breadcrumbs />
                    </div>
                    <div className="col-auto pr-0 ml-auto">
                        <div className="btn-group my-1" onClick={handleProfile}>
                            <button type="button" className="btn bg-cyan text-left">
                                <div className="row">
                                    <div className="col-auto my-auto pr-0">
                                        <img src="/avatar.svg" alt="" width="30" />
                                    </div>
                                    <div className="col-auto my-auto d-none d-lg-block">
                                        <p className="mb-0 poppins-semi-bold font-12 text-dark">{G.capitalize(props.name)}</p>
                                        <p className="mb-0 text-secondary font-10">{G.capitalize(props.role)}</p>
                                    </div>
                                </div>
                            </button>
                            <button type="button" className="btn bg-cyan dropdown-toggle dropdown-toggle-split" onClick={handleProfile}>
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className={`dropdown-menu dropdown-menu-right font-14 shadow ${!show ? "" : "show"}`} style={{position: "absolute", top: "50px", left: "0px"}}>
                                <div className="dropdown-item-text font-12 poppins-semi-bold text-muted text-uppercase">settings</div>
                                <a className="dropdown-item" href="">
                                    <FontAwesomeIcon icon={["fas", "user"]} className="mr-2" style={{width: "12px"}} />
                                    <span className="my-auto">Profil</span>
                                </a>
                                <a className="dropdown-item" href="">
                                    <FontAwesomeIcon icon={["fas", "bell"]} className="mr-2" style={{width: "12px"}} />
                                    <span className="my-auto">Notifikasi</span>
                                </a>
                                <a className="dropdown-item" href="">
                                    <FontAwesomeIcon icon={["fas", "wrench"]} className="mr-2" style={{width: "12px"}} />
                                    <span className="my-auto">Pengaturan</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger text-left d-flex" href="" onClick={handleLogOut} >
                                    <FontAwesomeIcon icon={["fas", "sign-out-alt"]} className="mr-2" style={{width: "12px"}} />
                                    <span className="my-auto">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
