import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import useAuth from '../helpers/Context';
import * as G from '../helpers/Global';
import { useRouter } from "next/router";
import Swal from 'sweetalert2';

export default function Header(props) {
    const router = useRouter()
    const { logout } = useAuth();
    const [show, setShow] = useState({profile: false, notification: false})
    const handleProfile = () => {
        setShow({...show, profile: !show.profile})
    }
    const handleNotif = () => {
        setShow({...show, notification: !show.notification})
    }
    const handleLogOut = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Apakah anda yakin ingin keluar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yakin!',
            cancelButtonText: 'Batalkan!',
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
            }
        })
        // e.preventDefault()
        // logout()
    }
    return (
        <div className="head bg-success-custom">
            <div className="col-12">
                <div className="row">
                    <div className="col-3 pl-0 my-auto">
                        <Breadcrumbs />
                    </div>
                    <div className="col-auto pr-0 ml-auto ">
                        <div className="row">
                            <div className="col my-auto dropdown">
                                <a className="text-white font-16" role="button" onClick={handleNotif}>
                                    <FontAwesomeIcon icon={["fas", "bell"]} style={{width: "16px"}} />
                                </a>
                                <div className={`dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden ${!show.notification ? "" : "show"}`} style={{width: "450px"}}>
                                    <div className="px-3 py-3">
                                        <h6 className="text-sm text-muted m-0">You have <strong className="text-primary">1</strong> notifications.</h6>
                                    </div>
                                    <div className="list-group list-group-flush">
                                        <a href="" className="list-group-item list-group-item-action">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <Image src="/avatar.svg" alt="Picture of the author" width="48" height="48" className="avatar rounded-circle" />
                                                </div>
                                                <div className="col ml--2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 className="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div className="text-right text-muted">
                                                            <small>2 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <a href="#!" className="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
                                </div>
                            </div>
                            <div className="col-auto">
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
                                    <div className={`dropdown-menu dropdown-menu-right font-14 shadow ${!show.profile ? "" : "show"}`} style={{position: "absolute", top: "50px", left: "0px"}}>
                                        <div className="dropdown-item-text font-12 poppins-semi-bold text-muted text-uppercase p-2 pl-3">settings</div>
                                        <a className="dropdown-item" href="">
                                            <FontAwesomeIcon icon={["fas", "user"]} className="mr-2" style={{width: "12px"}} />
                                            <span className="my-auto">Profil</span>
                                        </a>
                                        <a className="dropdown-item" href="" onClick={(e) => {
                                            e.preventDefault()
                                            router.push('/panel/pengaturan')
                                        }}>
                                            <FontAwesomeIcon icon={["fas", "wrench"]} className="mr-2" style={{width: "12px"}} />
                                            <span className="my-auto">Pengaturan</span>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item text-danger text-left d-flex cursor" onClick={handleLogOut} >
                                            <FontAwesomeIcon icon={["fas", "sign-out-alt"]} className="mr-2" style={{width: "12px"}} />
                                            <span className="my-auto">Logout</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
