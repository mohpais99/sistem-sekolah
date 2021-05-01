import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SignIn() {
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push('panel/dashboard')
    }
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
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Kata Sandi</label>
                                            <input type="password" name="password" id="password" className="form-control" />
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