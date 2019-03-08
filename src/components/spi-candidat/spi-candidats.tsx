import {Component, Prop, State} from "@stencil/core";
import { MatchResults } from '@stencil/router';

import {candidat} from "../../global/candidat";


@Component({
  tag: "spi-candidats",
  styleUrl: "spi-candidat.scss"
})
export class SpiCandidats {

  @State() candidats:candidat[] = [];
  @Prop() match: MatchResults;


  componentWillLoad() {

    return fetch('https://dosispi.cleverapps.io/candidats')
      .then(response => response.json())
      .then(data => {
        this.candidats = data;
      })
  }

  render() {

    return (
      <div>
        <br/>

        <div class="columns">
          <div class="column is-one-fourth">
        <stencil-route-link url="/candidatAdd" class="button is-link is-rounded ">

          <span class="add"><i class="fas fa-plus"></i> Ajouter un Candidat </span>
        </stencil-route-link>
        </div>

        <div class="column is-one-fourth"></div><div class="column is-one-fourth"></div>
          <div class="column is-one-fourth">
            <stencil-route-link url="/" class="button is-danger is-rounded ">
              <span class="add">  <i class="fas fa-undo-alt"></i> retour </span>
            </stencil-route-link>
          </div>
        </div>

        <center><strong class="tag is-black is-dark is-large"> <i class="fas fa-list-ul"></i> &nbsp;&nbsp; La liste des candidats</strong> &nbsp;

        </center>
        <br/>
        <br/>
        <br/>


          <div class="columns is-multiline">
         { this.candidats.map((prof)=> {return (
           <div class="column is-one-1">
             <div class="card">
               <header class="card-header">
                 <p class="card-header-title">
                   <i class="fas fa-user-graduate"></i> &nbsp; Candidat
                 </p>
                 <a href="#" class="card-header-icon" aria-label="more options">
                 </a>
               </header>
               <div class="card-content">
                 <div class="content">
                    <strong> <i class="fas fa-signature"></i> &nbsp; Nom : </strong> {prof.nom} <br/>
                     <strong> <i class="fas fa-signature"></i> &nbsp; Prenom : </strong> {prof.prenom} <br/>
                     <strong> <i class="fas fa-at"></i> &nbsp; Email :</strong> {prof.email} <br/>
                 </div>
               </div>
               <footer class="card-footer">
                 <br/>
                 &nbsp;
                 <span class="card-footer-item">
                      <stencil-route-link url={"/candidat/"+prof.noCandidat} >
                        <button class="button is-success"> <i class="fas fa-info"></i> &nbsp; Details </button>
                      </stencil-route-link>
                 </span>
                 <span class="card-footer-item">
                    <stencil-route-link url={"/candidatAdd/"+prof.noCandidat}>
                      <button class="button is-primary"> <i class="fas fa-edit"></i> &nbsp; modifier </button>
                    </stencil-route-link>
                 </span>
                 <span class="card-footer-item">
                    <stencil-route-link url={"/profsD/"+prof.noCandidat}>
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
