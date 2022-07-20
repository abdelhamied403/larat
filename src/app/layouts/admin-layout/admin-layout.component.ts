import {Component, HostListener, OnInit} from '@angular/core';
import {MenuLinksI} from '../../interfaces/home-route.interfaces';
import {Router, RouterEvent} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';
import {CookieService} from 'ngx-cookie-service';
import {TranslateService} from '@ngx-translate/core';

export const ROUTES: MenuLinksI[] = [
    {
        path: '/home',
        title: 'Home',
        translate: 'menu.home',
        type: 'link',
        icon: 'fa-solid fa-chart-pie',
    },
    {
        path: '/properties',
        title: 'Property',
        translate: 'menu.properties',
        type: 'link',
        customIcon: 'building.svg'
    },
    {
        path: '/components',
        title: 'Offers & Reservation',
        translate: 'menu.offers',
        type: 'link',
        icon: 'fa-solid fa-file-invoice',

    },
    {
        path: '/forms',
        title: 'Requests',
        translate: 'menu.forms',
        type: 'link',
        icon: 'fa-solid fa-note-sticky',

    },
    {
        path: '/tables',
        title: 'Employee',
        translate: 'menu.employees',
        type: 'link',
        icon: 'fa-solid fa-user-group',
    },
    {
        path: '/settings',
        title: 'Settings',
        translate: 'menu.settings',
        type: 'link',
        icon: 'fa-solid fa-gear',
    },
    {
        path: '/',
        title: 'Search',
        type: 'search',
        translate: 'menu.search',
        icon: 'fa-solid fa-search'
    }
];

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

    public menuItems: MenuLinksI[];
    public opened = false;
    public language: string;

    constructor(private router: Router, private _NzMessageService: NzMessageService,
                private _CookieService: CookieService,
                private translateService: TranslateService
    ) {
    }


    @HostListener('window:resize', ['$event'])
    closeMenu(event) {
        this.opened = false
    }

    ngOnInit() {
        this.language = this.translateService.getDefaultLang() /*TODO: get it from storage or so */
        this.menuItems = ROUTES.map(menuItem => ({
            ...menuItem,
            isActive: menuItem.path === this.router.url
        }));
        this.router.events.subscribe((event: RouterEvent) => {
            this.opened = false;
            this.menuItems = ROUTES.map(menuItem => ({
                ...menuItem,
                isActive: menuItem.path === event.url
            }));
        });
    }

    logOut() {

        this._CookieService.delete('token');
        this._NzMessageService.create('success', `The account has been successfully logged out`)
        this.router.navigateByUrl('/auth/login')
    }

    changeLanguage(lang: string) {
        this.translateService.use(lang);
        this.language = lang;
    }

    onSearch(event) {
        console.log({searchValue: event.target.value})
    }
}
