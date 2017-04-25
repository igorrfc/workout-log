import { expect } from 'chai';
import moment from 'moment';

import { filterByDate } from '../../src/queries/date';

describe('DateQuery', () => {
  describe('filterByDate', () => {
    const currentDateRegistry = { date: moment().format('DD-MM-YYYY') };
    const registry = { date: '04-05-2017' };
    const registries = [currentDateRegistry, registry];

    describe('when the target date param is present', () => {
      const filterResult = filterByDate(registries, '04-05-2017');

      it('returns only the registries with the target dates', () => {
        expect(filterResult).to.eql([registry]);
      });
    });

    describe('when the target date param is not present', () => {
      const filterResult = filterByDate(registries);

      it('returns only the registries with the current date', () => {
        expect(filterResult).to.eql([currentDateRegistry]);
      });
    });

    describe('when the registries parameter is empty', () => {
      const filterResult = filterByDate([]);

      it('returns an empty array', () => {
        expect(filterResult).to.eql([]);
      });
    });
  });
});
