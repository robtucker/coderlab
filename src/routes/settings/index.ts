import { injectReducer } from "../../store";

export const SettingsRoutes = (store) => ({
    path: '/settings',
    getComponent(nextState, cb) {
        require.ensure([],(require) => {

            const SettingsContainer = require('./settings.container').SettingsContainer;
            const reducer = require('./settings.reducer').settingsReducer;

            injectReducer(store, { key: 'settings', reducer });

            cb(null, SettingsContainer)
        })
    }
})
