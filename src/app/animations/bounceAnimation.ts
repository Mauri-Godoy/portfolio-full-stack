import { style, trigger, transition, animate, AnimationTriggerMetadata, state } from '@angular/animations';

export const bounce: AnimationTriggerMetadata =
  trigger('bounce', [
    state('in', style({ transform: 'translate({{inX}}vw, {{inY}}vh)', opacity: 0.5 }), { params: { inX: 0, inY: 0 }}),
    state('out', style({ transform: 'translate({{x}}vw, {{y}}vh)', opacity: 0.5 }), { params: { x: 100, y: 100 } }),
    transition('in => out', animate('{{duration}}s linear'), { params: { duration: 1 } }),
    transition('out => in', animate('{{duration}}s linear'), { params: { duration: 1 } })])

