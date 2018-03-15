import { trigger, state, transition, style, animate, keyframes } from '@angular/animations'

export const itemAnim = trigger('item', [
    state('out', style({ 'border-left-width': '4px' })),
    state('in', style({ 'border-left-width': '8px' })),
    transition('out=>in', animate('100ms ease-in')),
    transition('hover=>in', animate('100ms ease-out'))
]);