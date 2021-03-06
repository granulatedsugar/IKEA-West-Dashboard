import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://ikea.com" target="_blank" rel="noopener noreferrer">IKEA</a>
        <span className="ml-1">&copy; {(new Date().getFullYear())} IKEA West Dashboard</span>
      </div>
      <div className="mfs-auto">
        {/* <span className="mr-1">Designed {' & '} Developed by</span> */}
        <a href="https://github.com/granulatedsugar" target="_blank" rel="noopener noreferrer">NIRO</a>&copy;
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
