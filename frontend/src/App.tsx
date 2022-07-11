import NotificationButton from "./components/NotificationButton";
import HeaderComponent from "./components/HeaderComponent";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
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
