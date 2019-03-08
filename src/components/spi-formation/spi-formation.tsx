import {Component, Method, Prop, State} from "@stencil/core";
import {formation} from "../../global/formations";

@Component({
  tag: "spi-formation",
  styleUrl: "spi-formation.scss"
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
      <div class="columns">
        <div class="column is-one-fourth"></div>
         <div class="column is-three-fifths">
        <nav class="panel">
          <br/>

      <p class="panel-heading">
        <strong> <center> <i class="fas fa-signature"></i> &nbsp; {this.formation.nomFormation} </center> </strong>
      </p>
    <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
          <strong>Code de Formation : </strong>  &nbsp;{this.formation.codeFormation}
    </a>
    <a class="panel-block">

     <i class="fas fa-table"></i> &nbsp;

       <strong> Debut Accreditation : </strong> &nbsp; {this.formation.debutAccreditation}
    </a>
    <a class="panel-block">
      <i class="fas fa-table"></i> &nbsp;

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
      <i class="fas fa-certificate"></i>
    </span>
       <strong>Double Diplome :</strong> &nbsp; {this.dd}
    </a>
    <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-certificate"></i>
    </span>
      <strong>Diplome : </strong> &nbsp; {this.formation.diplome}
    </a>
      <a class="panel-block">



        <stencil-route-link url={"/editFormation/"+this.formation.codeFormation} >
               <button class="button is-primary ">
                 Modifier &nbsp;  <i class="fas fa-edit"></i>
               </button>
        </stencil-route-link>
        &nbsp;&nbsp;&nbsp;
            <stencil-route-link url={"/deleteF/"+this.formation.codeFormation} >
               <button class="button is-danger ">
                Suprrimer   &nbsp;  <span><i class="fas fa-trash-alt"></i></span>
               </button>
            </stencil-route-link>
             &nbsp;
      </a>
  </nav>
         </div>
        <div class="column is-one-fourth"></div>
      </div>
    );
  }
}
