import '../styles/notfound.css';
import '../styles/globals.css';
import '../styles/chart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '../styles/breadcrumbs.scss';
import '../styles/loader.css';
import { AuthProvider } from '../helpers/Context';

library.add(fab, fas)

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
