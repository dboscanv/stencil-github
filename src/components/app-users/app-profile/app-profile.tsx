import { Component, Prop } from "@stencil/core";

@Component({
    tag: 'app-profile',
    styleUrl: 'app-profile.scss'
})
export class AppProfile {

    @Prop() user: any;

    render() {
        return [
            <div class="profilePicture">
                <ion-img src={this.user.avatar_url}></ion-img>
            </div>,
            <ion-card>
                <ion-card-header>
                    <ion-card-title>
                        <h1>{this.user.name}</h1>
                    </ion-card-title>
                    <ion-card-subtitle align-self-center>
                        <div class="detail">
                            <ion-icon name="globe"></ion-icon>
                            <span><a href={this.user.blog} target="_blank">{this.user.blog}</a></span>
                        </div>
                        <div class="detail">
                            <ion-icon name="locate"></ion-icon>
                            <span>{this.user.location}</span>
                        </div>
                    </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col size="4">
                                <h1>{this.user.public_repos}</h1>
                                Repositories
                                </ion-col>
                            <ion-col size="4">
                                <h1>{this.user.followers}</h1>
                                Followers
                                </ion-col>
                            <ion-col size="4">
                                <h1>{this.user.following}</h1>
                                Following
                                </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
        ]
    }
}