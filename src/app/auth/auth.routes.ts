import { Routes } from '@angular/router';
import { TableComponent } from '../admin/tablas/table.component';
import { ObjNewComponent } from '../admin/tablas/obj-new.component';
import { ObjEditComponent } from '../admin/tablas/obj-edit.component';
import { ObjDeleteComponent } from '../admin/tablas/obj-delete.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'tabla/:nombre',
    component: TableComponent,
    children: [
      { path: 'new', component: ObjNewComponent },
      { path: 'edit/:objectId', component: ObjEditComponent },
      { path: 'delete/:objectId', component: ObjDeleteComponent },
    ],
  },
  { path: 'listClientes', component: ObjNewComponent },
  { path: 'listVentas', component: ObjNewComponent },
];
