import {Component, Method, Prop, State} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";
//mport {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-deletef",
  styleUrl: "spi-deleteF.scss",
  shadow:true
})




export class SpiDeletef {

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @State()  id:string;
  @Method()
  delete(){
    this.id=this.match.params.id;
    let url="https://dosispi.cleverapps.io/formations/"+this.id;
    return fetch(url, {
      method: "DELETE" // *GET, POST, PUT, DELETE, etc.
    })
  }

  vider(){
    return this.history.replace("/formations");
  }

  supprimer(){
    this.delete();
    this.vider();
  }

  render() {
    return (
      <div>
       <br/>
            <center>
              <strong class="tag is-black is-large is-rounded"><span class="ajj">Confirmation de suppression</span></strong>
            </center>
             <br/>
        <center> <p> Voulez-vous vraiment supprimer cette formation ? </p> </center>
             <br/>
        <div class="columns">
          <div class="column is-one-third"/>
          <div class="column is-one-third">
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-danger"  type="submit" onClick={()=>this.supprimer()}>Supprimer</button>
              </div>
              <div class="control">
                <stencil-route-link class="button is-text" url="/formations">Cancel</stencil-route-link>
              </div>
            </div>
          </div>
        </div>
     </div>
    );
  }
}
