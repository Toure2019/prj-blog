import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public posts = [
    {
      id: 1, 
      title: '1er Post',
      content: 'Au début de l’année 2010, un employé de Google dont le nom est Misko Hevery travaillait sur un projet à part dont le but est de faciliter le développement des applications web pour plusieurs projets internes qu’il concevait. Ce projet fut nommé Angular JS.', 
      loveIts: 3,
      created_at: new Date(2019, 6, 25, 15, 32, 0)
    }, 
    {
      id: 2, 
      title: '2ème Post',
      content: 'Adam abrons ami de Misko et qui travaillait avec lui sur ce projet choisit le nom d’Angular car les balises du langage HTML sont écrites entre des chevrons angulaires (angular brackets < >).Ils ont alors enregistré le nom de domaine getangular.com (vu que angular.com était déjà prit)', 
      loveIts: 0,
      created_at: new Date(2018, 6, 12, 19, 0, 0)
    },
    {
      id: 3, 
      title: '3ème Post',
      content: 'Plusieurs Années plus tard, l’environnement JavaScript évolue et de nouveaux standards apparaissent. L’équipe d’AngularJS font de leur mieux pour améliorer le Framework à chaque Pull Request mais finissent être bloqués par ses capacités restreintes. Le Framework jusqu’à ce temps a gardé sa version 1.x.x malgré les évolutions majeures et mineures qui lui sont apportées.', 
      loveIts: -2,
      created_at: new Date(2017, 9, 14, 15, 32, 0)
    }
  ];
}
