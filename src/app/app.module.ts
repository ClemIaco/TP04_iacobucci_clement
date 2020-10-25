import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductState } from '../shared/states/product-state'

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FooterComponent } from './footer/footer.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { NamePatternDirective } from './directives/name-pattern.directive';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { PhonePipePipe } from './phone-pipe.pipe';
import { PostalCodePatternDirective } from './directives/postal-code-pattern.directive';
import { CityPatternDirective } from './directives/city-pattern.directive';
import { EmailPatternDirective } from './directives/email-pattern.directive';
import { CountryPatternDirective } from './directives/country-pattern.directive';
import { ProductListComponent } from './product-list/product-list.component';
import {ApiService} from './services/api.service';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { NgxsModule } from '@ngxs/store';
import { StoreComponent } from './store/store.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { FormulaireModule } from './formulaire/formulaire.module';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    //FormulaireComponent,
    FooterComponent,
    //RecapitulatifComponent,
    /*NamePatternDirective,
    PasswordPatternDirective,
    MatchPasswordDirective,
    PhonePipePipe,
    PostalCodePatternDirective,
    CityPatternDirective,
    EmailPatternDirective,
    CountryPatternDirective,*/
    //ProductListComponent,
    //SearchEngineComponent,
    //StoreComponent,
    //DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([ProductState]),
    CommonModule
  ],
  //providers: [ApiService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
