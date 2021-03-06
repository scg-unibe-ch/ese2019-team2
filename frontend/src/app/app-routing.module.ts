import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RoleGuardService} from './auth/auth-guard-service/roleguard.service';

const routes: Routes = [
   {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)},
   {path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule'},
   {
      path: 'profile',
      loadChildren: './pages/profile/profile.module#ProfilePageModule',
      canActivate: [RoleGuardService],
      data: {expectedRole: ('user' || 'serviceProvider')}
   },
   {
      path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule', canActivate: [RoleGuardService],
      data: {expectedRole: 'admin'}
   },
   {path: 'category/:categoryName', loadChildren: './pages/category/category.module#CategoryPageModule'},
   {path: 'category/:categoryName/:subCategory', loadChildren: './pages/category/category.module#CategoryPageModule'},
   {path: 'newservice', loadChildren: './pages/newservice/newservice.module#NewservicePageModule'},
   {path: 'detail/:_id', loadChildren: './pages/detail/detail.module#DetailPageModule'},
   {path: 'my-services', loadChildren: './pages/my-services/my-services.module#MyServicesPageModule'},
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
   ],
   exports: [RouterModule]
})
export class AppRoutingModule {
}
