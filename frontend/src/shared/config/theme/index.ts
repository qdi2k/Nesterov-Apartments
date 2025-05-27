import { fontColors, iconColors } from './colors';
import { fontSizes, fontWeights } from './typography';
import { opacityAnimation, slideInAnimation } from '@/shared/lib/animations/presets';

export const theme = {
  icon: { colors: iconColors },
  font: {
    size: fontSizes,
    weight: fontWeights,
    colors: fontColors
  },
  animations: {
    opacity: opacityAnimation,
    slideIn: slideInAnimation
  }
};