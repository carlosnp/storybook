import { Meta, StoryObj, moduleMetadata } from '@storybook/angular/';
import { fn } from '@storybook/test';
import { ButtonBaseComponent } from './button-base.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * Declaramos el componente
 */
const metaStroke: Meta<ButtonBaseComponent> ={
  title: "Components/stroked-button",
  component: ButtonBaseComponent,
  tags: ['autodocs'],
  args: {
    label: "Label",
    color: 'primary',
    onClick: fn()
  },
  decorators: [
    moduleMetadata({
      //👇 Importa ambos componentes para permitir la composición de componentes con Storybook
      declarations: [],
      imports: [MatButtonModule,MatTooltipModule],
    }),
  ],
};
export default metaStroke;

type StrokedButton = StoryObj<ButtonBaseComponent>;

export const Primary: StrokedButton = {
  args: {
    label: 'Primary',
    tooltip: "Primary"
  },
};

export const Accent: StrokedButton = {
  args: {
    color: 'accent',
    label: 'Accent',
    tooltip: "Accent",
  },
};

export const Warn: StrokedButton = {
  args: {
    color: 'warn',
    label: 'Warn',
    tooltip: "Warn",
  },
};