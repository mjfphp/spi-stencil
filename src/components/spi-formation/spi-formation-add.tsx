import {Component, Method, State} from "@stencil/core";
import {formation} from "../../global/formations";

@Component({
  tag: "spi-formation-add",
  styleUrl: "spi-formation.scss",
  shadow:true
})




export class SpiFormationAdd {

  @State() nomF:string;
  @State() formation:formation=null;
  @Method()

  handleChangeNF(event){
    this.nomF=event.target.value;
    console.log(this.nomF)
  }
  handleChangeCF(event){
    this.formation.diplome=event.target.value;
  }

  handleChangeD(event){
    this.formation.diplome=event.target.value;
  }

  handleChangeDD(event){
    this.formation.doubleDiplome=event.target.value;
  }

  handleChangeDDA(event){
    this.formation.debutAccreditation=event.target.value;
  }

  handleChangeDFA(event){
    this.formation.finAccreditation=event.target.value;
  }

  handleChangeNA(event){
    this.formation.n0Annee=event.target.value;
  }

  render() {
    return(
      <div>
        <br/>
        <center><strong class="tag is-black  is-large">Ajouter une foramtion</strong> &nbsp;
        </center>
        <br/>
        <div class="columns">
             <div class="column is-one-third"/>
             <div class="column is-one-third">
               <div class="field">
                 <label class="label">Nom de Formation</label>
                 <div class="control">
                   <input class="input" onInput={(event) => this.handleChangeNF(event)} type="text" placeholder="Nom de Formation"/>
                 </div>
               </div>
             </div>
        </div>

        <div class="columns">
          <div class="column is-one-third"/>
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Code de Formation</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeCF(event)} type="text" placeholder="Code de Formation"/>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third"/>
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Diplome</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeD(event)} type="text" placeholder="Diplome"/>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third"/>
          <div class="column is-one-third">
            <div class="field">
              <strong>Double Diplome</strong> &nbsp;&nbsp;

                <label class="radio">
                  <input type="radio" name="question" onInput={(event) => this.handleChangeDD(event)} value="O"/>
                  &nbsp;  Yes
                </label>
                <label class="radio">
                  <input type="radio" name="question" onInput={(event) => this.handleChangeDD(event)} value="N"/>
                    &nbsp; No
                </label>

            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third"/>
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Date debut d'accreditation</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeDDA(event)} type="date" placeholder="Date debut d'accreditation"/>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third"/>
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Date fin d'accreditation</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeDFA(event)} type="text" placeholder="numero annnee"/>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third"/>
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Numero Anneee</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeNA(event)} type="number" placeholder="Date fin d'accreditation"/>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third"/>
          <div class="column is-one-third">
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <stencil-route-link class="button is-text" url="/formations">Cancel</stencil-route-link>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
