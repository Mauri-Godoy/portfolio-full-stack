import { style, trigger, transition, animate, AnimationTriggerMetadata, state } from '@angular/animations';

export const bounce: AnimationTriggerMetadata =
  trigger('bounce', [
    state('in', style({ transform: 'translate({{inX}}vw, {{inY}}vh)', opacity: 0.4 }), { params: { inX: 100, inY: 100 }}),
    state('out', style({ transform: 'translate({{x}}vw, {{y}}vh)', opacity: 0.4 }), { params: { x: 100, y: 100 } }),
    transition('in => out', animate('{{duration}}s linear'), { params: { duration: 3 } }),
    transition('out => in', animate('{{duration}}s linear'), { params: { duration: 3 } })])

