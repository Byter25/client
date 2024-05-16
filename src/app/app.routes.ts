import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/productos/products.component';
import { ServiciosComponent } from './pages/home/servicios.component';
import { DetallesComponent } from './pages/productos/components/detalles.component';
import { AboutComponent } from './pages/home/about.component';
import { ContacComponent } from './pages/home/contac.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiciosComponent },
  { path: 'contac', component: ContacComponent },
  // { path: 'sesion', loadChildren: ()=>import('./auth/auth.routes').then(n=>n.AUTH_ROUTES)},

  // {
  //   path: 'dashboard',
  //   loadChildren: ()=>import('./admin/admin.routes').then(n=>n.ADMIN_ROUTES),
  // },
  {
    path: 'productos',
    component: ProductsComponent,
    children: [{ path: ':productId', component: DetallesComponent }],
  },
];
