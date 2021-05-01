import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import Layout from "../../components/Layout";
import AuthContext from "../../stores/authContext";

export default function index() {
    const context = useContext(AuthContext)
    console.log(context);
    return (
        <Layout title="Admin Panel" main="wrapper-panel">
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0 font-12">Mata Pelajaran</h5>
                                    <span className="h2 font-weight-bold mb-0">350,897</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon-card icon-shape bg-gradient-red text-white rounded-circle shadow">
                                        <FontAwesomeIcon icon={["fas", "book-reader" ]} />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0">
                                <span className="text-success mr-2 text-sm">
                                    <FontAwesomeIcon className="mr-1" icon={["fas", "arrow-up" ]}
                                        style={{width: ".875rem"}} />
                                    3.48%
                                </span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0 font-12">Siswa</h5>
                                    <span className="h2 font-weight-bold mb-0">350,897</span>
                                </div>
                                <div className="col-auto">
                                    <div
                                        className="icon-card icon-shape bg-gradient-gray-dark text-white rounded-circle shadow">
                                        <FontAwesomeIcon icon={["fas", "users" ]} />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0">
                                <span className="text-success mr-2 text-sm">
                                    <FontAwesomeIcon className="mr-1" icon={["fas", "arrow-up" ]}
                                        style={{width: ".875rem"}} />
                                    3.48%
                                </span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0 font-12">Guru</h5>
                                    <span className="h2 font-weight-bold mb-0">350,897</span>
                                </div>
                                <div className="col-auto">
                                    <div
                                        className="icon-card icon-shape bg-gradient-indigo text-white rounded-circle shadow">
                                        <FontAwesomeIcon icon={["fas", "chalkboard-teacher" ]} />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0">
                                <span className="text-success mr-2 text-sm">
                                    <FontAwesomeIcon className="mr-1" icon={["fas", "arrow-up" ]}
                                        style={{width: ".875rem"}} />
                                    3.48%
                                </span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0 font-12">Performa</h5>
                                    <span className="h2 font-weight-bold mb-0">350,897</span>
                                </div>
                                <div className="col-auto">
                                    <div
                                        className="icon-card icon-shape bg-gradient-warning text-white rounded-circle shadow">
                                        <FontAwesomeIcon icon={["fas", "chart-line" ]} />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0">
                                <span className="text-success mr-2 text-sm">
                                    <FontAwesomeIcon className="mr-1" icon={["fas", "arrow-up" ]}
                                        style={{width: ".875rem"}} />
                                    3.48%
                                </span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-xl-8">
                    <div className="card bg-default">
                        <div className="card-header bg-transparent">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="text-light text-uppercase mb-1 font-10">Overview</h6>
                                    <h5 className="h3 text-white mb-0">Total Activity</h5>
                                </div>
                                <div className="col">
                                    <ul className="nav nav-pills justify-content-end">
                                        <li className="nav-item mr-2 mr-md-0" data-toggle="chart">
                                            <a href="#" className="nav-link py-2 px-3 active" data-toggle="tab">
                                                <span className="d-none d-md-block">Month</span>
                                                <span className="d-md-none">M</span>
                                            </a>
                                        </li>
                                        <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark">
                                            <a href="#" className="nav-link py-2 px-3" data-toggle="tab">
                                                <span className="d-none d-md-block">Week</span>
                                                <span className="d-md-none">W</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart">
                                <div className="chartjs-size-monitor">
                                    <div className="chartjs-size-monitor-expand">
                                        <div className=""></div>
                                    </div>
                                    <div className="chartjs-size-monitor-shrink">
                                        <div className=""></div>
                                    </div>
                                </div>
                                <canvas id="chart-sales-dark" className="chart-canvas chartjs-render-monitor"
                                    style={{display: "block", width: "1001px", height: "350px"}} width="1001"
                                    height="350"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header bg-transparent">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="text-uppercase text-muted mb-1 font-10">Performance</h6>
                                    <h5 className="h3 mb-0">Total orders</h5>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart">
                                <div className="chartjs-size-monitor">
                                    <div className="chartjs-size-monitor-expand">
                                        <div className=""></div>
                                    </div>
                                    <div className="chartjs-size-monitor-shrink">
                                        <div className=""></div>
                                    </div>
                                </div>
                                <canvas id="chart-bars" className="chart-canvas chartjs-render-monitor"
                                    style={{display: "block", width: "459px", height: "350px"}} width="459"
                                    height="350"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header border-0">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="mb-0">Page visits</h3>
                                </div>
                                <div className="col text-right">
                                    <a href="#!" className="btn btn-sm btn-primary">See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="card body">
                            <div className="table-responsive">
                                <table className="table align-items-center table-flush">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Page name</th>
                                            <th scope="col">Visitors</th>
                                            <th scope="col">Unique users</th>
                                            <th scope="col">Bounce rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                /argon/
                                            </th>
                                            <td>
                                                4,569
                                            </td>
                                            <td>
                                                340
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-up text-success mr-3"></i> 46,53%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                /argon/index.html
                                            </th>
                                            <td>
                                                3,985
                                            </td>
                                            <td>
                                                319
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-down text-warning mr-3"></i> 46,53%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                /argon/charts.html
                                            </th>
                                            <td>
                                                3,513
                                            </td>
                                            <td>
                                                294
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-down text-warning mr-3"></i> 36,49%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                /argon/tables.html
                                            </th>
                                            <td>
                                                2,050
                                            </td>
                                            <td>
                                                147
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-up text-success mr-3"></i> 50,87%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                /argon/profile.html
                                            </th>
                                            <td>
                                                1,795
                                            </td>
                                            <td>
                                                190
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-down text-danger mr-3"></i> 46,53%
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}