import React from 'react'
import CountUp from "react-countup";

export default function Percentage({value, previous}) {
  return (
    <CountUp
      start={previous}
      end={value}
      duration={0.6}
      decimals={2}
      decimal=","
      suffix=" %"
    >
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>
  )
}