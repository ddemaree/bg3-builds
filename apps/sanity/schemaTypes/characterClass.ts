import { defineField, defineType } from 'sanity';

export const classNames = [
  { title: 'Barbarian', value: 'barbarian' },
  { title: 'Bard', value: 'bard' },
  { title: 'Cleric', value: 'cleric' },
  { title: 'Druid', value: 'druid' },
  { title: 'Fighter', value: 'fighter' },
  { title: 'Monk', value: 'monk' },
  { title: 'Paladin', value: 'paladin' },
  { title: 'Ranger', value: 'ranger' },
  { title: 'Rogue', value: 'rogue' },
  { title: 'Sorcerer', value: 'sorcerer' },
  { title: 'Warlock', value: 'warlock' },
  { title: 'Wizard', value: 'wizard' }
]

export const classType = defineType({
  type: 'document',
  name: 'characterClass',
  title: 'Character Class',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: rule => rule.required()
    }),
    defineField({
      type: 'string',
      name: 'slug',
      title: 'Slug',
      validation: rule => rule.required().custom(slug => {
        const classValues = classNames.map(({ value }) => value);

        if (!slug) {
          return 'Slug is required';
        }
        
        if (!classValues.includes(slug)) {
          return 'Slug must be a valid BG3 class name';
        }

        return true;
      }),
    })
  ],
});