import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {status, statusText, message} = useRouteError();
    return(
        <main>
            <h2>Une erreur {status} est survenue.</h2>
            <p>{statusText || message}</p>
        </main>
    )
}

export default ErrorPage;