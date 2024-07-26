import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"


const Layout = ({ children }) => {
  return (
    <div className='flex flex-col flex-wrap gap-32'>
      <div className='container-default'>
        <Header />
        <main className="flex flex-col items-center" >{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout