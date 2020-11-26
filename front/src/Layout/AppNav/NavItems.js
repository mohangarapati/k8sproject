import Api from '../../Api';
let Nav = [];
export let AdminNav = [
    {
        icon: 'lnr-apartment',
        label: 'DASHBOARD',
        to: '/admin/dashboard'
    },
    {
        icon: 'lnr-tag',
        label: 'CLASSES',
        to: '/admin/classes'
    },
    {
        icon: 'lnr-highlight',
        label: 'ATTENDANCES',
        to: '/admin/attendance'
    },
    {
        icon: 'lnr-graduation-hat',
        label: 'STUDENTS',
        to: '/admin/students'
    },    
    {
        icon: 'lnr-users',
        label: 'PLAYERS',
        to: '/admin/players'
    },    
    {
        icon: 'lnr-users',
        label: 'COACHES',
        to: '/admin/coaches'
    },    
    {
        icon: 'lnr-alarm',
        label: 'EVENTS',
        to: '/admin/events'
    },    
    {
        icon: 'lnr-highlight',
        label: 'REPORTS',
        to: '/admin/reports'
    },
    {
        icon: 'lnr-user',
        label: 'PROFILE',
        to: '/admin/profile'
    },
];
export let InstructorNav = [
    {
        icon: 'lnr-layers',
        label: 'ATTENDANCE',
        to: '/page/attendance'
    },
    {
        icon: 'lnr-tag',
        label: 'CLASSES',
        to: '/page/classes'
    },
    {
        icon: 'lnr-graduation-hat',
        label: 'STUDENTS',
        to: '/page/students'
    },    
    {
        icon: 'lnr-alarm',
        label: 'EVENTS',
        to: '/page/events'
    },    
    {
        icon: 'lnr-user',
        label: 'PROFILE',
        to: '/page/profile'
    },
];
export let ParentNav = [
    {
        icon: 'lnr-users',
        label: 'KIDS',
        to: '/parent/kids'
    },
    {
        icon: 'lnr-layers',
        label: 'CLASSES',
        to: '/parent/classes'
    },
    {
        icon: 'lnr-clock',
        label: 'BOOKINGS',
        to: '/parent/booking'
    },
    {
        icon: 'lnr-user',
        label: 'PROFILE',
        to: '/parent/profile'
    }
    // {
    //     icon: 'lnr-dinner',
    //     label: 'PAYMENT',
    //     to: '/parent/payment'
    // },
    // {
    //     icon: 'lnr-alarm',
    //     label: 'EVENTS',
    //     to: '/parent/events'
    // }
];
export let PlayerNav = [
    {
        icon: 'lnr-layers',
        label: 'CLASSES',
        to: '/player/classes'
    },
    {
        icon: 'lnr-clock',
        label: 'BOOKINGS',
        to: '/player/booking'
    },
    {
        icon: 'lnr-user',
        label: 'PROFILE',
        to: '/player/profile'
    }
];
Nav = {AdminNav, InstructorNav, ParentNav, PlayerNav}
export default Nav;
