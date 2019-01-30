import { Messenger } from './messenger.model';


export class User {

  constructor(
    
    public profile: {      
      interface: {
        greeting: string,
        description: string,
        fullname: string,
        category: string,
        url: string,
      },
      messengers: Array<Messenger>,
      links: Array<any>,
      design: {
        background: {
          color: string,
          imageUrl: string,
          type: string,
        },
        branding: boolean,
        photo: string,
        photoUrl: string,
      },
      widget: {
        color: string,
        device: string,
        position: string,
      },
      analytics: {
        facebook: string,
        google: string,
        yandex: string,
      },
    },
    public account: {
      avatar: string,
      avatarUrl: string,
      name: string,
      email: string,
      password: string,
      lang: string,
      subscribe: boolean,
    },

    public id?: number,

  ) { }
}