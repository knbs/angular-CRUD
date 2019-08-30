import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'crear', component: FormComponent },
	{ path: 'editar/:personId', component: FormComponent },
	{ path: 'eliminar/:personId', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
