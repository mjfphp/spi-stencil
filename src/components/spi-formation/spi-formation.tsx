import {Component, Method, Prop, State} from "@stencil/core";
import {formation} from "../../global/formations";

@Component({
  tag: "spi-formation",
  styleUrl: "spi-formation.scss",
  shadow:true
})
export class SpiFormation {

  @Prop() formation:formation;
  @State()  dd:string;
  @Method()
  /*supprimer(el)
  {
     console.log("#"+el);
     let btn=document.getElementById("#"+el);
      console.log(btn);
      if(btn!=null){
        btn.style.display="none";
      }
  }*/
  render() {

    if(this.formation.doubleDiplome=="0")
    {
      this.dd="Oui";
    }
    else this.dd="Non";

    return (
      <div>
         <div class="is-one-half">
        <nav class="panel">
          <br/>

      <p class="panel-heading">
        <strong> <center> {this.formation.nomFormation} </center> </strong>
      </p>
    <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
          <strong>Code de Formation : </strong>  &nbsp;{this.formation.codeFormation}
    </a>
    <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
       <strong> Debut Accreditation : </strong> &nbsp; {this.formation.debutAccreditation}
    </a>
    <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
      <strong>Fin Accreditation</strong> &nbsp; {this.formation.finAccreditation}
    </a>
    <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
      <strong>Numero Annee:</strong>  &nbsp; {this.formation.n0Annee}
    </a>
    <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
       <strong>Double Diplome :</strong> &nbsp; {this.dd}
    </a>
    <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
      <strong>Diplome : </strong> &nbsp; {this.formation.diplome}
    </a>
      <a class="panel-block">

    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>

        <buttom class="button is-primary ">
          <span>Modifier</span>
          <span><i class="fas fa-trash-alt"></i></span>
        </buttom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="button is-danger   "  id={this.formation.codeFormation}  >
             Suprrimer
              <span class="icon has-text-danger">
              <i class="fas fa-ban"></i>
               </span>
            </button>
             &nbsp;
      </a>
  </nav>
         </div>

      </div>
    );
  }
}
