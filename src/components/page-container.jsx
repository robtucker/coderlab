import React,  { PropTypes } from 'react';
import { Footer } from "./footer";

//import { NextPage } from "./next-page";

const PageContainer = ({title, children, nextPageUrl, nextPageLabel}) => (
    <div>
        <section className="container margin-y-xl">
            {children}
             
        </section>
        <Footer />
    </div>
);

PageContainer.propTypes = {
    title: PropTypes.string
}

export { PageContainer }

//        {nextPageUrl && nextPageLabel && <NextPage to={nextPageUrl} label={nextPageLabel} />}
