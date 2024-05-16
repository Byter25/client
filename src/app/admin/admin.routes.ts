import { Routes } from '@angular/router';
import { TableComponent } from './tablas/table.component';
import { ObjNewComponent } from './tablas/components/obj-new.component';
import { ObjEditComponent } from './tablas/components/obj-edit.component';
import { ObjDeleteComponent } from './tablas/components/obj-delete.component';
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
