import HeaderComponent from "./components/HeaderComponent";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer></ToastContainer>
    <HeaderComponent></HeaderComponent>
    <main>
        <section id="sales">
            <div className="dsmeta-container">
                <SalesCard></SalesCard>
            </div>
        </section>
    </main>
    </>
  )
}

export default App
