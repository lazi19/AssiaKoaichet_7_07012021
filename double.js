import React, { Component } from 'react'
// import React from 'react';
import '../styles/Signup.css'


export default class double extends Component {
    state = {
        lastname: '',
        firstname: '',
        mail: '',
        password: '',
        items: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
        // console.log(this.state.firstname);
    }

    onSubmit = (event) => {
        event.preventDfault();
         this.setState({
            lastname: '',
            firstname: '',
            mail: '',
            password: '',
            items: [...this.state.items, {lastname: this.state.lastname, firstname: this.state.firstname, mail: this.state.mail, password: this.state.password }]
         });  
    }

    renderCard = ( ) => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <div lassName="card-body" >
                       <h2>Bonjour {item.lastname} { item.firstname}</h2>
                       <hr />
                       
                    </div>
                </div>
            )
        })
    }


    render() {
        return (
           
            <div class="creationCompte" >
                <fieldset>
                    <form id="formSignin" className="formSignin" name="form" onSubmit={this.onSubmit} >
                        <h2 class="creationCompt">Créer un compte</h2>
                        <hr></hr>
                        <div className="formNom">
                            <label for="lastname">Nom </label>
                            <input  type="text"  id="lastname"  name="lastname"  required  placeholder="Votre Nnom"
                            onChange={this.onChange}
                            value={this.state.lastname}
                            />
                        </div>

                        <div className="formPrenom">
                            <label for="firstname">Prenom </label>
                            <input  type="text"  id="firstname"  name="firstname"  required  placeholder="Votre Nnom"
                             onChange={this.onChange}
                             value={this.state.firstname}
                             />
                        </div> 

                        <div className="formMail">
                            <label for="mail">E-mail </label>
                            <input type="email"  id="mail"  name="mail"  required  placeholder="mail@serveur.com"
                            onChange={this.onChange}
                            value={this.state.mail}
                            />
                        </div>

                        <div className="formPassword">
                            <label for="password">Mot de passe</label>
                            <input type="password"  id="password"  name="password"  required  placeholder="Enter Password "
                             onChange={this.onChange}
                             value={this.state.password}
                            /><br /><br />
                        </div>

                       
                        <div className="clearfix">
                            <button type="submit" class="signupbtn">Se connecter</button>
                        </div>
                    </form> 
                
                </fieldset>
                {this.renderCard()}
            </div>  

            
        )
    }
}