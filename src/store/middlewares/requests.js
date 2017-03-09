/**
 * Created by revenage on 3/9/17.
 */
import {
    fetchMiddleware,
} from './api';

import url from './urls'

export const testData = () => fetch(url.data).then(fetchMiddleware);

