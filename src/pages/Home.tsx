import CTO from '../components/CTO/CTO';
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Highlight from '../components/Highlight/Highlight';
import Showcase from '../components/Showcase/Showcase';

const Home = () => {
  return (
    <div>
      <Hero />
      <Showcase />
      <Highlight />
      <Events />
      <CTO />
      <Footer />
    </div>
  );
};

export default Home;
