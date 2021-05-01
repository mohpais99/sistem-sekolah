import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const routesPanel = [
    {
        id: 1,
        layout: "/panel",
        path: "/dashboard",
        name: "Dashboard",
        icon: <FontAwesomeIcon icon={["fas", "tachometer-alt"]} />
    },
    {
        id: 2,
        layout: "/panel",
        path: "/materi",
        name: "Materi",
        icon: <FontAwesomeIcon icon={["fas", "folder-open"]} />
    },
    {
        id: 3,
        layout: "/panel",
        path: "/guru",
        name: "Guru",
        icon: <FontAwesomeIcon icon={["fas", "chalkboard-teacher"]} />
    },
    {
        id: 4,
        layout: "/panel",
        path: "/siswa",
        name: "Siswa",
        icon: <FontAwesomeIcon icon={["fas", "users"]} />
    },
    {
        id: 5,
        layout: "/panel",
        path: "/pengaturan",
        name: "Pengaturan",
        icon: <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
    }
]

export default routesPanel;