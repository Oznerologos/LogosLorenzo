import { Component, OnInit } from "@angular/core";
import { TranslationService } from "../translation.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public translationService: TranslationService) {}

  ngOnInit() {}
}
