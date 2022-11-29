import Title from '../components/Title.jsx';
import Whyus from '../components/Whyus.jsx';
import Gallery from '../components/Gallery.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';


export default function index() {
  return (
    <div>
      <Navbar />
      <Title />
      <Whyus />
      <Gallery />
      <Footer />
    </div>
  );
}