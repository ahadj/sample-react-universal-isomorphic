import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import React from 'react';

import { routes } from './routes';

export default function (req, res, next) {
    match({ routes, location: req.url }, (err, redirectLocation, props) => {
        if (err) {
            res.status(500).send(err.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (props) {
            const markup = renderToString(<RouterContext {...props} />);
            res.render('index', { markup });
        } else {
            res.sendStatus(404);
        }
    });
}
