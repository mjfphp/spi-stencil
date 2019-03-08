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

  interface SpiCandidatAdd {
    'componentWillLoad': () => Promise<void>;
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface SpiCandidatAddAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface SpiCandidat {
    'componentWillLoad': () => Promise<void>;
    'match': MatchResults;
  }
  interface SpiCandidatAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface SpiCandidats {
    'match': MatchResults;
  }
  interface SpiCandidatsAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface SpiDeletef {
    'delete': () => Promise<Response>;
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface SpiDeletefAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface SpiFooter {}
  interface SpiFooterAttributes extends StencilHTMLAttributes {}

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

  interface SpiDeletep {
    'componentWillLoad': () => Promise<void>;
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface SpiDeletepAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface SpiProfAdd {
    'componentWillLoad': () => Promise<void>;
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface SpiProfAddAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface SpiProf {
    'componentWillLoad': () => Promise<void>;
    'match': MatchResults;
  }
  interface SpiProfAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface SpiProfs {
    'match': MatchResults;
  }
  interface SpiProfsAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface SpiRoot {}
  interface SpiRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SpiCandidatAdd': Components.SpiCandidatAdd;
    'SpiCandidat': Components.SpiCandidat;
    'SpiCandidats': Components.SpiCandidats;
    'SpiDeletef': Components.SpiDeletef;
    'SpiFooter': Components.SpiFooter;
    'SpiFormationAdd': Components.SpiFormationAdd;
    'SpiFormation': Components.SpiFormation;
    'SpiFormations': Components.SpiFormations;
    'SpiHeader': Components.SpiHeader;
    'SpiHome': Components.SpiHome;
    'SpiDeletep': Components.SpiDeletep;
    'SpiProfAdd': Components.SpiProfAdd;
    'SpiProf': Components.SpiProf;
    'SpiProfs': Components.SpiProfs;
    'SpiRoot': Components.SpiRoot;
  }

  interface StencilIntrinsicElements {
    'spi-candidat-add': Components.SpiCandidatAddAttributes;
    'spi-candidat': Components.SpiCandidatAttributes;
    'spi-candidats': Components.SpiCandidatsAttributes;
    'spi-deletef': Components.SpiDeletefAttributes;
    'spi-footer': Components.SpiFooterAttributes;
    'spi-formation-add': Components.SpiFormationAddAttributes;
    'spi-formation': Components.SpiFormationAttributes;
    'spi-formations': Components.SpiFormationsAttributes;
    'spi-header': Components.SpiHeaderAttributes;
    'spi-home': Components.SpiHomeAttributes;
    'spi-deletep': Components.SpiDeletepAttributes;
    'spi-prof-add': Components.SpiProfAddAttributes;
    'spi-prof': Components.SpiProfAttributes;
    'spi-profs': Components.SpiProfsAttributes;
    'spi-root': Components.SpiRootAttributes;
  }


  interface HTMLSpiCandidatAddElement extends Components.SpiCandidatAdd, HTMLStencilElement {}
  var HTMLSpiCandidatAddElement: {
    prototype: HTMLSpiCandidatAddElement;
    new (): HTMLSpiCandidatAddElement;
  };

  interface HTMLSpiCandidatElement extends Components.SpiCandidat, HTMLStencilElement {}
  var HTMLSpiCandidatElement: {
    prototype: HTMLSpiCandidatElement;
    new (): HTMLSpiCandidatElement;
  };

  interface HTMLSpiCandidatsElement extends Components.SpiCandidats, HTMLStencilElement {}
  var HTMLSpiCandidatsElement: {
    prototype: HTMLSpiCandidatsElement;
    new (): HTMLSpiCandidatsElement;
  };

  interface HTMLSpiDeletefElement extends Components.SpiDeletef, HTMLStencilElement {}
  var HTMLSpiDeletefElement: {
    prototype: HTMLSpiDeletefElement;
    new (): HTMLSpiDeletefElement;
  };

  interface HTMLSpiFooterElement extends Components.SpiFooter, HTMLStencilElement {}
  var HTMLSpiFooterElement: {
    prototype: HTMLSpiFooterElement;
    new (): HTMLSpiFooterElement;
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

  interface HTMLSpiDeletepElement extends Components.SpiDeletep, HTMLStencilElement {}
  var HTMLSpiDeletepElement: {
    prototype: HTMLSpiDeletepElement;
    new (): HTMLSpiDeletepElement;
  };

  interface HTMLSpiProfAddElement extends Components.SpiProfAdd, HTMLStencilElement {}
  var HTMLSpiProfAddElement: {
    prototype: HTMLSpiProfAddElement;
    new (): HTMLSpiProfAddElement;
  };

  interface HTMLSpiProfElement extends Components.SpiProf, HTMLStencilElement {}
  var HTMLSpiProfElement: {
    prototype: HTMLSpiProfElement;
    new (): HTMLSpiProfElement;
  };

  interface HTMLSpiProfsElement extends Components.SpiProfs, HTMLStencilElement {}
  var HTMLSpiProfsElement: {
    prototype: HTMLSpiProfsElement;
    new (): HTMLSpiProfsElement;
  };

  interface HTMLSpiRootElement extends Components.SpiRoot, HTMLStencilElement {}
  var HTMLSpiRootElement: {
    prototype: HTMLSpiRootElement;
    new (): HTMLSpiRootElement;
  };

  interface HTMLElementTagNameMap {
    'spi-candidat-add': HTMLSpiCandidatAddElement
    'spi-candidat': HTMLSpiCandidatElement
    'spi-candidats': HTMLSpiCandidatsElement
    'spi-deletef': HTMLSpiDeletefElement
    'spi-footer': HTMLSpiFooterElement
    'spi-formation-add': HTMLSpiFormationAddElement
    'spi-formation': HTMLSpiFormationElement
    'spi-formations': HTMLSpiFormationsElement
    'spi-header': HTMLSpiHeaderElement
    'spi-home': HTMLSpiHomeElement
    'spi-deletep': HTMLSpiDeletepElement
    'spi-prof-add': HTMLSpiProfAddElement
    'spi-prof': HTMLSpiProfElement
    'spi-profs': HTMLSpiProfsElement
    'spi-root': HTMLSpiRootElement
  }

  interface ElementTagNameMap {
    'spi-candidat-add': HTMLSpiCandidatAddElement;
    'spi-candidat': HTMLSpiCandidatElement;
    'spi-candidats': HTMLSpiCandidatsElement;
    'spi-deletef': HTMLSpiDeletefElement;
    'spi-footer': HTMLSpiFooterElement;
    'spi-formation-add': HTMLSpiFormationAddElement;
    'spi-formation': HTMLSpiFormationElement;
    'spi-formations': HTMLSpiFormationsElement;
    'spi-header': HTMLSpiHeaderElement;
    'spi-home': HTMLSpiHomeElement;
    'spi-deletep': HTMLSpiDeletepElement;
    'spi-prof-add': HTMLSpiProfAddElement;
    'spi-prof': HTMLSpiProfElement;
    'spi-profs': HTMLSpiProfsElement;
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
