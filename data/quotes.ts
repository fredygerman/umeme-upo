import { QuoteStatus } from '@/types/general';

export const quote: QuoteStatus = {
  on: {
    en: 'Location is powered up and shining! 💡',
    sw: "Location ina umeme na inang'aa! 💡",
  },
  off: {
    en: 'No power at Location. I hope you brought a flashlight! 🔦',
    sw: 'Hakuna umeme Location. Natumai una mishumaa!🕯️',
  },
  unknown: {
    en: 'Searching for power at Location. Status unknown! 🔍',
    sw: 'Tunatafuta umeme Location. Hali haijulikani! 🔍',
  },
};
