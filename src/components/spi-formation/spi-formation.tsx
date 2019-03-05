import {Component, Prop, State} from "@stencil/core";
import {formation} from "../../global/formations";

@Component({
  tag: "spi-formation",
  styleUrl: "spi-formation.scss",
  shadow:true
})
export class SpiFormation {

  @Prop() formation:formation;
  @State()  dd:string;

  render() {

    if(this.formation.doubleDiplome=="0")
    {
      this.dd="Oui";
    }
    else this.dd="Non";

    return (

         <div class="is-one-half">
        <nav class="panel">
          <br/>
      <p class="panel-heading">
        {this.formation.codeFormation}
      </p>
    <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
          <strong>Nom : </strong>  &nbsp;{this.formation.nomFormation}
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
            <button class="button is-danger is-rounded  is-medium">
              <span>delete</span>
            </button>
             &nbsp;
            <buttom class="button is-primary is-rounded is-medium">
              <span>Edit</span>

            </buttom>
      </a>
  </nav>
       </div>

    );
  }
}
