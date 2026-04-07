import Raccolta from '../components/Raccolta';
import BuyMeACoffee from '../components/BuyMeACoffee';
import Goodbye from '../components/Goodbye';

const Home = () => {
  return (
    <section className="p-2">
      <div className="text-sky-600 mb-1">
        <h1 className="text-3xl font-bold">Marene</h1>
        <h2 className="text-2xl">
          Raccolta rifiuti{' '}
          <span className="text-3xl">{new Date().getFullYear()}</span>
        </h2>
        <Goodbye />
        <Raccolta />
        <BuyMeACoffee />
      </div>
    </section>
  );
};

export default Home;
