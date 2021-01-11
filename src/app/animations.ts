
import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';

let routeAnimationToRight = [
    style({ position: 'relative' }),
    query(':enter, :leave', [
        style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })
    ]),
    query(':enter', [
        style({ left: '100%' })
    ]),
    query(':leave', animateChild()),
    group([
        query(':leave', [
            animate('300ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
        ])
    ]),
    query(':enter', animateChild()),
];

let routeAnimationToLeft = [
    style({ position: 'relative' }),
    query(':enter, :leave', [
        style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })
    ]),
    query(':enter', [
        style({ left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
        query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
        ])
    ]),
    query(':enter', animateChild()),
];

let routeFadeIn = [
    // css styles at start of transition
    style({ opacity: 0 }),
    // animation and styles at end of transition
    animate('.9s', style({ opacity: 1 }))
];

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('LandingPage => NameFormPage', routeAnimationToRight),
        transition('NameFormPage => LandingPage', routeAnimationToLeft),

        transition('NameFormPage => AvatarFormPage', routeAnimationToRight),
        transition('AvatarFormPage => NameFormPage', routeAnimationToLeft),
        transition('* <=> TareaPage', routeAnimationToRight),
        transition('* <=> SumaPage', routeFadeIn),
        transition('* <=> RestaPage', routeFadeIn),
        transition('* <=> MensajePage', routeFadeIn),
        transition('* <=> GamePage', routeAnimationToRight)
    ]);
