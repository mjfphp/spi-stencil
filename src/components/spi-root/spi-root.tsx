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
              <stencil-route url="/formations" component="spi-formations" exact={true} />
              <stencil-route url="/addFormation" component="spi-formation-add" exact={true} />
              <stencil-route url="/DeleteFormation" component="spi-formation-add" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
