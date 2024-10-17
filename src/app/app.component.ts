import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { definePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';
import { PrimeNGConfig } from 'primeng/api';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { Store } from '@ngrx/store';
import { selectProducts } from './store/products.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catalogo-app-new';
  public config: PrimeNGConfig = inject(PrimeNGConfig);
  private store = inject(Store);

  constructor() {
    this.config.theme.set({preset: Noir});
}


}



const Noir = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
      },
      colorScheme: {
          light: {
              primary: {
                  color: '{zinc.950}',
                  inverseColor: '#ffffff',
                  hoverColor: '{zinc.900}',
                  activeColor: '{zinc.800}'
              },
              highlight: {
                  background: '{zinc.950}',
                  focusBackground: '{zinc.700}',
                  color: '#ffffff',
                  focusColor: '#ffffff'
              }
          },
          dark: {
              primary: {
                  color: '{zinc.50}',
                  inverseColor: '{zinc.950}',
                  hoverColor: '{zinc.100}',
                  activeColor: '{zinc.200}'
              },
              highlight: {
                  background: 'rgba(250, 250, 250, .16)',
                  focusBackground: 'rgba(250, 250, 250, .24)',
                  color: 'rgba(255,255,255,.87)',
                  focusColor: 'rgba(255,255,255,.87)'
              }
          }
      }
  }
});
