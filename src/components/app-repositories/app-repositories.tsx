import { Component, State } from "@stencil/core";
import preloadData from './preloadData';

@Component({
    tag: 'app-repositories',
    styleUrl: 'app-repositories.scss'
})
export class AppRepositories {
    @State() repositories: any[] = preloadData;

    componentWillLoad() {
        fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
            .then(response => response.json())
            .then(response => this.repositories = response.items)
            .catch(error => console.log(error))
    }

    render() {
        return (
            <ion-list>
                {this.repositories.map(repo =>
                    <ion-item>
                        <ion-badge slot="end" color="dark">{repo.stargazers_count.toLocaleString() || 0} <ion-icon name="star"></ion-icon></ion-badge>
                        <ion-label>
                            <h2 class="list-header">
                                {repo.name}
                            </h2>
                            <p>{repo.description}</p>
                        </ion-label>
                    </ion-item>
                )}
            </ion-list>
        )
    }

}