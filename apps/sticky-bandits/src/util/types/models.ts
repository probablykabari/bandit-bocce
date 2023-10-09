export namespace models {
  export interface User {
    username: string
    display_name: string
    profile_image: string
  }

  export interface Message {
    id: number
    message: string
    photos: string[] | undefined
    created_at: Date
    user: User
  }

  interface Address {
    name: string
    line_1?: string
    line_2?: string
    city: string
    state: string
  }

  export interface Team {
    id: number
    name: string
    active: boolean
  }

  export interface SubRequest {
    id: number
    team_id: number
    date: Date
    times: string[]
    note?: string
    location: Address
    status: 'open' | 'closed' | 'canceled'
    number_needed: number
  }

  export interface SubRequestResponse {
    id: number
    sub_request_id: number
    status: 'rescinded_by_user' | 'selected'
  }
}
