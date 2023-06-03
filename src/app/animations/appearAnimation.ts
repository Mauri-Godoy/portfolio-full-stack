import { state, style, trigger, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

export const appear: AnimationTriggerMetadata =
  trigger('appearState', [
    state(
      'void', style({
        opacity: 0
      })
    ),
    transition(':enter', [
      animate(900, style({
        opacity: 1
      }))
    ])
  ])

