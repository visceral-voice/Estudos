import React from 'react'
import Info from './Info';
import Name from './Name';
import Percentage from './Percentage';
import Picture from './Picture';
import Position from './Position';
import Votes from './Votes';

export default function Candidate({candidate, position}) {
  const {id, name, votes, percentage} = candidate;
  const imageSource = `${id}.jpg`;
  return <div> 
            <Position>{position}</Position>
            <Picture imageSource={imageSource} name={name} />
            <Info>
              <Name>{name}</Name>
              <Votes>{votes}</Votes>
              <Percentage>{percentage}</Percentage>
            </Info>
         </div>
}
