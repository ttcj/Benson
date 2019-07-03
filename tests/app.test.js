import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../client/App'



describe('Component', ()=>{
    describe('App', ()=>{
        test('it should render', ()=>{
            const wrapper = shallow(<App />)
            expect(wrapper.find("div")).hasClass('landingDiv').tobe(true)
        })
    })
})

