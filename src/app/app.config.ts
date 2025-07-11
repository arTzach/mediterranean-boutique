import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection
} from '@angular/core';


import {provideState, provideStore} from '@ngrx/store';
import {cartReducer} from './store/cart.reducer';
import {provideTranslateService, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ConfigService} from './config/config.service';
import {provideToastr} from 'ngx-toastr';
import {provideAnimations} from '@angular/platform-browser/animations';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore(),
    provideState({ name: 'cart', reducer: cartReducer }),
    provideHttpClient(),
    provideAnimations(),
    provideToastr(),
    provideTranslateService({
      defaultLanguage: 'en',
    }),
    importProvidersFrom([
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      })
      ]),
    provideAppInitializer(() => {
      const config = inject(ConfigService)
      return config.loadConfig();
    }),
  ]
};
