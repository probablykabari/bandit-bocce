import { faker } from "@faker-js/faker"
import type { models } from "./types/models"

const photos = [
  `https://images.unsplash.com/photo-1551871812-10ecc21ffa2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80`,
  `https://images.unsplash.com/photo-1530447920184-b88c8872?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
  `https://images.unsplash.com/photo-1581069700310-8cf2e1b6baf0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
  `https://images.unsplash.com/photo-1562802378-063ec186a863?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1c2hpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`
]

type Options = number | { min: number; max: number }

export class MockGenerator {
  private generateMocks<R>(method: () => R, count: Options) {
    return faker.helpers.multiple(method, { count })
  }

  message(): models.Message {
    return {
      id: faker.number.int(),
      message: faker.lorem.lines(),
      photos: faker.helpers.maybe(() => faker.helpers.arrayElements(photos, { min: 2, max: 4 }), { probability: 1 }),
      created_at: faker.date.recent(),
      user: {
        username: faker.internet.displayName(),
        display_name: faker.person.fullName(),
        profile_image: 'https://i.pravatar.cc/300'
      }
    }
  }

  team(): models.Team {
    return {
      id: faker.number.int(),
      name: faker.commerce.productName(),
      active: true
    }
  }

  teams(options: Options = 10) {
    return this.generateMocks(this.team, options)
  }

  messages(options: Options = 10) {
    return this.generateMocks(this.message, options)
  }
}
