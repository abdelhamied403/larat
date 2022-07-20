import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './app-icon.component.html',
    styleUrls: ['./app-icon.component.scss']
})
export class AppIconComponent implements OnInit {

    @Input() icon: string;
    @Input() size: 'sm' | 'md' | 'lg' | 'xl';
    @Input() width: number;
    @Input() height: number;

    constructor() {
    }

    ngOnInit(): void {

        switch (this.size) {
            case 'sm':
                this.width = 18;
                this.height = 18;
                break;
            case 'md':
                this.width = 24;
                this.height = 24;
                break;
            case 'lg':
                this.width = 32;
                this.height = 32;
                break;
            case 'xl':
                this.width = 48;
                this.height = 48;
                break;
        }
    }

    svgField(e) {
        console.log(e)
    }
}
