/**
 * Created by revenage on 3/9/17.
 */
import {
    fetch,
    getAuthHeader,
    fetchMiddleware,
    getFullHeader
} from './api';

import url from './urls'

export const testData = () => fetch(url.data).then(fetchMiddleware);

