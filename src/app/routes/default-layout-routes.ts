import { Routes } from '@angular/router';

export const DEFAULT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../cms/cms.module').then( m => m.CmsModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then( m => m.AuthModule)
    },
    {
        path: 'Test_Online',
        loadChildren: () => import('../test-online/test-online.module').then( m => m.TestOnlineModule)
    }
]