import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="page-main">{children}</main>
    <Footer />
  </>
);

export default Layout;
