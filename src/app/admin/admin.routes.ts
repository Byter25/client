import { Routes } from '@angular/router';
import { TableComponent } from './tablas/table.component';
import { ObjNewComponent } from './tablas/obj-new.component';
import { ObjEditComponent } from './tablas/obj-edit.component';
import { ObjDeleteComponent } from './tablas/obj-delete.component';
import { DashboardComponent } from './dashboard.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'tabla/:nombre',component: TableComponent },
      { path: 'listClientes', component: ObjNewComponent },
      { path: 'listVentas', component: ObjNewComponent },
    ],
  },
];
