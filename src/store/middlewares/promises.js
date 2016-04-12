/**
 * Created by reven on 12.04.2016.
 */
const middleware = store => next => action => {

    if (action.type !== 'PROMISE') {
        return next(action);
    }

    const [startAction, successAction, failureAction] = action.actions;

    store.dispatch({
        type: startAction
    });

    return action.promise.then(
        (data) => store.dispatch({
            type: successAction,
            data
        }),
        (error) => store.dispatch({
            type: failureAction,
            error
        })
    );
};

export default middleware;