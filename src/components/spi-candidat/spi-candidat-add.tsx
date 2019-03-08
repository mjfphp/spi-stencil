import {Component, Method, Prop, State} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";
import {candidat} from "../../global/candidat";

@Component({
  tag: "spi-candidat-add",
  styleUrl: "spi-candidat.scss",

})

export class SpiCandidatAddAdd {


  @State() prof:candidat=null;
  @State() noEnseignant: string;
  @State() adresse: string;
  @State() codePostal: string;
  @State() emailPerso: string;
  @State() emailUbo: string;
  @State() mobile: string;
  @State() nom: string;
  @State() pays:string;
  @State() prenom: string;
  @State() sexe: string;
  @State() telephone: string;
  @State() type: string;
  @State() ville: string;
  @State() titre:string="ajouter un candidat";
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @State() method:string="add";
  @Method()

  componentWillLoad() {
    let id=this.match.params.id;

    if(id){
       this.titre="modifier un candidat";
       this.method="edit";
      return fetch('https://dosispi.cleverapps.io/candidats/'+id)
        .then(response => response.json())
        .then(data => {
          this.prof = data;
          console.log(data)
            this.noEnseignant=this.prof.noCandidat;
           this.adresse=this.prof.adresse;
           this.codePostal=this.prof.codePostal;
            this.emailPerso=this.prof.email;
           this.mobile=this.prof.mobile;
            this.nom=this.prof.nom;
            this.pays=this.prof.nationalite;
            this.prenom=this.prof.prenom;
            this.sexe=this.prof.sexe;
            this.telephone=this.prof.telephone;
            this.type=this.prof.selectionNoOrdre;
            this.ville=this.prof.ville;

        })
    }
  }




  vider(){
    return this.history.replace("/candidats");
  }

  submitter(){
      let Datapost ={
        noEnseignant:this.noEnseignant,
        adresse:this.adresse,
        codePostal:this.codePostal,
        emailPerso:this.emailPerso,
        emailUbo:this.emailUbo,
        mobile:this.mobile,
        nom:this.nom,
        pays:this.pays,
        prenom:this.prenom,
        sexe:this.sexe,
        telephone:this.telephone,
        type:this.type,
        ville:this.ville
    };



    let url="https://dosispi.cleverapps.io/enseignants";
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(Datapost), // body data type must match "Content-Type" header
    })
      .then(response =>
        response.json()

      );
    };
  modifier(){

    let Datapost ={
      noEnseignant:this.noEnseignant,
      adresse:this.adresse,
      codePostal:this.codePostal,
      emailPerso:this.emailPerso,
      emailUbo:this.emailUbo,
      mobile:this.mobile,
      nom:this.nom,
      pays:this.pays,
      prenom:this.prenom,
      sexe:this.sexe,
      telephone:this.telephone,
      type:this.type,
      ville:this.ville
    };

    let url="https://dosispi.cleverapps.io/enseignants";
    return fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(Datapost), // body data type must match "Content-Type" header
    })
      .then(response =>
        response.json()

      );
  };

  handleChangePrenom(event){
    this.prenom=event.target.value;
  }
  handleChangeNom(event){
    this.nom=event.target.value;
  }
  handleChangeEmailUbo(event){
    this.emailUbo=event.target.value;
  }
  handleChangeNT(event){
    this.telephone=event.target.value;
  }
  handleChangeAE(event){
    this.adresse=event.target.value;
  }
  handleChangeCP(event){
    this.codePostal=event.target.value;
  }
  handleChangeV(event){
    this.ville=event.target.value;
  }
  handleChangeP(event){
    this.pays=event.target.value;
  }


  send(){

      console.log("send");
       if(this.method="add")
       {
         console.log("add")
         this.submitter();
       }
       else
       {
         console.log("modifier")
         this.modifier();
       }

      this.vider();

    }

  render() {
    return(
      <div>
        <br/>
        <center><strong class="tag is-danger is-large is-rounded"><span class="ajj">{this.titre}</span></strong> &nbsp;
        </center>
        <br/><br/>


            <div class="box">

              <div class="columns">
                <div class="column is-one-fifth"/>
                <div class="column is-one-third">
          <div class="field">
            <label class="label">Nom </label>
            <div class="control">
              <input class="input" type="text" placeholder="Entrer le nom de l'enseignant"
                     onInput={(event) => this.handleChangeNom(event)} value={this.nom}  />
            </div>
          </div>
                </div>
                <div class="column is-one-third">
          <div class="field">
            <label class="label">Prénom </label>
            <div class="control">
              <input class="input " type="text"
                     onInput={(event) => this.handleChangePrenom(event)} placeholder="Entrer le prenom de l'enseignant"
                     value={this.prenom}/>
            </div>
          </div>
                </div>
              </div>



              <div class="columns">
                <div class="column is-one-fifth"/>
                <div class="column is-one-third">
          <div class="field">
            <label class="label ">Email de Ubo </label>
            <div class="control has-icons-left">
              <input class="input" type="email"
                     onInput={(event) => this.handleChangeEmailUbo(event)} placeholder="Email "
                     value={this.emailUbo}/>
            </div>
          </div>
                </div>
                <div class="column is-one-third">
          <div class="field">
            <label class="label">Numéro de téléphone</label>
            <div class="control">
              <input class="input" type="text"
                     onInput={(event) => this.handleChangeNT(event)}
                     value={this.telephone} placeholder="Enter le numéro de téléphone"  />
            </div>
          </div>
                </div>
              </div>


        <div class="columns">
          <div class="column is-one-fifth"/>
          <div class="column is-one-third">

          <div class="field">
            <label class="label ">Adresse </label>
            <div class="control">
              <input class="input" type="text"
                     onInput={(event) => this.handleChangeAE(event)}
                     value={this.adresse} placeholder="Enter l'adresse'de candidat" name="adresse" />
            </div>
          </div>
          </div>
            <div class="column is-one-third">
            <div class="field">
            <label class="label ">Code postale </label>
            <div class="control">
              <input class="input" type="text"
                     value={this.codePostal}  onInput={(event) => this.handleChangeCP(event)} placeholder="Enter code postale" name="codePostal"  />
            </div>
          </div>
            </div>
          </div>


        <div class="columns">
          <div class="column is-one-fifth"/>
          <div class="column is-one-third">
          <div class="field">
            <label class="label">Ville </label>
            <div class="control">
              <input class="input" type="text"
                     value={this.ville}   onInput={(event) => this.handleChangeV(event)} placeholder="Enter code postale"   />
            </div>
          </div>
          </div>
          <div class="column is-one-third">
          <div class="field">
            <label class="label ">Pays </label>
            <div class="control">
              <input class="input" type="text"
                     value={this.pays}  onInput={(event) => this.handleChangeP(event)} placeholder="Enter le pays" name="codePostal"  />
            </div>
          </div>
          </div>
        </div>

           <center>
             <div class="columns">
               <div class="column is-one-third"/>
               <div class="column is-one-third">
          <div class="field is-grouped has-text-centered">
            <div class="control">
                <button type="submit" class="button is-success" onClick={()=>this.send()}>
                       <i class="fas fa-plus"></i> &nbsp; submit</button>
        </div>
            <div class="control">
              <stencil-route-link class="button is-text" url="/candidats">Cancel</stencil-route-link>
            </div>
      </div>
               </div>
             </div>
           </center>
        </div>
      </div>

    )
          }
          }
