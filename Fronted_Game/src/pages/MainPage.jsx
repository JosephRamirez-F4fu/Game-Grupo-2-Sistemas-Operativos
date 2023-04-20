import MainPageButton from '../components/MainPageButton';
import Footer from '../components/Footer'
function MainPage(){
    return(
        <div className="MainPage Palet" >
            
            <div className="MainImage-Conteiner">
                <img className="MainImage" alt="MainImage"/>
            </div>
            
            <div className="MainPage-Join">
                <h1 className="MainPage-Title">Bienvenido a <br/>Game</h1>
                <div>
                    <MainPageButton content="Login"/>
                    <MainPageButton content="Registrarse"/>
                    <MainPageButton content="Entrar"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage;