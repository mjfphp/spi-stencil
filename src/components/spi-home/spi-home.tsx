import { Component } from "@stencil/core";


@Component({
  tag: "spi-home",
  styleUrl: "spi-home.scss",
  shadow: true,
})
//  <h2 class="subtitle">Pour continuer veuillez-vous identifier.</h2>

export class SpiHome {

  render() {
    return (

      <div class="spi-home" id="spi-home">
        <div class="container is-large has-text-centered">
          <h1 class="title is-bold">Bienvenue sur l'interface du SPI !</h1>

        </div>
        <br/>

        <div class="columns">
          <div class="column is-one-third">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <center> <img src="/assets/image/formation.png" alt="Placeholder image" height="120" width="120"/> </center>
                    </figure>
                  </div>
                </div>

                <div class="content">
                  <center> <stencil-route-link url='/formations'>
                    <button class="button is-danger">
                      FORMATIONS
                      <i class="graduation-cap"></i>
                    </button>
                  </stencil-route-link>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <center> <img src="/assets/image/profs.png" alt="Placeholder image" height="120" width="120"/> </center>
                    </figure>
                  </div>
                </div>

                <div class="content">
                  <center> <stencil-route-link url='/profs'>
                    <button class="button is-danger">
                      ENSEIGNANTS
                      <i class="graduation-cap"></i>
                    </button>
                  </stencil-route-link>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
