import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function PasswordSetting() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title mb-0 poppins-semi-bold">Ubah Kata Sandi</h4>
                    </div>
                    <div className="card-body">
                        <form noValidate>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label my-auto poppins-medium">Password Lama</label>
                                        <div className="col-sm-10">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <input className="form-control" placeholder="Password Lama" type="password"/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={["fas", "eye"]} style={{fontSize: "1.1rem", width: "1.1rem"}} />
                                                        {/* <FontAwesomeIcon icon={["fas", "slash"]} style={{fontSize: ".875rem", width: "1.1rem"}} /> */}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label my-auto poppins-medium">Password Baru</label>
                                        <div className="col-sm-10">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <input className="form-control" placeholder="Password Baru" type="password"/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={["fas", "eye"]} style={{fontSize: "1.1rem", width: "1.1rem"}} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label my-auto poppins-medium">Konfirmasi Password</label>
                                        <div className="col-sm-10">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <input className="form-control" placeholder="Konfirmasi Password Baru" type="password"/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={["fas", "eye"]} style={{fontSize: "1.1rem", width: "1.1rem"}} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center my-4">
                                <button type="submit" className="btn btn-slack btn-icon py-2 ">
                                    <span className="btn-inner--text">Ubah Password</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordSetting
