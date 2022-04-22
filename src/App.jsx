import Navbar from './component/NAVBARS';
import Footer from './component/FOOTER';
import './component/STYLES/App.css';
import Dicas from './component/SECTIONDICA';


export default function App() {
 
  return (
    <div>
      <Navbar/>
      <Dicas/>
      <Footer/>
    </div>
  );
}

