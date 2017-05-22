import React from 'react';

const ThemedDecorations = (props) => {
  const themedParties = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      className: props.theme
    })
  })

  return(
    <div>
      {themedParties}
    </div>
  )
}

export default ThemedDecorations
