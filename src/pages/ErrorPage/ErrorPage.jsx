import { useRouteError } from "react-router-dom";
import mrMonopoly from '../../img/mr-monop-prison.png';
import './ErrorPage.css';
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    const { status, statusText, message } = useRouteError();

    return (
        <section>
            <p className="message-erreur">Oups ! Une erreur {status} s’est produite… <NavLink to="/"><img className="error" alt=""/>Cliquez ici</NavLink> pour sortir de prison</p>
            <img className="mr-monop" src={mrMonopoly} alt=""/>
            <br/>
            <p>{statusText || message}</p>
        </section>
    )
}

export default ErrorPage;