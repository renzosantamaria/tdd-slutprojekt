import { IMeetup } from "../store/meetup/meetup.types"
import { IUser } from "../store/user/user.types"

export let meetups: IMeetup[] = [
  {
    id: 1,
    title: 'meetup 1',
    startDate: new Date('2023-05-18T17:30:00'),
    endDate: new Date('2023-05-19T15:00:00'),
    hostName: 'user 1',
    description:
      'desc 1',
    address: 'address 1',
    attendees: [],
    attendeeLimit: 1,
    comments: [
      { name: 'user 2', date: new Date('2021-05-17T10:15:00'), content: "great meetup" }
    ],
    rating: [],
  },
  {
    id: 2,
    title: 'meetup 2',
    startDate: new Date('2022-06-01T07:00:00'),
    endDate: new Date('2022-06-01T08:00:00'),
    hostName: 'user 2',
    description:
      'desc 2',
    address: 'address 2',
    attendees: ['user 2'],
    attendeeLimit: 2,
    comments: [
      { name: 'user 1', date: new Date('2021-05-30T21:30:00'), content: "bad location" }
    ],
    rating: [],
  },
  {
    id: 3,
    title: 'meetup 3',
    startDate: new Date('2020-07-04T19:40:00'),
    endDate: new Date('2020-07-04T19:55:00'),
    hostName: 'user 3',
    description:
      'desc 3',
    price: 125,
    address: 'address 3',
    attendees: ['user 1', 'user 2'],
    attendeeLimit: 3,
    comments: [],
    rating: [],
  },
  {
    id: 4,
    title: 'meetup 4',
    startDate: new Date('2060-08-06T04:10:00'),
    endDate: new Date('2060-08-07T10:10:00'),
    hostName: 'user 4',
    price: 50,
    description:
      'desc 4',
    address: 'address 4',
    attendees: ['user 1', 'user 3'],
    attendeeLimit: 4,
    comments: [],
    rating: [],
  }
]

export let users: IUser[] = [
  {
    id: 1,
    name: 'user 1',
    email: 'user1@email.com',
    password: 'password1',
    attendingMeetupsIds: [],
    hostingMeetupsIds: [1]
  },
  {
    id: 2,
    name: 'user 2',
    email: 'user2@email.com',
    password: 'password2',
    attendingMeetupsIds: [2],
    hostingMeetupsIds: [2]
  },
  {
    id: 3,
    name: 'user 3',
    email: 'user3@email.com',
    password: 'password3',
    attendingMeetupsIds: [1,2],
    hostingMeetupsIds: [3]
  },
  {
    id: 4,
    name: 'user 4',
    email: 'user4@email.com',
    password: 'password4',
    attendingMeetupsIds: [1,3],
    hostingMeetupsIds: [4]
  },
]

export let usersDefaultState: IUser[] = [
  {
    id: 1,
    name: 'user 1',
    email: 'user1@email.com',
    password: 'password1',
    attendingMeetupsIds: [],
    hostingMeetupsIds: [1]
  },
  {
    id: 2,
    name: 'user 2',
    email: 'user2@email.com',
    password: 'password2',
    attendingMeetupsIds: [2],
    hostingMeetupsIds: [2]
  },
  {
    id: 3,
    name: 'user 3',
    email: 'user3@email.com',
    password: 'password3',
    attendingMeetupsIds: [1,2],
    hostingMeetupsIds: [3]
  },
  {
    id: 4,
    name: 'user 4',
    email: 'user4@email.com',
    password: 'password4',
    attendingMeetupsIds: [1,3],
    hostingMeetupsIds: [4]
  },
]

export const resetUsers = () => {
  users = {...usersDefaultState}
}
export const resetMeetups = () => {
  meetups = [
    {
      id: 1,
      title: 'meetup 1',
      startDate: new Date('2022-05-18T17:30:00'),
      endDate: new Date('2022-05-19T15:00:00'),
      hostName: 'user 1',
      description:
        'desc 1',
      address: 'address 1',
      attendees: [],
      attendeeLimit: 1,
      comments: [
        { name: 'user 2', date: new Date('2021-05-17T10:15:00'), content: "great meetup" }
      ],
      rating: [],
    },
    {
      id: 2,
      title: 'meetup 2',
      startDate: new Date('2022-06-01T07:00:00'),
      endDate: new Date('2022-06-01T08:00:00'),
      hostName: 'user 2',
      description:
        'desc 2',
      address: 'address 2',
      attendees: ['user 2'],
      attendeeLimit: 2,
      comments: [
        { name: 'user 1', date: new Date('2021-05-30T21:30:00'), content: "bad location" }
      ],
      rating: [],
    },
    {
      id: 3,
      title: 'meetup 3',
      startDate: new Date('2020-07-04T19:40:00'),
      endDate: new Date('2020-07-04T19:55:00'),
      hostName: 'user 3',
      description:
        'desc 3',
      price: 125,
      address: 'address 3',
      attendees: ['user 1', 'user 2'],
      attendeeLimit: 3,
      comments: [],
      rating: [],
    },
    {
      id: 4,
      title: 'meetup 4',
      startDate: new Date('2060-08-06T04:10:00'),
      endDate: new Date('2060-08-07T10:10:00'),
      hostName: 'user 4',
      price: 50,
      description:
        'desc 4',
      address: 'address 4',
      attendees: ['user 1', 'user 3'],
      attendeeLimit: 4,
      comments: [],
      rating: [],
    }
  ]
}
