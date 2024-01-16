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
    },
    { 
        path: "stages", 
        loadChildren: () => import("./modules/stages/stages.module").then(m => m.StagesModule)
    },
    { 
        path: "stage/:id", 
        loadChildren: () => import("./modules/units/units.module").then(m => m.UnitsModule)
    },
    { 
        path: "configuration", 
        loadChildren: () => import("./modules/configuration/configuration.module").then(m => m.ConfigurationModule)
    },
    {
        path: "lesson/:id",
        loadChildren: () => import("./modules/lesson/lesson.module").then(m => m.LessonModule)
    },
    {
        path: "**",
        redirectTo: ""
    }
];
