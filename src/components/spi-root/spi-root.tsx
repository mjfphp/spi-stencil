import { Component } from "@stencil/core";
//mport {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/profs" component="spi-profs" exact={true} />
              <stencil-route url="/profsE/:id" component="spi-prof-add" exact={true} />
              <stencil-route url="/profsD/:id" component="spi-deletep" exact={true} />
              <stencil-route url="/profs/:id" component="spi-prof" exact={true} />
              <stencil-route url="/formations" component="spi-formations" exact={true} />
              <stencil-route url="/addFormation" component="spi-formation-add" exact={true} />
              <stencil-route url="/addProf" component="spi-prof-add" exact={true} />
              <stencil-route url="/editFormation/:id" component="spi-formation-add" exact={true} />
              <stencil-route url="/deleteF/:id" component="spi-deletef" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
         <br/>

      </div>
    );
  }
}
