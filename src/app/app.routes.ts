import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { LoginComponent } from './auth/login.component';
import { ProductsComponent } from './pages/products.component';
import { ServiciosComponent } from './pages/servicios.component';
import { ObjDetailsComponent } from './admin/tablas/obj-details.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sesion', loadChildren: ()=>import('./auth/auth.routes').then(n=>n.AUTH_ROUTES)},
  { path: 'services', component: ServiciosComponent },
  {
    path: 'dashboard',
    loadChildren: ()=>import('./admin/admin.routes').then(n=>n.ADMIN_ROUTES),
  },
  {
    path: 'productos',
    component: ProductsComponent,
    children: [{ path: ':productId', component: ObjDetailsComponent }],
  },
];
