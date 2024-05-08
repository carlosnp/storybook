import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-base',
  templateUrl: './button-base.component.html',
  styleUrl: './button-base.component.scss',
  imports: [ CommonModule, MatButtonModule, MatTooltipModule, MatIconModule],
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
   * Nombre del icono de material.
   *
   * Lista de iconos de material
   * https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
   */
  @Input()
  icon!: string;
  /**
   * Click en el boton
   */
  @Output()
  onClick = new EventEmitter<Event>();
}
