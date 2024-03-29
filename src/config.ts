import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Dihak',
    title: 'Dihak\'s Blog',
    description: 'Dihak\'s Blog',
    url: 'https://dihak.github.io',
    githubUrl: 'https://github.com/dihak/dihak.github.io',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
