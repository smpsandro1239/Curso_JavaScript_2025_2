import type { CourseData } from '../types';
import { module1 } from './modules/module1';
import { module2 } from './modules/module2';
import { module3 } from './modules/module3';
import { module4 } from './modules/module4';
import { module5 } from './modules/module5';
import { module6 } from './modules/module6';
import { module7 } from './modules/module7';

export const courseData: CourseData = {
  title: 'Curso Completo de JavaScript',
  modules: [
    module1,
    module2,
    module3,
    module4,
    module5,
    module6,
    module7,
  ]
};