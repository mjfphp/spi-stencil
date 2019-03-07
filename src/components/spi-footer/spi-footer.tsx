import { Component } from "@stencil/core";

@Component({
  tag: "spi-footer",
  styleUrl: "spi-footer.scss"
})
export class SpiHeader {




  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>SPI-ADM</strong> by <a href="https://github.com/mjfphp">JAMAI Mohamed</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>
          </p>
        </div>
      </footer>
    );
  }
}
