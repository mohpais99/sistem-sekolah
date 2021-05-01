import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Materi from '../../components/MateriEntry'

export default function materi() {
    const [tab, setTab] = useState('Materi')
    return (
        <Layout title="Admin Panel" main="wrapper-panel">
            <div className="row">
                <div className="col-xl-12">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item cursor" onClick={() => setTab('Materi')}>
                            <a className="nav-link bg-transparent poppins-bold pl-0 active">Materi</a>
                        </li>
                        <li className="nav-item cursor" onClick={() => setTab('Video')}>
                            <a className="nav-link bg-transparent poppins-bold">Video</a>
                        </li>
                        <li className="nav-item cursor" onClick={() => setTab('Soal')}>
                            <a className="nav-link bg-transparent poppins-bold">Soal</a>
                        </li>
                    </ul>
                    <div className="tab-content py-4">
                        <div className={`tab-pane fade ${tab === 'Materi' ? 'show active' : ''}`}>
                            {/* <div className="h6">Ini materi...</div> */}
                            <Materi />
                        </div>
                        <div className={`tab-pane fade ${tab === 'Video' ? 'show active' : ''}`}>
                            <div className="h6">Ini video...</div>
                        </div>
                        <div className={`tab-pane fade ${tab === 'Soal' ? 'show active' : ''}`}>
                            <div className="h6">Ini soal...</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
