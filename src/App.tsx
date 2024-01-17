import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/works";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Blogs} from "./layout/sections/blogs/Blogs";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Portfolio/>
            <Blogs/>
            <Footer/>
        </div>
    );
}

export default App;

