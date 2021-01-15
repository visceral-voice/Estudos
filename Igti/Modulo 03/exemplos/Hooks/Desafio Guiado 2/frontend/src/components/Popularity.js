import React from 'react'

const star = {
  empty: "✰",
  full: "★"
};

const MAX_STAR = 10;

export default function Popularity({value}) {
  const startFull = star.full.repeat(value);
  const starEmpty = star.empty.repeat(MAX_STAR - value);
  const starPopularity = `${startFull}${starEmpty}`;
  return (
    <div style={{fontSize: "2rem", color: "#ff9f1a"}}>
        {starPopularity}
    </div>
  )
}
