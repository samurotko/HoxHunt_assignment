import * as React from 'react'
import { Skill as SkillType } from './types'
import styled from 'styled-components'
import { Fire as FireSvg } from '@styled-icons/heroicons-solid'
import { BrightnessHigh as PlasmaSvg } from '@styled-icons/material-rounded'
import { FistRaised as PhysicalSvg, HeadSideVirus as PsychicSvg } from '@styled-icons/fa-solid'
import { TElement } from '../../../server/types/element'


const Skillstyle = styled.div`
grid-area: stats;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
geid-template-rows: 1fr;
color: LightCyan;
text-align: center;
align-content: center;
`

const FireIcon = styled(FireSvg)`
color: FireBrick;
height: 20px;
width: 20px;
`

const PlasmaIcon = styled(PlasmaSvg)`
color: DarkGoldenRod;
height: 20px;
width: 20px;
`

const PhysicalIcon = styled(PhysicalSvg)`
color: Tan;
height: 20px;
width: 20px;
`

const PsychicIcon = styled(PsychicSvg)`
color: MediumPurple;
height: 20px;
width: 20px;
`
const Grid = styled.div`
border-left: 1px solid #c29ebd;
border-right: 1px solid #c29ebd;
`

export const Skill: React.FC<SkillType> = ( {name, damage, element}: SkillType ) => {

  const [elementIcon, setElementIcon] = React.useState(null)

  React.useEffect(() => {
    uppdateElement(element)
  },[])

  const uppdateElement = (value: TElement) => {
    
    switch (value) {
      case 'Fire':
        setElementIcon(
          <FireIcon/>
        )
        break
      case 'Physical':
        setElementIcon(
          <PhysicalIcon/>
        )
        break
      case 'Psychic':
        setElementIcon(
          <PsychicIcon/>
        )
        break
      case 'Plasma':
        setElementIcon(
          <PlasmaIcon/>
        )
        break
      default:
        console.log('setting element to null')
        setElementIcon(null)
        break
    }
  }

  return(
    <div>
      <Skillstyle>
        <Grid>
          <div>{name}</div>
        </Grid>
          <div>{damage}</div>
        <Grid>
          <div>{elementIcon}</div>
        </Grid>
      </Skillstyle>
    </div>
    )
}