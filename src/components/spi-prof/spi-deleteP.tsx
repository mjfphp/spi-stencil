import {Component, Method, Prop, State} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";
import {prof} from "../../global/prof";
//mport {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-deletep",
  styleUrl: "spi-prof.scss",
  shadow:true
})




export class SpiDeletep {

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @State()  id:string;
  @State() prof:prof;
  @Method()
  componentWillLoad() {
   this.id=this.match.params.id;
    return fetch('https://api-dosispi.cleverapps.io/enseignants/'+this.id)
      .then(response => response.json())
      .then(data => {
        this.prof= data;
      })
  }
  delete(){
    this.id=this.match.params.id;
    let url="https://dosispi.cleverapps.io/enseignants/"+this.id;
    return fetch(url, {
      method: "DELETE" ,// *GET, POST, PUT, DELETE, etc.
      body:JSON.stringify(this.prof),
      headers: {"Content-Type": "application/json"}
    })
  }

  vider(){
    return this.history.replace("/profs");
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
        <center> <p> Voulez-vous vraiment supprimer cet enseignant ? </p> </center>
             <br/>
        <div class="columns">
          <div class="column is-one-third"/>
          <div class="column is-one-third">
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-danger"  type="submit" onClick={()=>this.supprimer()}>Supprimer</button>
              </div>
              <div class="control">
                <stencil-route-link class="button is-text" url="/profs">Cancel</stencil-route-link>
              </div>
            </div>
          </div>
        </div>
     </div>
    );
  }
}
