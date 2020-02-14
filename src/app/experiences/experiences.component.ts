import { Component, OnInit } from "@angular/core";
import { TranslationService } from "../translation.service";

@Component({
  selector: "app-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.css"]
})
export class ExperiencesComponent implements OnInit {
  experiences = [
    {
      experience: "Crédit Agricole ",
      src: "./../../assets/img/CA.png",
      url: "https://www.credit-agricole.fr/ca-alpesprovence/particulier.html",
      id: 0,
      visible: false,
      content: [
        "I worked at Crédit Agricole's regional headquarters as Computer Technician during my 1st year's summer.           While it was not my main field of activity, it allowed me to understand computer science from a more hardware aspect.           Knowing how your tools work always comes in handy. From setting up dual screen to completely equip a local agency,           I learned how to optimize and manages computing materials",
        "J'ai travaillé au siège du Crédit Agricole d'Aix-en-Provence en tant que technicien informatique pendant l'été de ma première année. Bien qu'il ne s'agissait pas de mon domaine principal d'activité, cette experience m'a permi de comprendre le monde de l'informatique au niveau matériel. Comprendre comment fonctionne ses outils de travail est toujours utile. De l'installation de double écrans à l'equipement complet d'une agence, j'ai appris à gerer et optimiser le materiel informatique"
      ]
    },
    {
      experience: "Ligue du judo PACA",
      src: "./../../assets/img/judo.jpg",
      url: "https://www.judo-paca.com/",
      id: 1,
      visible: false,
      content: [
        "During my 2nd year of studies, I worked as an ambassador of the regional Judo League.           I help setting up locals competions, had to manage and accompany young athletes.           Having such responsabilities helped me to better understand the working world.",
        "Pendant ma deuxième année, j'ai travaillé en tant qu'ambassadeur pour la ligue du Judo PACA. Aidant à la mise en place des competions locale et responsable de plusieurs  jeunes sportifs, cette experience m'a permis de prendres de sérieuses responsabilités, nécéssaires pour s'inserer dans le monde du travail. "
      ]
    },
    {
      experience: "ProTube VR ",
      src: "./../../assets/img/protube.png",
      url: "https://www.protubevr.com",
      id: 2,
      visible: false,
      content: [
        "I am currently working as an alternate student at ProTubeVR as a web developper.           ProtubeVR is a French company that designs, manufactures Virtual Reality accessories           and ships its products accross the world. I am responsible for maintaining and improving the website as well as internal softwares",
        "Je suis actuellement en alternance chez ProTubeVR en tant que développeur web. ProTubeVR est une startup qui design, fabrique des accesoires de réalité virtuel et livre ses produits à l'échelle mondiale. Je suis responsable de la maintenace et de l'amélioration du site internet déjà mis en place et j'interviens aussi sur certains logiciels internes"
      ]
    },
    {
      experience: "Return",
      src: "./../../assets/img/return.png",
      url: "",
      id: 3,
      visible: false,
      content: [
        "During my first two years of study, I joined Return, a startup within my school that develops retro virtual consoles. I went from angular developper to lead-dev, from learning angular to leading other students. ",
        "Pendant mes deux premières année d'études, j'ai pu rejoindre la startup Return. Cette Startup développe des consoles virtuelles retro. J'ai pu passer de simple développeur à co-dir lead-dev, passant de l'apprentissage d'angular à la direction du projet"
      ]
    },
    {
      experience: "Workshops Ynov",
      src: "./../../assets/img/ynov.jpg",
      url:
        "https://www.ynov-aix.com/?gclid=CjwKCAiAp5nyBRABEiwApTwjXvFN-mR6axPLl0HCpxAY764yKoD-mDqmZFz31PazUqrPUvzgyAtD5xoCkvkQAvD_BwE",
      id: 4,
      visible: false,
      content: [
        "Every year, in my school,  we take part in Ynov's Workshop : a competion between group of students that fullfill actual companiess projects and requests.",
        "Chaque année, dans mon école, nous participons au Workshop d'Ynov : une competition au sein de l'école où les étudiants sont séparés en groupes qui répondent aux demandes de réelles entreprises"
      ]
    }
  ];

  constructor(public translationService: TranslationService) {}

  ngOnInit() {}

  showContent(id) {
    this.experiences.forEach(element => {
      element.visible = false;
    });

    this.experiences[id].visible = true;
  }
}
