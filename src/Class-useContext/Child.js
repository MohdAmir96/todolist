import React from 'react'
import AmirContext from '../Context'
function Child() {
    const appTheme = React.useContext(AmirContext)
  return (
    <div>
      {appTheme}
    </div>
  )
}

export default Child
