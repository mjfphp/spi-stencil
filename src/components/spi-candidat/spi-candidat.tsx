import {Component, Method, Prop, State} from "@stencil/core";
import {MatchResults} from "@stencil/router";
import {candidat} from "../../global/candidat";


@Component({
  tag: "spi-candidat",
  styleUrl: "spi-candidat.scss"
})
export class SpiFormation {

  @State() prof:candidat;
  @Prop() match: MatchResults;
  @Method()
  componentWillLoad() {
    let id=this.match.params.id;
    return fetch('https://dosispi.cleverapps.io/candidats/'+id)
      .then(response => response.json())
      .then(data => {
        this.prof= data;
      })
  }

  render() {



    return (
      <div>
        <br/>
        <section class="hero is-info">
          <div class="hero-body">
            <div class="container">
              <h1 class="title colour">
                <i class="fas fa-male"></i> &nbsp;  {this.prof.nom}  {this.prof.prenom}
              </h1>
              <h2 class="subtitle">
                <i class="fas fa-user-graduate"></i> &nbsp; Candidat
              </h2>
            </div>
            <br/>
            <center>
            <div class="columns">
              <div class="column is-one-third"></div>
              <span>
                <i class="fas fa-at"></i>
                &nbsp;
                <span>
                 email perso :
                </span>
                <span class="colour">
                 &nbsp; {this.prof.email}
                </span>
              </span>
            </div>
              <br/>

              <div class="columns">
                <div class="column is-one-third"></div>
              <span>
               <i class="fas fa-mobile"></i>
                &nbsp;
                <span>
                 mobile :
                </span>
                <span class="colour">
                 &nbsp; {this.prof.mobile}
                </span>
              </span>
              </div>
              <br/>
              <div class="columns">
                <div class="column is-one-third"></div>
              <span>
               <i class="fas fa-phone-volume"></i>
                &nbsp;
                <span>
                 Telephone :
                </span>
                <span class="colour">
                 &nbsp; {this.prof.telephone}
                </span>
              </span>
              </div>
              <br/>
              <div class="columns">
                <div class="column is-one-third"></div>
                <span>
                <i class="fas fa-map-marked-alt"></i>
                  &nbsp;
                  <span>
                 Adresse :
                </span>
                <span class="colour">
                 &nbsp; {this.prof.adresse}
                </span>
              </span>
              </div>
              <br/>
              <div class="columns">
                <div class="column is-one-third"></div>
                <span>
                <i class="fas fa-city"></i>
                  &nbsp;
                  <span>
                 ville :
                </span>
                <span class="colour">
                 &nbsp; {this.prof.ville}
                </span>
              </span>
              </div>
              <br/>
              <div class="columns">
                <div class="column is-one-third"></div>
                <span>
               <i class="fas fa-sort-numeric-up"></i>
                  &nbsp;
                  <span>
                 Code Postal :
                </span>
                <span class="colour">
                 &nbsp; {this.prof.codePostal}
                </span>
              </span>
              </div>
              <br/>
              <div class="columns">
                <div class="column is-one-third"></div>
                <span>
               <i class="fas fa-flag"></i>
                  &nbsp;
                  <span>
                 pays :
                </span>
                <span class="colour">
                 &nbsp; {this.prof.nationalite}
                </span>
              </span>
              </div>
              <br/>
              <div class="columns">
                <div class="column is-one-third"></div>
                <span>
                <i class="fas fa-user-tag"></i>
                  &nbsp;
                  <span>
                 Type :
                </span>
                <span class="colour">
                 &nbsp; {this.prof.universiteOrigine}
                </span>
              </span>
              </div>
              <br/>
              <div class="columns">
                <div class="column is-one-third"></div>
                <stencil-route-link url="/candidats" class="button is-black is-rounded is-large ">
                  <span class="add">  <i class="fas fa-undo-alt"></i> &nbsp; &nbsp;retour </span>
                </stencil-route-link>
              </div>


            </center>
          </div>
        </section>
      </div>
    );
  }
}
