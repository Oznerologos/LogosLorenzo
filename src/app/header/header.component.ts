import { Component, OnInit } from "@angular/core";
import { TranslationService } from "../translation.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  navItem = [
    ["home", ["Home", "Accueil"]],
    ["experiences", ["Experiences", "Experiences"]],
    ["about", ["Skills", "Competences"]]
  ];

  constructor(public translationService: TranslationService) {}

  ngOnInit() {}

  translate() {
    if (this.translationService.languageValue === "french") {
      this.translationService.languageValue = "english";
    } else {
      this.translationService.languageValue = "french";
    }
    console.log(this.translationService.languageValue);
  }
}
