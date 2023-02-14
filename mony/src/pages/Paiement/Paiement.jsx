import Logo from '../../img/logo_mony.svg'
import './Paiement.css'

<div>
<div class="paiement">
        <img src={Logo} alt="logo mony" class="logo">
        <h2>Vous devez 40€ à la banque</h2>
        <div class="infos-carte">
            <div class="infos-paiement">
                <div class="num-carte">
                    <label for="num carte">Numéro de carte</label>
                    <input type="number" value="Numéro de carte">
                </div>
                
                <div class="date-carte">
                    <label for="date"> Date d'expiration</label>
                    <input type="text">
                </div>
                
                <div class="code-carte">
                    <label for="code"> Code de vérification</label>
                    <input type="number" class="code-carte" value="Code de vérification">
                </div>
                <button class="btn-payer">Payer</button>
            </div>
            <div class="mr-monopoly">
                <img src="img/mr-monopoly.png" alt="">
            </div>
        </div>
    </div>
</div>