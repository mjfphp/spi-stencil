import {Component, Prop, State} from "@stencil/core";
import { MatchResults } from '@stencil/router';
import {formation} from "../../global/formations";


@Component({
  tag: "spi-formations",
  styleUrl: "spi-formations.scss"
})
export class SpiFormations {

  @State() formations:formation[] = [];
  @Prop() match: MatchResults;


  componentWillLoad() {

    return fetch('https://dosispi.cleverapps.io/formations')
      .then(response => response.json())
      .then(data => {
        this.formations = data;
      })
  }

  render() {

    return (
      <div>
        <br/>

        <div class="columns">
          <div class="column is-one-fourth">
        <stencil-route-link url="/addFormation" class="button is-link is-rounded ">

          <span class="add"><i class="fas fa-plus"></i> Ajouter une formation </span>
        </stencil-route-link>
        </div>

        <div class="column is-one-fourth"></div><div class="column is-one-fourth"></div>
          <div class="column is-one-fourth">
            <stencil-route-link url="/" class="button is-danger is-rounded ">
              <span class="add">  <i class="fas fa-undo-alt"></i> retour </span>
            </stencil-route-link>
          </div>
        </div>

        <center><strong class="tag is-black is-dark is-large"> <i class="fas fa-list-ul"></i> &nbsp;&nbsp; La liste des formations</strong> &nbsp;
        </center>

         { this.formations.map((formation)=> {
          return (<spi-formation formation={formation}/>);
         })
         }
      </div>
    );
  }
}
