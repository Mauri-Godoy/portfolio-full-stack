import { state, style, trigger, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

export const translate: AnimationTriggerMetadata =
  trigger('enterState', [
    state(
      'void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })
    ),
    transition(':enter', [
      animate(700, style({
        transform: 'translateX(0)',
        opacity: 1
      }))
    ])
  ])

