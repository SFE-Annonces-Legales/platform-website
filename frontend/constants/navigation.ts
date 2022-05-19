export type NavItem = {
    name: string;
    href: string;
}
export const NAV_ITEMS: NavItem[] = [
    { name: 'Accueil', href: '/home/#'},
    { name: 'Nos Packs', href: '/home/#pricing' },
    { name: 'Annonces publiées', href: '/annonces/all' },
    { name: 'A Propos', href: '/home/#about'},
    { name: 'Contactez Nous', href: '#'},
]

export const PLATFORM_NAME = "Plateforme";