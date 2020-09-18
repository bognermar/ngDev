import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { EditorComponent } from './shared/editor/editor.component';
import { UploaderComponent } from './shared/uploader/uploader.component';
import { AdminComponent } from './admin/admin.component';
import { IsAuthRouteGuard } from './route.guard.service';
import { AdminAComponent } from './admin-a/admin-a.component';
import { AdminBComponent } from './admin-b/admin-b.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.module').then((m) => m.DemosModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admina',
        component: AdminAComponent,
      },
      {
        path: 'adminb',
        component: AdminBComponent,
      },
    ],
    canActivate: [IsAuthRouteGuard],
  },
  { path: 'showeditor', component: EditorComponent, outlet: 'sidebarOutlet' },
  {
    path: 'showuploader',
    component: UploaderComponent,
    outlet: 'sidebarOutlet',
  },
  {
    path: 'schkills',
    redirectTo: 'skills',
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./statistics/statistics.module').then((m) => m.StatisticsModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
