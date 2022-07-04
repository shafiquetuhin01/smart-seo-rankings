import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title} - Smart SEO Rankings</title>
        </Helmet>
    );
};

export default PageTitle;