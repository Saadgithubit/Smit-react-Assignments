import './dashboard.css';
import Cards from '../../Components/Cards/card';
import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';


function Dashboard() {

    return (
        <div>
        <Navbar/>
        <Cards />
        <Footer/>
        </div>
    )
}

export default Dashboard;