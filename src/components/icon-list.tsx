import React, { PropTypes } from "react";

import { Icon } from "./icon";

const IconList = ({title, subTitle, list, children}) => {
    
    let getTitle = () => {
        if(title) {
            return (
                <div className="col align-center justify-center padding-x-sm">
                    <h2 className="margin-bottom-md">{title}</h2>
                    {subTitle ? <h4 className="max-width-800 margin-bottom-lg">{subTitle}</h4> : null}
                </div>
            )
        }
        return null;
    }

    return (
        <section className="container text-center margin-y-xl">
            {getTitle()}
            <div className="col-xs row-md">
                {
                    list.map((icon) => {
                        return <Icon key={icon.id} imgClass={icon.imgClass} label={icon.label} labelClass="font-size-lg" />
                    })
                }
            </div>
            {children}
        </section>

    );
};

IconList.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    list: PropTypes.array.isRequired
}

export { IconList };