import { BoTranh } from './botranh.entity';

export const boTranhProviders = [
  {
    provide: 'BOTRANH_REPOSITORY',
    useValue: BoTranh,
  },
];
