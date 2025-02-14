import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'Home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField(
      {
        name: 'title',
        type: 'string',
        title: 'title of the blog!'
      }, 
    ),
    defineField(
      {
        name: 'slug',
        type: 'slug',
        title: 'title of the blog!'
      }, 
    ),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        }
      ]
    })
  ]
})