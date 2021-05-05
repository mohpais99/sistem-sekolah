import React, { useState } from 'react';
import * as G from '../helpers/Global';
import api from '../services/Api';
import Cookies from 'js-cookie'
import Swal from 'sweetalert2';

function Biodata(props) {
    const [bio, setBio] = useState(props)
    const handleChange = (e) => {
        setBio({ ...bio, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const cookies = Cookies.get('token')
        console.log(cookies);
        if (cookies) {
            let {token} = JSON.parse(cookies)
            console.log("Got a token in the cookies, let's see if it is valid")
            api.defaults.headers.Authorization = `Bearer ${token}`
            const { data: data } = await api.put(`user/update/${bio.id}`, bio)
            let {s, message} = data
            if (s === 1) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title mb-0 poppins-semi-bold">Identitas Diri</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-2 col-form-label my-auto poppins-medium">Status</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="text" name="role" value={G.capitalize(bio.role)} disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-2 col-form-label my-auto poppins-medium">Nama Lengkap</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="text" name="name" onChange={handleChange} placeholder="Nama Lengkap" value={bio.name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label my-auto poppins-medium">Nomor Induk</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="text" name="no_induk" value={bio.no_induk} disabled/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label my-auto poppins-medium">Tempat Lahir</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="text" name="pod" onChange={handleChange}  placeholder="Tempat Lahir" value={bio.pod} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label my-auto poppins-medium">Tanggal Lahir</label>
                                        <div className="col-sm-10">
                                            <input 
                                                name="bod" 
                                                type="date" 
                                                className="form-control" 
                                                onChange={(e) => setBio({...bio, bod: JSON.stringify(new Date(e.target.value))})} 
                                                value={JSON.parse(bio.bod)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label my-auto poppins-medium">Jenis Kelamin</label>
                                        <div className="col-sm-10">
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="sex" name="sex" className="custom-control-input" onChange={() => setBio({...bio, sex: "Male"})} checked={bio.sex === 'Male' && true} />
                                                <label className="custom-control-label" htmlFor="sex">Male</label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="sex" name="sex" className="custom-control-input" onChange={() => setBio({...bio, sex: "Female"})} checked={bio.sex !== 'Male' && true} />
                                                <label className="custom-control-label" htmlFor="sex">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label my-auto poppins-medium">Agama</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="text" name="religion" onChange={handleChange} value={bio.religion} placeholder="Agama" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label mt-1 poppins-medium">Alamat</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" name="address" onChange={handleChange} value={bio.address} placeholder="Alamat" rows="4"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center my-4">
                                <button type="submit" className="btn btn-slack btn-icon py-2" disabled={JSON.stringify(props) === JSON.stringify(bio) && true}>
                                    <span className="btn-inner--text">Ubah Data Diri</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biodata
