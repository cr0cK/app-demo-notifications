import { randCat, randNumber, randUuid, seed } from '@ngneat/falso'
import { ISendAlert } from '../types'

export class AlertsService {
  private _started = false

  constructor() {
    seed('some-constant-seed')
  }

  sendAlert() {
    /* TODO */
  }

  start() {
    /* TODO */
  }

  stop() {
    /* TODO */
  }
}
