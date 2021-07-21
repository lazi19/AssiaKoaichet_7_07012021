function Signup() {
    return (
 <div class="creationCompte" >
                <fieldset>
                    <form id="formSignin" className="formSignin" name="form">
                        <h2 class="creationCompt">Créer un compte</h2>
                        <hr></hr>
                        <div className="formNom">
                            <label for="nom">Nom </label>
                            <input  type="text"  id="nom"  name="nom"  value=""  required  placeholder="Votre Nnom"> </input>
                        </div> 

                        <div className="formMail">
                            <label for="mail">E-mail </label>
                            <input type="email"  id="mail"  name="mail"  required  placeholder="mail@serveur.com"/>
                        </div>

                        <div className="formPassword">
                            <label for="psw">Mot de passe</label>
                            <input type="password"  id="psw"  name="psw"  required  placeholder="Enter Password "/><br /><br />
                        </div>

                        <div className="formPassword">
                            <label for="psw-repeat">Confirmer le mot de passe </label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" required /> 
                        </div>

                        <div className="clearfix">
                            <button type="submit" class="signupbtn">Se connecter</button>
                        </div>
                    </form> 
                
                </fieldset>
        </div>  

    )
       
}

export default Signup;
