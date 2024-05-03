import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-button-base',
  templateUrl: './button-base.component.html',
  styleUrl: './button-base.component.scss',
  imports: [ MatButtonModule, MatTooltipModule],
  standalone: true,
})
export class ButtonBaseComponent {
  /**
   * Titulo del boton
   */
  @Input()
  label: string = 'LABEL';
  /**
   * Texto de ayuda
   */
  @Input()
  tooltip: string = '';
  /**
   * Color
   */
  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';
  /**
   * Click en el boton
   */
  @Output()
  onClick = new EventEmitter<Event>();
}
