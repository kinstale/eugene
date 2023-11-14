// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const pricing = defineCollection({
  schema: z.object({
    category: z.string(),
    title: z.string(),
    accroche: z.string(),
    price: z.number(),
    description: z.string(),
    bienfait_1: z.string(),
    bienfait_2: z.string(),
    bienfait_3: z.string(),
    popular: z.boolean(),
    ctaText: z.string(),
    icon: z.string()
  }),
});

const gallery = defineCollection({
  schema: z.object({
    mediaType: z.enum(["Image", "Vidéo"]),
    video: z.string(). optional(),
    image: z.string(). optional(),
    alt: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const videoSchema = defineCollection({
  schema: z.object({
    mediaType: z.enum(["podcast", "video"]),
    url: z.string(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
    description: z.string(),
    thumbnails: z.object({
      small: z.object({
        url: z.string(),
        width: z.number(),
        height: z.number(),
      }),
      medium: z.object({
        url: z.string(),
        width: z.number(),
        height: z.number(),
      }),
      standard: z.object({
        url: z.string(),
        width: z.number(),
        height: z.number(),
      }),
      highres: z.object({
        url: z.string(),
        width: z.number(),
        height: z.number(),
      })
    })
   
  }),
});


export const collections = {
  pricing, gallery, medias: videoSchema,
}
// 3. Export a single `collections` object to register your collection(s) 