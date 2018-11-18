import { Component } from '@stencil/core';


@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {

  render() {
    return (
      <ion-header>
        <ion-toolbar>

          <ion-buttons slot='start'>
            <ion-icon id='ionic-icon' name='logo-github'></ion-icon>
          </ion-buttons>

          <div class='tabs-bar'>
            <stencil-route-link url='/' urlMatch={['/', '/repos']} activeClass='active' exact={true}>
              <ion-button
                class={{
                  'header-button': true,
                  'first-button': true,
                }}
                fill='clear'>
                Repos
                </ion-button>
            </stencil-route-link>

            <stencil-route-link url='/users' activeClass='active' >
              <ion-button
                class={{
                  'header-button': true,
                }}
                fill='clear'>
                Users
                </ion-button>
            </stencil-route-link>
          </div>
        </ion-toolbar>
      </ion-header>
    );
  }
}