import {Component, Prop, State} from "@stencil/core";
import { MatchResults } from '@stencil/router';

import {prof} from "../../global/prof";


@Component({
  tag: "spi-profs",
  styleUrl: "spi-prof.scss"
})
export class SpiFormations {

  @State() profs:prof[] = [];
  @Prop() match: MatchResults;


  componentWillLoad() {

    return fetch('https://dosispi.cleverapps.io/enseignants')
      .then(response => response.json())
      .then(data => {
        this.profs = data;
      })
  }

  render() {

    return (
      <div>
        <br/>

        <div class="columns">
          <div class="column is-one-fourth">
        <stencil-route-link url="/addProf" class="button is-link is-rounded ">

          <span class="add"><i class="fas fa-plus"></i> Ajouter un enseignant </span>
        </stencil-route-link>
        </div>

        <div class="column is-one-fourth"></div><div class="column is-one-fourth"></div>
          <div class="column is-one-fourth">
            <stencil-route-link url="/" class="button is-danger is-rounded ">
              <span class="add">  <i class="fas fa-undo-alt"></i> retour </span>
            </stencil-route-link>
          </div>
        </div>

        <center><strong class="tag is-black is-dark is-large"> <i class="fas fa-list-ul"></i> &nbsp;&nbsp; La liste des enseignants</strong> &nbsp;

        </center>
        <br/>
        <br/>


          <div class="columns is-multiline">
         { this.profs.map((prof)=> {return (
           <div class="column is-one-1">
             <div class="card">
               <header class="card-header">
                 <p class="card-header-title">
                   <i class="fas fa-chalkboard-teacher"></i> &nbsp; Enseignant
                 </p>
                 <a href="#" class="card-header-icon" aria-label="more options">
                 </a>
               </header>
               <div class="card-content">
                 <div class="content">
                    <strong> <i class="fas fa-signature"></i> &nbsp; Nom : </strong> {prof.nom} <br/>
                     <strong> <i class="fas fa-signature"></i> &nbsp; Prenom : </strong> {prof.prenom} <br/>
                     <strong> <i class="fas fa-at"></i> &nbsp; Email :</strong> {prof.emailPerso} <br/>
                 </div>
               </div>
               <footer class="card-footer">
                 <br/>
                 &nbsp;
                 <span class="card-footer-item">
                      <stencil-route-link url={"/profs/"+prof.noEnseignant} >
                        <button class="button is-success"> <i class="fas fa-info"></i> &nbsp; Details </button>
                      </stencil-route-link>
                 </span>
                 <span class="card-footer-item">
                    <stencil-route-link url={"/profsE/"+prof.noEnseignant}>
                      <button class="button is-primary"> <i class="fas fa-edit"></i> &nbsp; modifier </button>
                    </stencil-route-link>
                 </span>
                 <span class="card-footer-item">
                    <stencil-route-link url={"/profsD/"+prof.noEnseignant}>
                      <button class="button is-danger"> <i class="fas fa-trash-alt"></i> &nbsp; Supprimer </button>
                    </stencil-route-link>
                 </span>


                 <br/>
               </footer>
             </div>
           </div>
         );
         })
         }
          </div>
         </div>

    );
  }
}
