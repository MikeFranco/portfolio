export interface INavItems {
    name: string
    href: string
}

export interface ISocialMedia extends INavItems {
    icon: string
}

export interface IMyStack {
    header: string
    items: {
        name: string
        icon: string
    }[]
}