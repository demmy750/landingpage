import React from 'react'
import{ Navbar } from './navbar.js'
import { Coverpage } from './coverpage.js'
import { Partners } from './partners.js'
import {Secondpage} from './secondpage.js'
import { Articleflex } from './articleflex.js'
import {Calculator} from './calculator.js'
import { Content } from './content.js'
import { Reasons } from './reasons.js'

export const Main = () => {
    return(
        <div>
            <Navbar/>
            <Coverpage/>
            <Partners/>
            <Secondpage/>
            <Articleflex/>
            <Calculator/>
            <Content/>
            <Reasons/>
        </div>
    )
}
export default Main;