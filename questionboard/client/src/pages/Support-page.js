import '.App.css';
import Header from './components/Header-comp.js'
import Nav from './components/Nav-comp.js'
import Support from './components/Support-comp.js'
import Footer from './components/Footer-comp.js'


function Support() {
    return(
        <div className="">
            <div>
            <Header />
            <Nav />
            <Support/>
            <Footer />
            </div>
        </div>
    );
}
export default Support;

