import {Component, Method, Prop, State} from "@stencil/core";
import {formation} from "../../global/formations";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-formation-add",
  styleUrl: "spi-formation.scss",
  shadow:true
})




export class SpiFormationAdd {


  @State() formation:formation=null;
  @State() codeFormation: string;
  @State() debutAccreditation:Date;
  @State() diplome: string;
  @State() doubleDiplome: string;
  @State() finAccreditation: Date;
  @State() n0Annee:number;
  @State() nomFormation: string;
  @State() titre:string="ajouter une formation";
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @State() method:string="add";
  @Method()

  componentWillLoad() {
    let id=this.match.params.id;

    if(id){
       this.titre="modifier une formation";
       this.method="edit";
      return fetch('https://dosispi.cleverapps.io/formations/'+id)
        .then(response => response.json())
        .then(data => {
          this.formation = data;
          console.log(document.querySelector("#select"))
            //.value=this.formation.doubleDiplome;
        })
    }
  }

  handleChangeNF(event){
    this.nomFormation=event.target.value;
  }
  handleChangeCF(event){
    this.codeFormation=event.target.value;
  }
  handleChangeD(event){
    this.diplome=event.target.value;
  }
  handleChangeDD(event){
    this.doubleDiplome=event.target.value;
    console.log(this.doubleDiplome)
  }
  handleChangeDDA(event){
    this.debutAccreditation=event.target.value;
  }
  handleChangeDFA(event){
    this.finAccreditation=event.target.value;
  }
  handleChangeNA(event){
    this.n0Annee=event.target.value;
  }


  vider(){
    return this.history.replace("/formations");
  }

  submitter(){
      let Datapost ={
        codeFormation:this.codeFormation,
        debutAccreditation:this.debutAccreditation,
        nomFormation:this.nomFormation,
        doubleDiplome:this.doubleDiplome,
        n0Annee:this.n0Annee,
        finAccreditation:this.finAccreditation,
        diplome:this.diplome
    };



    let url="https://dosispi.cleverapps.io/formations";
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
      codeFormation:this.codeFormation,
      debutAccreditation:this.debutAccreditation,
      nomFormation:this.nomFormation,
      doubleDiplome:this.doubleDiplome,
      n0Annee:this.n0Annee,
      finAccreditation:this.finAccreditation,
      diplome:this.diplome
    };

    let url="https://dosispi.cleverapps.io/formations";
    return fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(Datapost), // body data type must match "Content-Type" header
    })
      .then(response =>
        response.json()

      );
  };


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
        <div class="columns">
             <div class="column is-one-fifth"/>
             <div class="column is-one-third">
               <div class="field">
                 <label class="label">Nom de Formation</label>
                 <div class="control">
                   <input class="input" onInput={(event) => this.handleChangeNF(event)}
                          type="text" placeholder="Nom de Formation"/>
                 </div>
               </div>
             </div>


          <div class="column is-one-third">
            <div class="field">
              <label class="label">Code de Formation</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeCF(event)}

                 type="text" placeholder="Code de Formation"/>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-fifth"/>
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Diplome</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeD(event)} type="text"
                        placeholder="Diplome"/>
              </div>
            </div>
          </div>


            <div class="column is-one-third">
              <div class="field">
                <label class="label">Numero Anneee</label>
                <div class="control">
                  <input class="input" onInput={(event) => this.handleChangeNA(event)}
                         type="number" placeholder="Date fin d'accreditation"/>
                </div>
              </div>
            </div>


        </div>

        <div class="columns">
          <div class="column is-one-fifth"/>
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Date debut d'accreditation</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeDDA(event)}
                      type="date" placeholder="Date debut d'accreditation"/>
              </div>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="field">
              <label class="label">Date fin d'accreditation</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeDFA(event)}
                       type="date" placeholder="numero annnee"/>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-fifth"/>
        <div class="column is-one-third">
          <div class="field is-grouped">
            <label class="label">Double Diplome</label> &nbsp;&nbsp;
              <div class="select is-primary">
              <select   onInput={(event) => this.handleChangeDD(event)}>
                <option value="O">Oui</option>
                <option value="N">No</option>
              </select>
            </div>
          </div>

        </div>

            <div class="column is-one-half"></div>
          <div class="column is-one-third">

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link"  type="submit" onClick={()=>this.send()}>Submit</button>
              </div>
              <div class="control">
                <stencil-route-link class="button is-text" url="/formations">Cancel</stencil-route-link>
              </div>
            </div>
          </div>
            <div class="column is-one-third"></div>
        </div>
      </div>



    )
  }
}
