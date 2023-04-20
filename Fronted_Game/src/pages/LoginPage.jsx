import NavbarNotLogin from "../components/Navbar";
import Footer from "../components/Footer";
import {UserContext} from "../context/UserContext"
function LoginPage(){

    return(
        <div className="LoginPage">
           <h1>Bienvenido a Game</h1>
           <NavbarNotLogin/>
           <form>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <MainPageButton  onClick={()=>alert(user)} content={"Iniciar Sesión"}/>
            </form>
            <Footer/>
        </div>
    )
}
export default LoginPage;