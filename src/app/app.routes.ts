import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ProductDetailsComponent } from './components/productos/product-details.component';
import { ProductEditComponent } from './components/productos/product-edit.component';
import { ProductListComponent } from './components/productos/product-list.component';
import { ProductNewComponent } from './components/productos/product-new.component';
import { DashboardComponent } from './pages/dashboard.component';
import { LoginComponent } from './pages/login.component';
import { ProductsComponent } from './pages/products.component';
import { RegisterComponent } from './pages/register.component';
import { ServiciosComponent } from './pages/servicios.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'services', component: ServiciosComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'listProducts', component: ProductListComponent },
      { path: 'listClientes', component: ProductNewComponent },
      { path: 'listVentas', component: ProductNewComponent },
    ],
  },
  { path: 'products', component: ProductsComponent },
  { path: 'products/edit/:productId', component: ProductEditComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
];
