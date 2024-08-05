
import './App.css';
import Card from './Component/Card';
import data from './data';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';


function App() {

  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="cards-list">
        {cards}
      </section>

    </div>
  );
}

export default App;
