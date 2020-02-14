import { Component, OnInit } from "@angular/core";
import { TranslationService } from "../translation.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  skills = [
    {
      skill: "Node.JS",
      src: "./../../assets/img/node.png",
      id: 0,
      visible: false,
      content: [
        "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
        "Node.js est un environnement d'exécution JavaScript open source multiplateforme qui exécute du code JavaScript en dehors d'un navigateur. Node.js permet aux développeurs d'utiliser JavaScript pour écrire des outils de ligne de commande et pour les scripts côté serveur, en exécutant des scripts côté serveur pour produire du contenu de page Web dynamique avant que la page ne soit envoyée au navigateur Web de l'utilisateur."
      ]
    },
    {
      skill: "Angular",
      src: "./../../assets/img/angular.png",
      id: 1,
      visible: false,
      content: [
        "Angular is an open-source component-based framework used for building single-page web apps. This web site has been developped with Angular, the different pages are actually one and only page.",
        "Angular est un framework basé sur des composants open-source utilisé pour créer des applications Web à page unique. Ce site web a été développé avec Angular, les différentes pages sont en fait une seule et unique page."
      ]
    },
    {
      skill: "Android",
      src: "./../../assets/img/android.png",
      id: 2,
      visible: false,
      content: [
        "Java is a technology of choice for building applications using managed code that can execute on Android mobile devices. Android is an open source software platform and Linux-based operating system for mobile devices. I am currently developping an android app for my startup",
        "ava est une technologie de choix pour créer des applications à l'aide de code managé pouvant s'exécuter sur des appareils mobiles Android. Android est une plate-forme logicielle open source et un système d'exploitation basé sur Linux pour les appareils mobiles. Je suis en train de développer une application Android pour ma startup"
      ]
    },
    {
      skill: "SQL",
      src: "./../../assets/img/sql.png",
      id: 3,
      visible: false,
      content: [
        "SQL is a language used in programming and designed for managing data held in a relational database management system.",
        "SQL est un langage utilisé en programmation et conçu pour gérer les données contenues dans un système de gestion de base de données relationnelle."
      ]
    },
    {
      skill: "MongoDB",
      src: "./../../assets/img/mongodb.png",
      id: 4,
      visible: false,
      content: [
        "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema.",
        "MongoDB est un programme de base de données orienté document multiplateforme. Classé comme un programme de base de données NoSQL, MongoDB utilise des documents de type JSON avec un schéma."
      ]
    },
    {
      skill: "PHP",
      src: "./../../assets/img/php.png",
      id: 5,
      visible: false,
      content: [
        "PHP is a popular general-purpose scripting language that is especially suited to web development.",
        "PHP est un langage de script populaire particulièrement adapté au développement Web."
      ]
    },
    {
      skill: "Git",
      src: "./../../assets/img/git.png",
      id: 6,
      visible: false,
      content: [
        "Git is a powerfull versioning tool that allows us developper to share and access our project from everywhere while managing merge conflicts.",
        "Git est un puissant outil de versioning qui permet aux developpeur de partager et acceder à ses projets de partout et qui sait gerer les conflits de fusion lorsque plusieurs personnes travaillent sur le même projet."
      ]
    },
    {
      skill: "Group projects",
      src: "./../../assets/img/group.png",
      id: 7,
      visible: false,
      content: [
        "Thanks to way my school works, I am used to work with other, I worked on a lot of group projects, especialy in my school where team are often at the center of our classwork. It allowed me to improve my social skill, know how hear and how to be heard. ",
        "Grâce à la philosophie de mon école, je suis habitué aux travaux de groupe. En effet la plupart de nos projets sont en groupe, ce qui m'a permis de developper mes competences sociales et professionelles, savoir écouter et savoir se faire écouter."
      ]
    },
    {
      skill: "Agile methods",
      src: "./../../assets/img/agile.png",
      id: 8,
      visible: false,
      content: [
        "As I worked in group, I've come to use agiles methodes that are focusing on small and quick development iteration, encouraging an open developer/client relation.",
        "Grâce a mes travaux de groupe, j'ai pu mettre en place differentes methodes de gestions de projets et plus particulièrment des methodes Agiles. Une relation client/prestataire très étroites est souvent au coeur de ces methodes, préférant ainsi de courtes itérations de production."
      ]
    }
  ];

  constructor(public translationService: TranslationService) {}

  ngOnInit() {}

  showContent(id) {
    this.skills.forEach(element => {
      element.visible = false;
    });

    this.skills[id].visible = true;
  }
}
