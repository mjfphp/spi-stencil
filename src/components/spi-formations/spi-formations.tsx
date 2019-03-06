import {Component, Prop, State} from "@stencil/core";
import { MatchResults } from '@stencil/router';
import {formation} from "../../global/formations";

@Component({
  tag: "spi-formations",
  styleUrl: "spi-formations.scss",
  shadow:true
})
export class SpiFormations {

  @State() formations:formation[] = [];
  @State() elts:any;
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
          <span class="add"> + Ajouter une formation</span>
        </stencil-route-link>
        </div>

        <div class="column is-one-fourth"></div><div class="column is-one-fourth"></div>
          <div class="column is-one-fourth">
            <stencil-route-link url="/" class="button is-danger is-rounded is-medium">
              <span class="add">  -- retour </span>
            </stencil-route-link>
          </div>
        </div>

        <center><strong class="tag is-black is-dark is-large">La liste des formations</strong> &nbsp;
        </center>

         { this.formations.map((formation)=> {
          return (<spi-formation formation={formation}/>);
         })
         }
      </div>
    );
  }
}
