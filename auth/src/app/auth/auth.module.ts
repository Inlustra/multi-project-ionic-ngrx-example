import { AuthEffects } from './store/auth/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorHandler, ModuleWithProviders, NgModule, Self } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { AuthService } from './auth.service';
import { reducers } from './store/index';

@NgModule({
  imports: [
    AuthService,
    AuthHttpService,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [AuthService]
})
export class AuthModule {

  constructor(@Self() authHttpService: AuthHttpService) {}

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthHttpService
      ]
    }
  }

}
