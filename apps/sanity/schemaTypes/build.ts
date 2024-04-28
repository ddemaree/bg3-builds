import { defineField, defineType } from 'sanity'

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

export const buildStep = defineType({
  type: 'object',
  name: 'buildStep',
  title: 'Build Step',
  fields: [
    {
      type: 'reference',
      name: 'class',
      title: 'Class',
      to: [
        { type: 'characterClass' }
      ],
      validation: Rule => Rule.required(),
      options: {
        disableNew: true,
      }
     },
    {
      type: 'number',
      name: 'level',
      title: 'Level',
      validation: Rule => Rule.required().integer().min(1).max(20)
    }
  ],
  preview: {
    select: {
      className: 'class.name',
      level: 'level'
    },
    prepare({ className, level }) {
      return {
        title: `${className} - Level ${level}`
      }
    }
  }
});

export const build = defineType({
  type: 'document',
  name: 'build',
  title: 'Builds',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required()
    }),
    defineField({
      type: 'array',
      name: 'steps',
      title: 'Leveling Steps',
      of: [
        {
          type: 'buildStep'
        }
      ]
    })
  ]
});