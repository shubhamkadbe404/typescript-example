import React from "react";

const BaseComponent:React.FC<
{
    title:string,
    name:string}> = (props) => {
    const {title,name} = props;
    // let title:string = 'Base Component';
    return(
        <div className="maindiv">
            <h1>
                {title}
            </h1>
            <h2>
                {name}
            </h2>
        </div>
    )
}

export default BaseComponent;