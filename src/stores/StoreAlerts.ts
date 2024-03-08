import { action, computed, makeObservable, observable } from 'mobx'
import { IAlert } from '../types'
import { isSendAlertMessage } from './typeguards'

export class StoreAlerts {
  public bound = false

  public $alerts = new Set<IAlert>()

  constructor() {
    makeObservable(this, {
      $alerts: observable,
      alerts: computed,
      addAlert: action
    })

    this.bindPostMessages()
  }

  bindPostMessages() {
    // window.addEventListener('message', /* TODO */)
  }

  unbindPostMessage() {
    /* TODO */
  }

  // action
  addAlert(alert: IAlert): void {
    /* TODO */
  }

  // computed
  get alerts(): IAlert[] {
    /* TODO */
  }

  _addAlertHandler(event: MessageEvent) {
    if (!isSendAlertMessage(event.data)) {
      return
    }

    /* TODO */
  }
}
