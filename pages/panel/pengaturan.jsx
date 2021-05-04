import React, { useState } from 'react';
import Biodata from '../../components/Biodata';
import Layout from '../../components/Layout';
import PasswordSetting from '../../components/PasswordSetting';
import useAuth from '../../helpers/Context';

export default function Pengaturan() {
    const {user} = useAuth()
    const [tab, setTab] = useState('Self')
    return (
        <Layout title="Admin Panel | Pengaturan" main="wrapper-panel">
            <div className="row">
                <div className="col-xl-12">
                {/* active */}
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item cursor" onClick={() => setTab('Self')}>
                            <a className={`nav-link bg-transparent poppins-bold pl-0 ${tab === 'Self' ? 'active' : ''}`}>Data Diri</a>
                        </li>
                        <li className="nav-item cursor" onClick={() => setTab('Security')}>
                            <a className={`nav-link bg-transparent poppins-bold ${tab === 'Security' ? 'active' : ''}`}>Kata Sandi</a>
                        </li>
                    </ul>
                    <div className="tab-content py-4">
                        <div className={`tab-pane fade ${tab === 'Self' ? 'show active' : ''}`}>
                            <Biodata {...user} />
                        </div>
                        <div className={`tab-pane fade ${tab === 'Security' ? 'show active' : ''}`}>
                            <PasswordSetting />
                        </div>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}
