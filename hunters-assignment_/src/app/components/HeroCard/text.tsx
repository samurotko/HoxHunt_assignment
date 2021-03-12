import * as React from 'react'
import styled  from 'styled-components'


const TextStyle = styled.div`
overflow: hidden;
transition: 1s;
`

export const Text: React.FC<{text: String}> = ({ text }: { text: String } ) => {
    
  return(
    <div>
      <TextStyle>
        { text }
      </TextStyle>
    </div>
    )
}