import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: "", 
        loadChildren: () => import("./modules/welcome/welcome.module").then(m => m.WelcomeModule)
    },
    { 
        path: "login", 
        loadChildren: () => import("./modules/login/login.module").then(m => m.LoginModule)
    },
    { 
        path: "register", 
        loadChildren: () => import("./modules/register/register.module").then(m => m.RegisterModule)
    }
];
