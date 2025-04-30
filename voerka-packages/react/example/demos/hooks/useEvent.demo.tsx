/**
 * @author
 * @file useEvent.demo.ts
 * @fileBase useEvent.demo
 * @path packages\react\src\hooks\useEvent.demo.ts
 * @from
 * @desc
 * @example
 */

import { useApp } from '@/contexts'
import { useEvent } from '@/hooks/useEvent'
import { useState } from 'react'
export interface UseEventDemoProps {
    // value: any
}
export const UseEventDemo: React.FC<UseEventDemoProps> = () => {
    const [event, setEvent] = useState('custom')
    useEvent(event, () => {
        console.log(event)
    })
    const app = useApp()
    function sendCustomEvent() {
        app.emit(event)
    }
    return (
        <div>
            'UseEventDemo'
            <input value={event} onChange={(e) => setEvent(e.target.value)}></input>
            <button onClick={sendCustomEvent}>click me </button>
        </div>
    )
}

// 默认导出
export default UseEventDemo
