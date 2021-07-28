

// import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useSignUp from "../hooks/useSignup";
import { ErrorMessage } from '@hookform/error-message';
import '../styles/Signup.css'


const Signup = () => {
    const { register, errors, handleSubmit } = useForm();
    const { data, error, isLoading, signUp } = useSignUp();
    console.log('data', data)
    console.log('error', error)
    console.log('isLoading', isLoading)
   
    console.log('=============')

    const onSubmit = data => {
        console.log(data);
        signUp(data)
    }

    return (
        <div className="creationCompte">
                <fieldset>
                     <form id="formSignin" className="formSignin" name="form" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="creationCompt">Créer un compte</h2>
                        <hr></hr>
                        <div className="formNom">
                            <label htmlFor="lastname">Nom </label>
                            <input
                                type="text"  id="lastname"  required  placeholder="Votre Nnom"
                                {...register("lastname")} 
                            />
                           
                        </div>

                        <div className="formPrenom">
                            <label htmlFor="firstname">Prenom </label>
                            <input  type="text"  id="firstname"  required  placeholder="Votre Nnom"
                                    {...register("firstname")}/>
                        </div> 

                        <div className="formMail">
                            <label htmlFor="mail">E-mail </label>
                            <input type="email"  id="mail"  required  placeholder="mail@serveur.com"
                                   {...register("mail")}
                            />
                        </div>

                        <div className="formPassword">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password"  id="password"  name="password"  required  placeholder="Enter Password"
                                   {...register("password") }
                                //    {...register("password", { minLength: 8, validate: [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/] }) }
                            />
                            {/* {errors.password  && "must be 8 chars"} */}
                        </div>

                        <div className="formConfirmPassword">
                            <label htmlFor="confirmPassword">Confirmation mot de passe</label>
                            <input type="password"  id="confirmPassword"  name="confirmPassword"  required  placeholder="Enter Password"
                                   {...register("confirmPassword")}
                            /><br /><br />
                        </div>

                        <div className="clearfix">
                            <button type="submit" className="signupbtn" disabled={isLoading}>
                                {isLoading
                                    ? 'LOADING'
                                    : 'Se Connecter'
                                }

                            </button>
                        </div>
                    </form> 
                    <p>Vous avez déjà un compte? <br />
                    <a href="./Login">Log in here</a>
                    </p>
                </fieldset>
        </div>  

    )
       
}

export default Signup;