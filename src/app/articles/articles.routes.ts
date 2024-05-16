import { Routes } from '@angular/router';
import { TableComponent } from '../admin/tablas/table.component';
import { ObjNewComponent } from '../admin/tablas/components/obj-new.component';
import { ObjEditComponent } from '../admin/tablas/components/obj-edit.component';
import { ObjDeleteComponent } from '../admin/tablas/components/obj-delete.component';

export const ADMIN_ROUTES: Routes = [
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
