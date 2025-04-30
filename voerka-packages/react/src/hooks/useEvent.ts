import { useEffect } from 'react'
import { FlexEventSubscriber } from 'flex-tools/events/flexEvent'
import { IAppEvent } from '@voerka/core'
import { useApp } from '../contexts'

export type AppEventListener<P = any> = (event: IAppEvent<P>) => void

/**
 *
 * 在组件中订阅应用事件
 *
 * @example
 *  useEvent<Payload>("event",(event)=>{
 *  })
 *
 */
export function useEvent<P = any>(event: string, listener?: AppEventListener<P>, deps?: any[]) {
    if (typeof listener !== 'function') return
    const app = useApp()
    useEffect(() => {
        const subscriber = app.on(event, listener, { objectify: true }) as FlexEventSubscriber
        return () => {
            subscriber.off()
        }
    }, deps)
}
