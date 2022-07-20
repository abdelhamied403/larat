import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppComponent} from './app.component';
import {CookieService} from 'ngx-cookie-service';

import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {LayoutsModule} from './layouts/layouts.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {SharedModule} from './share/shared.module';
import {CustomComponentModule} from './share/custom.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './app.reducer';
import {AngularSvgIconModule} from 'angular-svg-icon';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        AngularSvgIconModule.forRoot(),
        SharedModule,
        AppRoutingModule,
        CustomComponentModule,
        BrowserModule,
        StoreModule.forRoot(reducers),

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        LayoutsModule,
    ],
    providers: [CookieService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    bootstrap: [AppComponent]
})
export class AppModule {
}
