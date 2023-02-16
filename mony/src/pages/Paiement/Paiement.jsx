import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Img/logo_mony.svg'
import './Paiement.css'

const wait = function(duration = 1000){
    return new Promise((resolve) =>
    window.setTimeout(resolve, duration))
}

const Paiement = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    console.log(errors)

    const navigate = useNavigate();
    const onSubmit = async (data) =>{
        await wait(1000)
        navigate(`/panier`);
    }


    return(

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="paiement">
                    <img src={Logo} alt="logo mony" className="logo" />
                        <h2>Vous devez 40€ à la banque</h2>
                        <div className="infos-carte">
                            <div className="infos-paiement">
                                <div className="num-carte">
                                    <label htmlFor="num carte">Numéro de carte</label>
                                    <input type="number"  name="Numéro de carte" {...register("Numero", 
                                        {
                                            required: 'Vous devez rentrer votre numéro de carte',
                                            maxLength: {value: 16, message: 'Vous devez rentrer 16 chiffres'},
                                            minLength: {value: 16, message: 'Vous devez rentrer 16 chiffres'}
                                        })} />
                                    {errors.Numero && <span>{errors.Numero.message}</span>}
                                </div>
                                
                                <div className="date-carte">
                                    <label htmlFor="date"> Date d'expiration</label>
                                    <input type="text" name="date" {...register("date", {required: 'Vous devez rentrer la date d\'expiration'})}/>
                                    {errors.date && <span>{errors.date.message}</span>}
                                </div>
                                
                                <div className="code-carte">
                                    <label htmlFor="code"> Code de vérification</label>
                                    <input type="number" className="code-carte" name="code" {...register("code", {
                                            required: 'Vous devez rentrer votre code de Vérification',
                                            maxLength: {value: 3, message: 'Vous devez rentrer 3 chiffres'},
                                            minLength: {value: 3, message: 'Vous devez rentrer 3 chiffres'}
                                        })}/>
                                    {errors.code && <span>{errors.code.message}</span>}
                                </div>
                                <button className="btn-payer">Payer</button>
                            </div>
                            <div className="mr-monopoly">
                                <img src="img/mr-monopoly.png" alt="" />
                            </div>
                        </div>
                    
                </div>
            </form>
    )
}

export default Paiement;