import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('Profile status component', ()=>{
    test('status from props should be in state ', ()=>{
        const component = create (<ProfileStatus status={'teststatus'}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('teststatus')
    })
    test('span with status should be displayed', ()=>{
        const component = create (<ProfileStatus status={'teststatus'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('input with status should not be displayed', ()=>{
        const component = create (<ProfileStatus status={'teststatus'}/>)
        const root = component.root
        expect(()=>{
            let input = root.findByType('input')
        }).toThrow()
    })
    test('span contains correct status', ()=>{
        const component = create (<ProfileStatus status={'teststatus'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('teststatus')
    })
    test('input should be displayed in edit mode', ()=>{
        const component = create (<ProfileStatus status={'teststatus'}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input).not.toBeNull()
        expect(input.props.value).toBe('teststatus')
    })
    test('callback should be called', ()=>{
        const mockCallback = jest.fn()
        const component = create (<ProfileStatus status={'teststatus'}
                                                 updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})