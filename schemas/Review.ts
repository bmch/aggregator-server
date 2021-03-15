import { text, timestamp, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Review = list({
  fields: {
    // relationships
    publication: relationship({
      ref: 'Publication.review',
    }),
    bike: relationship({
      ref: 'Bike.review',
    }),
    specific_bike_model_version_on_test: text(),
    weight: relationship({
      ref: 'Weight.review',
    }),
    headline: text(),
    summary: text({
      isRequired: true,
      ui: {
        displayMode: 'textarea',
      },
    }),
    link: text({ isRequired: true }),
    date: timestamp({ isRequired: true }),
    score: text({ isRequired: true }),
    author: text({ isRequired: true }),
  },
  ui: {
    listView: {
      initialColumns: ['publication', 'bike', 'author', 'score', 'date'],
    },
  },
});
