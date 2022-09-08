import { Messages } from '../helpers/messages'

export interface Invite {
  code: string,
  name: string,
  currentCourse: string,
  registered: string,
  purchasing?: boolean,
}

export interface InviteResponse {
  invite: Invite,
  messages: Messages
}
