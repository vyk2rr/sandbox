import React from 'react'

const Thumbnail = () => (
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="http://lorempixel.com/400/200/sports/" alt="..." />
          <div className="caption">
            <h3>Thumbnail label</h3>
            <p>...</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    </div>
)

export default Thumbnail