import { expectSaga } from 'redux-saga-test-plan'


it('fetches users', () => {
    const users = ['Jeremy', 'Tucker ']

    const api = {
        getUsers: () => users
    }

    return expectSaga(fetchUsersSaga, api)
        .put({ type: 'FETCH_USERS_SUCCESS', payload:users })
        .run()
})
