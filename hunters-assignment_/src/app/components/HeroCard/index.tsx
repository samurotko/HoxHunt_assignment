// It is your job to implement this. More info in README

import * as React from 'react'
import { IHeroCardProps } from './types'
import styled from 'styled-components'
import { Skill } from './skill'
import { Attribute } from './attributes'
import { Text } from './text'


const Card = styled.div`
display: grid;
width: 250px;
background: radial-gradient(ellipse, #c29ebd, #9d6295);
grid-template-columnts: 300px;
grid-template-rows: 210px 0px 56px 140px;
grid-template-areas: "image" "text" "data" "stats";
border-radius: 18px;
box-shadow 10px 10px 20px rgba(0,0,0,0.5);
margin: 20px;
transition: all 1s ease-in-out;
cursor: pointer;
overflow: hidden;
font-family: "Calibri Light";


&:hover {
  transform: scale(1.1);
  grid-template-rows: 210px 160px 138px 140px;
  box-shadow 5px 5px 10px rgba(0,0,0,0.5);
  transition: all 1s;
}
`


const TextStyle = styled.div`
grid-area: text;
margin-right: 20px;
margin-left: 20px;
margin-top: 5px;
padding: 10px;
font-size: 15px;
text-align: center;
`

const Stats = styled.div`
grid-area: stats;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
background: radial-gradient(ellipse, #26004d, #001147);
`

const Skillstyle = styled.div`
grid-area: stats;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
geid-template-rows: 1fr;
color: LightCyan;
text-align: center;
`
const Elements = styled.div`
display: flex;
allign-items: centre;
justify-content: centre;
flex-direction: column;
padding: 10px;
border-top 2px solid #c29ebd;
`
const Title = styled.div`
grid-area: image;
text-align: center;
justify-content: centre;
font-size: 50px;
font-family: "Copperplate", Fantasy;
color: LightCyan;
text-shadow: 6px 6px 4px rgba(0,0,0,0.8);
`

export const HeroCard: React.FC<IHeroCardProps> = (values:IHeroCardProps) => {

  const Image = styled.div`
  background: url(${values.imgUrl});
  grid-area: image;
  border-top-left-radius 12px;
  border-top-right-radius 12px;
  background-size: cover;
  transition: 0.5s ease;
  border-bottom 2px solid #c29ebd;

  &:hover {
    transform: scale(1.1);
  }
  `

  return (
    <div>
      <Card>
        <Image>
          <Title>
            <div>{values.name}</div>
          </Title>
        </Image>  
        <TextStyle>
          <Text text={values.description}/>
        </TextStyle>
        <Attribute values={values.attributes}/>
        <Stats>
          <Elements>
            <Skillstyle>
              <div><b>skill</b></div>
              <div><b>damage</b></div>
              <div><b>element</b></div>
            </Skillstyle>  
              {values.skills.map(s => {
                return(         
                  <div key={s.ID}>
                  <Skill name={s.name} damage={s.damage} element={s.element} ID={s.ID}/>   
                  </div>
                ) 
              })}  
          </Elements>
        </Stats>
      </Card>  
    </div>
  )
}
