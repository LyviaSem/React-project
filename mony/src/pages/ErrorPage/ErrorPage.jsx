import { useRouteError } from "react-router-dom";
import mrMonopoly from '../../img/mr-monop-prison.png';
import './ErrorPage.css';
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    const {status, statusText, message} = useRouteError();
    return(
        <section>
            <h2>Oups Une erreur {status} s’est produite… <NavLink to="/"><img className="error" alt=""/>cliquez ici</NavLink> pour sortir de prison</h2>
            <img className="mr-monop" src={mrMonopoly} alt=""/>
            {/* <p>{statusText || message}</p> */}
        </section>
    )
}

export default ErrorPage;