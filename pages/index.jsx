import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import useAuth from '../helpers/Context';

export default function SignIn() {
    const { user, isAuthenticated, login } = useAuth();
    const router = useRouter()
    if (user && isAuthenticated) {
        router.push('/panel/dashboard')
    }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === '' || password === '') {
            alert('tidak boleh kosong')
        } else {
            login(username, password)
        }
    }
    // return null & false
    // console.log(user, isAuthenticated);
    
    return (
        <>
            <Head>
                <title>Authentication App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="wrapper-auth">
                <div className="container vh-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-sm-5">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="card card-login radius-10">
                                    <div className="card-header card-header-primary bg-transparent text-center poppins-bold py-4" style={{border: 'none'}}>
                                        <h4 className="card-title mb-0 font-24">Masuk ke Akun</h4>
                                    </div>
                                    <div className="card-body poppins-medium">
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" onChange={(e) => setUsername(e.target.value)} name="username" id="username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Kata Sandi</label>
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="form-control" />
                                        </div>
                                        <button type="submit" className="btn btn-sm btn-block btn-warning text-white py-3 my-4 poppins-bold text-uppercase radius-7">Masuk</button>
                                    </div>
                                    {/* <div className="card-footer py-3 bg-transparent">
                                        <a href="">Don't have account?</a>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}