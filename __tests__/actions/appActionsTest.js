import actionTypes from '../../app/config/actionTypes';
import * as appActions from '../../app/actions/appActions';

describe('Common app actions', () => {
	it('should create an action when an error is aknowledged', () => {
		let expectedAction = {
			type: actionTypes.APP_ERROR_REMOVE
		}
		expect(appActions.errorRemove()).toEqual(expectedAction)
	})
})
