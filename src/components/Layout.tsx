import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/main.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-area">
        <Header />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;