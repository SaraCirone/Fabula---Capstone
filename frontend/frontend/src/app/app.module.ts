import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChisiamoComponent } from './pages/chisiamo/chisiamo.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PacchettiComponent } from './pages/pacchetti/pacchetti.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { UserComponent } from './pages/user/user.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CatalogoGridComponent } from './pages/catalogo-grid/catalogo-grid.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ProductService } from 'src/services/product.service';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    ChisiamoComponent,
    CatalogoComponent,
    PacchettiComponent,
    RegistrazioneComponent,
    UserComponent,
    LogoutComponent,
    CatalogoGridComponent,
    BookCardComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,



],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
