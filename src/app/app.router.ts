import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { MainComponent } from './main/main.component';

export const appRoutes: Routes = [

    { path: '', component: MainComponent },
    /*callback?code=
    AQAl1ok6pZ2rcymQZfP8SXD1FRkNazWifcxITif2xU
    jjfGh5wpsfFRRmO8gfmThznMN8XQ6prtmxjyqFOjC62lmE
    2aIDEM4yvJZdaNBZEcP7zDesv3q5M8b7LtAjUYv8MgQ1F4buvCZOi0q
    Xygb4pPQ0amWUmalhXHKoK3xBVFkLym9Bzu15Fno7-SBpeuyCzZLeRLhbY8F-j2zFz6v5jzXkqV8l8r1lmx
    71t1VrCcZZ4RucgPAjrA&state=34fFs29kd09*/
    { path: 'callback', component: CallbackComponent }
  ];
