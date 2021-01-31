import React from 'react'
import Info from './Info';
import Name from './Name';
import Percentage from './Percentage';
import Picture from './Picture';
import Popularity from './Popularity';
import Position from './Position';
import Votes from './Votes';

import css from "./candidate.module.css";

export default function Candidate({candidate, position}) {
  const {id, name, votes, percentage, popularity, previousVotes, previousPercentage} = candidate;
  const imageSource = `${id}.jpg`;
  return <div className={css.flexrow}> 
            <Position>{position}</Position>
            <Picture imageSource={imageSource} name={name} />
            <Info>
              <Name>{name}</Name>
              <Votes value={votes} previous={previousVotes} />
              <Percentage value={percentage} previous={previousPercentage} />
              <Popularity value={popularity} />
            </Info>
         </div>
}
