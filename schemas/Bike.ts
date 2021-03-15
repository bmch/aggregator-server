import {
  checkbox,
  integer,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Bike = list({
  // todo
  // access
  fields: {
    name: text({ isRequired: true }),
    launchDate: timestamp({}),
    score: integer({}),
    // brand: text({ isRequired: true }),
    // model_family: 'Tarmac SL7',
    // model_variant: 'S-Works Tarmac SL7 DURA ACE DI2',
    model_year: integer(),
    drive_train_type: text(),
    includes_powermeter: checkbox({
      defaultValue: false,
    }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'BikeImage.bike',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    weight: relationship({
      ref: 'Weight.bike',
      many: true,
    }),
    review: relationship({
      ref: 'Review.bike',
      many: true,
    }),
    brakeType: select({
      options: [
        { label: 'Disc', value: 'disc' },
        { label: 'Rim', value: 'rim' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    price: integer(),
    //  TODO: PHOTO
  },
});
