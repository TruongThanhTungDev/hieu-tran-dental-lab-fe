import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/admin/home/home.component';
import { TopicComponent } from '../pages/admin/topic/topic.component';
import { EditorMaterialContentComponent } from '../pages/admin/editor-material-content/editor-material-content.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'topic',
    component: TopicComponent,
  },
  {
    path: 'editor-article',
    component: EditorMaterialContentComponent,
  },
];
