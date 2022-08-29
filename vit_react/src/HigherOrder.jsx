import React from "react"

export  function HigherOrder(component) {
  const C = component
  return function(props){
    return (
            <C test="hello" {...props} />
    )
   }
}
