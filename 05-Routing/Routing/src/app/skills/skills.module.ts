import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

const skillsRoutes: Routes = [
  {
    path: '',
    component: SkillsListComponent,
  },
  {
    path: ':id',
    component: SkillsEditComponent,
  },
];

@NgModule({
  declarations: [SkillsListComponent, SkillsEditComponent, SkillRowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(skillsRoutes),
    MaterialModule,
    FormsModule,
  ],
})
export class SkillsModule {}
