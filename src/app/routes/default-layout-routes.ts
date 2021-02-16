import { Routes } from '@angular/router';

export const DEFAULT_ROUTES: Routes = [
    {
        path: 'cms',
        loadChildren: () => import('../cms/cms.module').then( m => m.CmsModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardModule)
    },
    {
        path: '',
        loadChildren: () => import('../auth/auth.module').then( m => m.AuthModule)
    }
]