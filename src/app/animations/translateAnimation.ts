import { state, style, trigger, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

export const translate: AnimationTriggerMetadata =
  trigger('translate', [
    state(
      'start', style({
        transform: `translateX({{x}}%)`,
        opacity: '{{opacity}}'
      }), { params: { x: '-100', opacity: '0' } }
    ),
    transition('start => *', [
      animate('{{duration}}s', style({
        transform: 'translateX(0)',
        opacity: 1
      }))
    ], { params: { duration: 1 } }),
  ])

export const translateTop: AnimationTriggerMetadata =
  trigger('translateT', [
    state(
      'void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })
    ),
    transition(':enter', [
      animate('{{duration}}s', style({
        transform: 'translateY(0)',
        opacity: 1
      }))
    ], { params: { duration: 1 } })
  ])
