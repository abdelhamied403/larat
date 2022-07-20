export interface MenuLinksI {
    path: string;
    title: string;
    translate: string;
    type: 'link' | 'search';
    icon?: string;
    customIcon?: string;
    isActive?: boolean;
}
