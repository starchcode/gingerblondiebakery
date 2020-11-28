import React from "react";
import { IgImg } from "../igImg/IgImg";
import './igContainer.css'

export class IgContainer extends React.Component {
  render() {
    return (
      <div className="igContainer">
        {this.props.data.map(img => {
          if (img.media_type==="IMAGE"){
        return <IgImg
            key={img.id}
            src={img.media_url}
            link={img.permalink}
            alt=''
            />
          } else {return null}
        })}
      </div>
    );
  }
}
