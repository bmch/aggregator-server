import { text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Weight = list({
  fields: {
    weight_in_kg: text({ isRequired: true }),
    // relationships
    size_in_cm: text(),
    bike: relationship({
      ref: 'Bike.weight',
    }),
    review: relationship({
      ref: 'Review.weight',
    }),
  },
  ui: {
    listView: {
      initialColumns: ['weight_in_kg', 'size_in_cm', 'bike', 'review'],
    },
  },
});
