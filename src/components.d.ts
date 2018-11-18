/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';


export namespace Components {

  interface AppHeader {}
  interface AppHeaderAttributes extends StencilHTMLAttributes {}

  interface AppRepositories {}
  interface AppRepositoriesAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'user': any;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'user'?: any;
  }

  interface AppUsers {}
  interface AppUsersAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppHeader': Components.AppHeader;
    'AppRepositories': Components.AppRepositories;
    'AppRoot': Components.AppRoot;
    'AppProfile': Components.AppProfile;
    'AppUsers': Components.AppUsers;
  }

  interface StencilIntrinsicElements {
    'app-header': Components.AppHeaderAttributes;
    'app-repositories': Components.AppRepositoriesAttributes;
    'app-root': Components.AppRootAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-users': Components.AppUsersAttributes;
  }


  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppRepositoriesElement extends Components.AppRepositories, HTMLStencilElement {}
  var HTMLAppRepositoriesElement: {
    prototype: HTMLAppRepositoriesElement;
    new (): HTMLAppRepositoriesElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppUsersElement extends Components.AppUsers, HTMLStencilElement {}
  var HTMLAppUsersElement: {
    prototype: HTMLAppUsersElement;
    new (): HTMLAppUsersElement;
  };

  interface HTMLElementTagNameMap {
    'app-header': HTMLAppHeaderElement
    'app-repositories': HTMLAppRepositoriesElement
    'app-root': HTMLAppRootElement
    'app-profile': HTMLAppProfileElement
    'app-users': HTMLAppUsersElement
  }

  interface ElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
    'app-repositories': HTMLAppRepositoriesElement;
    'app-root': HTMLAppRootElement;
    'app-profile': HTMLAppProfileElement;
    'app-users': HTMLAppUsersElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}