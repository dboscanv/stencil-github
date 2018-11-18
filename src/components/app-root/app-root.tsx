import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <app-header></app-header>
        <ion-content padding>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-repositories" exact={true}></stencil-route>
              <stencil-route url="/users" component="app-users"></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </ion-content>
      </ion-app>
    )
  }
}
