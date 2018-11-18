import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-users',
    styleUrl: 'app-users.scss'
})
export class AppUsers {

    @State() nickname: string;
    @State() user: any;
    loading: any;

    async presentLoading() {
        const loadingController = document.querySelector('ion-loading-controller') as any;
        await loadingController.componentOnReady();

        this.loading = await loadingController.create();
        return await this.loading.present();
    }

    async searchUser() {
        await this.presentLoading();
        fetch(`https://api.github.com/users/${this.nickname}`)
            .then(response => response.json())
            .then(response => {
                this.user = response;
                this.loading.dismiss();
            })
            .catch(error => console.log(error))
    }

    handleInput(event: any) {
        this.nickname = event.target.value;
    }

    canSearch() {
        this.nickname ? true : false;
    }

    render() {
        return (
            <div>
                <ion-loading-controller />
                <ion-item>
                    <ion-label position="floating">Nickname on GitHub</ion-label>
                    <ion-input color="dark" onInput={ev => this.handleInput(ev)} mode="md" type="search"></ion-input>
                    <ion-button slot="end" onClick={this.searchUser.bind(this)} disabled={!this.nickname}><ion-icon name="arrow-round-forward"></ion-icon></ion-button>
                </ion-item>

                {this.user ? <app-profile user={this.user} /> : null}
            </div>
        )
    }
}