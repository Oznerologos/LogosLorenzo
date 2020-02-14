import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { FooterComponent } from "./footer/footer.component";
import { TranslationService } from "./translation.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ExperiencesComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
