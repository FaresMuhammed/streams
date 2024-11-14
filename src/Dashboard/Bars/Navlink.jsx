import { faPlus, faUsers, faCartShopping,  faBook } from '@fortawesome/free-solid-svg-icons'

export const Links =[
    {
        name: 'Users' ,
        path: 'users' ,
        icon: faUsers ,
        role: '2001'
    } ,
    {
        name: 'Add user' ,
        path: '/dashboard/user/add' ,
        icon: faPlus ,
        role: '2001'
    } ,
    {
        name: 'Courses' ,
        path: '/dashboard/products' ,
        icon: faBook ,
        role: ['2001']
    } ,
    {
        name: 'Add course' ,
        path: '/dashboard/product/add' ,
        icon: faPlus ,
        role: ['2001']
    } ,
    {
        name: 'Jobs' ,
        path: '/dashboard/categories' ,
        icon: faCartShopping,
        role: ['2001']
    } ,
    {
        name: 'Add job' ,
        path: '/dashboard/category/add' ,
        icon: faPlus ,
        role: ['2001']
    } ,
]