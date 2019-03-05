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
        this.formations = data || [];
        console.log(data);
      })


  }

  render() {

    return (
      <div>
        <br/>
        <center><strong class="tag is-black is-dark is-large">La liste des formations</strong></center>
         { this.formations.map((formation)=> {
          return (<spi-formation formation={formation}/>);
         })
         }
      </div>
    );
  }
}
