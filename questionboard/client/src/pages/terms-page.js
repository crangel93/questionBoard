import '.App.css';
import Header from './components/Header-comp.js'
import Nav from '../components/Nav-comp'
import Footer from './components/Footer-comp.js'
import Terms from '../components/Term-comp'

function Terms() {
    return(
        <div className="">
            <div>
            <Header />
            <Nav />
            <Terms />
            <Footer />
            </div>
        </div>
    );
}
export default Terms;

