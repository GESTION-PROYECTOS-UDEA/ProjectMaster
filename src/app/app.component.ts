import {Component, ViewContainerRef} from '@angular/core';
import { NavigationComponent } from './shared/layout/navigation/navigation.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';


@Component({
  selector: 'app-root',
  template: `
              <sa-navigation></sa-navigation>
              <router-outlet></router-outlet>
            `
})

export class AppComponent {
  public title = 'app works!';

  public constructor(private viewContainerRef: ViewContainerRef) {

  }

}
