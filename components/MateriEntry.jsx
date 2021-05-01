import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Materi() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="float-left">
                    <div className="btn btn-warning text-white">
                        + Unggah Materi
                    </div>
                </div>
                <div className="float-right">
                    <form noValidate>
                        <div className="form-group has-search">
                            <FontAwesomeIcon icon={["fas", "search"]} className="form-control-feedback my-auto ml-3" />
                            <input type="text" className="form-control shadow-none poppins-light" placeholder="Cari Materi ..." />
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <img src="https://placeimg.com/640/480/any" className="card-img-top" alt="image" height="250" />
                            <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h5 className="card-title">Teknik Mesin 1</h5>
                                        <h5 className="card-subtitle poppins-light font-14 text-secondary">13 Desember 2021</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <a href="#" className="btn btn-outline-warning btn-block">Prantinjau</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="btn btn-outline-primary btn-block">Unduh</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src="https://placeimg.com/640/480/any" className="card-img-top" alt="image" height="250" />
                            <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h5 className="card-title">Teknik Mesin 1</h5>
                                        <h5 className="card-subtitle poppins-light font-14 text-secondary">13 Desember 2021</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <a href="#" className="btn btn-outline-warning btn-block">Prantinjau</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="btn btn-outline-primary btn-block">Unduh</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src="https://placeimg.com/640/480/any" className="card-img-top" alt="image" height="250" />
                            <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h5 className="card-title">Teknik Mesin 1</h5>
                                        <h5 className="card-subtitle poppins-light font-14 text-secondary">13 Desember 2021</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <a href="#" className="btn btn-outline-warning btn-block">Prantinjau</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="btn btn-outline-primary btn-block">Unduh</a>
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
