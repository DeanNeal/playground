import Styles from './styles/main.scss';
import { Application } from '@dean_neal/core';
import {DatepickerComponent, TreeDebugComponent, BarChartComponent, LineChartComponent} from '@dean_neal/controls'

import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { HeaderComponent } from './components/header/header.component';

import { ControlsComponent } from './components/controls/controls.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import Docs from './components/documentation';
import Plugins from './components/plugins';


import UpperCaseDirective from './directives/upper-case.directive.js';


import { Router } from './router.js';

Application.register({
    // root: RootComponent,
    styles: Styles,
    components: [
       RootComponent,
       HeaderComponent,
       HomeComponent,

       ControlsComponent,
       NotFoundComponent,
       DatepickerComponent,
       BarChartComponent,
       LineChartComponent
    ],
    directives: [
        UpperCaseDirective
    ],
    import: [Docs, Plugins, TreeDebugComponent],
    router: Router

});