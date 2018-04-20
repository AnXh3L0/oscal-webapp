import moment from 'moment'

import Room from './Room'

const TIME_FORMAT = 'HH:mm'

export default class Event {
  constructor (data = {}) {
    this.id = data.id
    this.start = data.start
    this.duration = data.duration
    this.title = data.title
    this.subtitle = data.subtitle
    this.abstract = data.abstract
    this.description = data.description

    this.type = data.type
    this.track = data.track || {}
    this.day = data.day || {}
    this.room = data.room || new Room()
    this.persons = data.persons || []
    this.links = data.links || []

    if (this.start && this.duration) {
      this.end = moment(this.start, TIME_FORMAT).add(moment.duration(this.duration)).format(TIME_FORMAT)
    }
  }
}
