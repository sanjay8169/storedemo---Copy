import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { kartperson } from './store/peopole/people.reducer';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    importProvidersFrom(StoreModule.forRoot({
        person: kartperson
    })), provideEffects()]
};
