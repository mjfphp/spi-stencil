/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';
import {
  formation,
} from './global/formations';


export namespace Components {

  interface SpiDeletef {
    'delete': () => Promise<Response>;
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface SpiDeletefAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface SpiFormationAdd {
    'componentWillLoad': () => Promise<void>;
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface SpiFormationAddAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface SpiFormation {
    'formation': formation;
    'render': () => any;
  }
  interface SpiFormationAttributes extends StencilHTMLAttributes {
    'formation'?: formation;
  }

  interface SpiFormations {
    'match': MatchResults;
  }
  interface SpiFormationsAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface SpiHeader {}
  interface SpiHeaderAttributes extends StencilHTMLAttributes {}

  interface SpiHome {}
  interface SpiHomeAttributes extends StencilHTMLAttributes {}

  interface SpiRoot {}
  interface SpiRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SpiDeletef': Components.SpiDeletef;
    'SpiFormationAdd': Components.SpiFormationAdd;
    'SpiFormation': Components.SpiFormation;
    'SpiFormations': Components.SpiFormations;
    'SpiHeader': Components.SpiHeader;
    'SpiHome': Components.SpiHome;
    'SpiRoot': Components.SpiRoot;
  }

  interface StencilIntrinsicElements {
    'spi-deletef': Components.SpiDeletefAttributes;
    'spi-formation-add': Components.SpiFormationAddAttributes;
    'spi-formation': Components.SpiFormationAttributes;
    'spi-formations': Components.SpiFormationsAttributes;
    'spi-header': Components.SpiHeaderAttributes;
    'spi-home': Components.SpiHomeAttributes;
    'spi-root': Components.SpiRootAttributes;
  }


  interface HTMLSpiDeletefElement extends Components.SpiDeletef, HTMLStencilElement {}
  var HTMLSpiDeletefElement: {
    prototype: HTMLSpiDeletefElement;
    new (): HTMLSpiDeletefElement;
  };

  interface HTMLSpiFormationAddElement extends Components.SpiFormationAdd, HTMLStencilElement {}
  var HTMLSpiFormationAddElement: {
    prototype: HTMLSpiFormationAddElement;
    new (): HTMLSpiFormationAddElement;
  };

  interface HTMLSpiFormationElement extends Components.SpiFormation, HTMLStencilElement {}
  var HTMLSpiFormationElement: {
    prototype: HTMLSpiFormationElement;
    new (): HTMLSpiFormationElement;
  };

  interface HTMLSpiFormationsElement extends Components.SpiFormations, HTMLStencilElement {}
  var HTMLSpiFormationsElement: {
    prototype: HTMLSpiFormationsElement;
    new (): HTMLSpiFormationsElement;
  };

  interface HTMLSpiHeaderElement extends Components.SpiHeader, HTMLStencilElement {}
  var HTMLSpiHeaderElement: {
    prototype: HTMLSpiHeaderElement;
    new (): HTMLSpiHeaderElement;
  };

  interface HTMLSpiHomeElement extends Components.SpiHome, HTMLStencilElement {}
  var HTMLSpiHomeElement: {
    prototype: HTMLSpiHomeElement;
    new (): HTMLSpiHomeElement;
  };

  interface HTMLSpiRootElement extends Components.SpiRoot, HTMLStencilElement {}
  var HTMLSpiRootElement: {
    prototype: HTMLSpiRootElement;
    new (): HTMLSpiRootElement;
  };

  interface HTMLElementTagNameMap {
    'spi-deletef': HTMLSpiDeletefElement
    'spi-formation-add': HTMLSpiFormationAddElement
    'spi-formation': HTMLSpiFormationElement
    'spi-formations': HTMLSpiFormationsElement
    'spi-header': HTMLSpiHeaderElement
    'spi-home': HTMLSpiHomeElement
    'spi-root': HTMLSpiRootElement
  }

  interface ElementTagNameMap {
    'spi-deletef': HTMLSpiDeletefElement;
    'spi-formation-add': HTMLSpiFormationAddElement;
    'spi-formation': HTMLSpiFormationElement;
    'spi-formations': HTMLSpiFormationsElement;
    'spi-header': HTMLSpiHeaderElement;
    'spi-home': HTMLSpiHomeElement;
    'spi-root': HTMLSpiRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
