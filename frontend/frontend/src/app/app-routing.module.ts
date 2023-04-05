import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChisiamoComponent } from './pages/chisiamo/chisiamo.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PacchettiComponent } from './pages/pacchetti/pacchetti.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { UserComponent } from './pages/user/user.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from 'src/services/route-guard.service';
import { CatalogoGridComponent } from './pages/catalogo-grid/catalogo-grid.component';
import { RegistrazioneUserComponent } from './pages/registrazione-user/registrazione-user.component';
import { RegistrazioneAuthorComponent } from './pages/registrazione-author/registrazione-author.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductService } from 'src/services/product.service';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';



const routes: Routes = [
    {path: "",component: HomeComponent },
    {path: "home/:userid", component: HomeComponent},
    {path: "home", component: HomeComponent },
    {path: "login",component: LoginComponent},
    {path: "logout",component: LogoutComponent, canActivate:[RouteGuardService]},
    {path: "product-list", component: ProductListComponent},
    {path: "registrazione", component: RegistrazioneComponent},
    {path: "registrazione-user", component: RegistrazioneUserComponent},
    {path: "registrazione-author",component: RegistrazioneAuthorComponent},
    {path: "user", component: UserComponent},
    {path: "chisiamo", component: ChisiamoComponent},
    {path: "pacchetti", component: PacchettiComponent},
    {path: "products/:id", component: ProductDetailsComponent},
    {path: "cart-details", component: CartDetailsComponent},
    {path: "productsDetail", component: ProductDetailsComponent},
    {path: "checkout", component: CheckoutComponent},
    {path: "Catalogo", component: CatalogoComponent,  canActivate:[RouteGuardService]},
    {path: "catalogo", component: CatalogoGridComponent,  canActivate:[RouteGuardService]},
    {path: "**",component: ErrorComponent}//sempre ultimo componente. Visualizzato quando non esiste una pagina cercata
];



@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,

    ],
    providers:[ProductService],
    exports: [RouterModule]
})
export class AppRoutingModule { }
