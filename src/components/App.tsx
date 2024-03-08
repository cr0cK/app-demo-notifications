import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { StoreAlerts } from '../stores/StoreAlerts'
import AlertContainer from './AlertContainer'

export interface IAppProps {
  storeAlerts: StoreAlerts
}

function App(props: IAppProps) {
  useEffect(() => {
    /* TODO */
  }, [])

  return <>{/* TODO */}</>
}

export default observer(App)
