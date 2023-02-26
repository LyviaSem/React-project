import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import Logo from '../../img/logo_mony.svg'
import './Paiement.css'
import MrMonopoly from '../../img/mr-monopoly.png'
import Button from "../../Components/Btn/BtnPayer"

const wait = function (duration = 1000) {
    return new Promise((resolve) =>
        window.setTimeout(resolve, duration))
}

const Paiement = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { cart, setCart } = useContext(StoreContext);
    const navigate = useNavigate();
    const params = useParams();


    const onSubmit = async () => {
        await wait(1000);
        setCart([]);
        navigate("/paiementaccepte", { state: { cart } });
    };

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/");
        }
    }, [])


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="paiement">
                <img src={Logo} alt="logo mony" className="logo" />
                <h2>Vous devez {params.total}€ à la banque</h2>
                <div className="infos-carte">
                    <div className="infos-paiement">
                        <div className="num-carte">
                            <label htmlFor="num carte">Numéro de carte</label>
                            <input type="text" placeholder='4242424242424242' pattern="^4[0-9]{12}(?:[0-9]{3})?$" name="Numéro de carte" {...register("numero",
                                {
                                    required: 'Vous devez rentrer votre numéro de carte',
                                    maxLength: { value: 16, message: 'Vous devez rentrer 16 chiffres' },
                                    minLength: { value: 16, message: 'Vous devez rentrer 16 chiffres' }
                                })} />
                            {errors.numero && <span className="error-message">{errors.numero.message}</span>}
                        </div>

                        <div className="date-carte">
                            <label htmlFor="date"> Date d'expiration</label>
                            <input type="text" placeholder='06/23' pattern="^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$" name="date" {...register("date", { required: 'Vous devez rentrer la date d\'expiration' })} />
                            {errors.date && <span className="error-message">{errors.date.message}</span>}
                        </div>

                        <div className="code-carte">
                            <label htmlFor="code"> Code de vérification</label>
                            <input type="text" placeholder="246" pattern='^\d{3}$' name="code" {...register("code", {
                                required: 'Vous devez rentrer votre code de vérification',
                                maxLength: { value: 3, message: 'Vous devez rentrer 3 chiffres' },
                                minLength: { value: 3, message: 'Vous devez rentrer 3 chiffres' }
                            })} />
                            {errors.code && <span className="error-message">{errors.code.message}</span>}
                        </div>
                        <Button />
                    </div>
                    <div className="mr-monopoly">
                        <img src={MrMonopoly} alt="mr-monopoly" />
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Paiement;