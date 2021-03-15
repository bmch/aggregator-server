import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Publication = list({
  fields: {
    name: text({ isRequired: true }),
    photo: relationship({
      ref: 'PublicationImage.publication',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    review: relationship({
      ref: 'Review.publication',
      many: true,
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'photo', 'review'],
    },
  },
});
