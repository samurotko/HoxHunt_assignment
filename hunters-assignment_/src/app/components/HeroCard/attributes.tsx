import * as React from 'react'
import { Attributes, Elements } from './types'
import styled from 'styled-components'
import { Fire as FireSvg} from '@styled-icons/heroicons-solid'
import { Water as WaterSvg } from '@styled-icons/ionicons-solid'
import { Air as AirSvg } from '@styled-icons/material-rounded'


const AttributeStyleAll = styled.div`
grid-area: data;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
geid-template-rows: 1fr 1fr 1fr;
text-align: center;
`

const AttributeStyleHide = styled.div`
grid-area: data;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
geid-template-rows: 1fr;
text-align: center;
`

const AirIcon = styled(AirSvg)`
color: LightSkyBlue;
height: 20px;
width: 20px;
`

const FireIcon = styled(FireSvg)`
color: FireBrick;
height: 20px;
width: 20px;
`

const WaterIcon = styled(WaterSvg)`
color: DarkSlateBlue;
height: 20px;
width: 20px;
`

const Data = styled.div`
grid-area: data;
background: radial-gradient(ellipse, #750099, #3b004d );
padding: 10px;
border-top 2px solid #c29ebd;
border-bottom 2px solid #c29ebd;
color: LightCyan;
`

export const Attribute: React.FC<{values:Attributes}> = ( {values}: {values:Attributes} ) => {

const [resistance, setResistance] = React.useState(null)
const [weakness, setWeakness] = React.useState(null)

React.useEffect(() => {
  uppdateResistance(values.resistance)
  uppdateWeakness(values.weakness)
},[])


const uppdateResistance = (value: Elements) => {
  switch (value) {
    case 'Fire':
      setResistance(
      <FireIcon/>
      )
      break
    case 'Water':
      setResistance(
        <WaterIcon/>
      )
      break
    case 'Air':
      setResistance(
        <AirIcon/>
      )
      break
    case 'Earth':
      break
    default:
      console.log('setting res to null')
      setResistance(null)
      break
  }
}

const uppdateWeakness = (value: Elements) => {
  switch (value) {
    case 'Fire':
      setWeakness(
        <FireIcon/>
        )
        break
    case 'Water':
      setWeakness(
        <WaterIcon/>
      )
      break
    case 'Air':
      setWeakness(
        <AirIcon/>
      )
      break
    case 'Earth':
      break
    default:
      console.log('setting wekness to null')
      setWeakness(null)
      break
  }
}
//<FireSvg color = "FireBrick" />
  return(
  <div>
    <Data>
      <div>
        <AttributeStyleAll>
          <div>
            <i>health </i>
            <br></br>
            {values.healthpoints}
          </div>
          <div>
            <i> recistance </i>
            <br></br>
            {resistance}
          </div>
          <div>
            <i> weakness</i>
            <br></br> 
            {weakness}
          </div>
          <div>
            <i> strength</i>
            <br></br>
            {values.strength}
          </div>
          <div>
            <i> inteligence</i>
            <br></br>
            {values.intelligence}
          </div>
          <div>
            <i> stamina </i>
            <br></br>
            {values.stamina}
          </div>
          <div>
            <i> mana </i>
            <br></br>
            {values.mana}
          </div>
          <div>
            <i> agility </i>
            <br></br>
            {values.agility}
          </div>
          <div>
            <i> speed </i>
            <br></br>
            {values.speed}
          </div>
        </AttributeStyleAll>
      </div>
    </Data>
  </div>
  )
}