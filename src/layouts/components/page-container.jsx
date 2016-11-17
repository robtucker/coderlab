import React,  { PropTypes } from 'react';

import { NextPage } from "./next-page";

const PageContainer = ({title, children, nextPageUrl, nextPageLabel}) => (
    <div>
        <section className="container margin-y-xl">
            {title && <h2 className="text-xs-center margin-bottom-md">{title}</h2>}
            {children}
        </section>
        {nextPageUrl && nextPageLabel && <NextPage to={nextPageUrl} label={nextPageLabel} />}
    </div>
);

PageContainer.propTypes = {
    title: PropTypes.string
}

export { PageContainer }
