import Footer from './components/footer/Footer';
import LandingForm from './components/landingform/LandingForm';
import Testimonial from './components/testimonials/Testimonial';
import './App.css';
import Portfolio from './components/portfolio/Portfolio';
import Workflow from './components/workflow/Workflow';
import ClientReview from './components/clientReview/ClientReview';
import Industry from './components/industry/Industry';
import Technology from './components/technologies/Technology';
import About from './components/about/About';
import Service from './components/service/Service';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';

function App() {
  return (
    <>
      <Banner />
      <About />

      {/* <Header />
      <About />
      <Service />
      <Technology />
      <Industry />
      <Workflow />
      <ClientReview />
      <Portfolio />
      <LandingForm />
      <Testimonial />
      <Footer /> */}
    </>
  );
}

export default App;
