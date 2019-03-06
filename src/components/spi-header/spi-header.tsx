import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {




  render() {
    return (
      <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <stencil-route-link class="navbar-item" url="/">
            <img src="/assets/icon/spi.png" width="120" height="40"/>
          </stencil-route-link>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <stencil-route-link url='/formations' class="navbar-item">
              Formations
            </stencil-route-link>
            <stencil-route-link class="navbar-item" url="/candidats">
              Candidats
            </stencil-route-link>


          </div>


        </div>
      </nav>

    );
  }
}
