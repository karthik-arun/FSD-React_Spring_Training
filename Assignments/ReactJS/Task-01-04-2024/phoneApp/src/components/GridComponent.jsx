import React from 'react'
import Column1Component from './Column1Component'
import Column2Component from './Column2Component'
import Column3Component from './Column3Component'
export default function GridComponent() {
  return (
    <div className='container-fluid'>
          <div className="text-center p-3 m-0 border-0 bd-example m-0 border-0 bd-example-row">
      <div className="row">
        <div className="col">
          <Column1Component/>
        </div>
        <div className="col">
          <Column2Component/>
        </div>
        <div className="col">
          <Column3Component/>
        </div>
      </div>
    </div>
    </div>
  )
}
