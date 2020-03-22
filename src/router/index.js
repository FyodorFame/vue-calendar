import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@okta/okta-vue';

import App from '../App'

Vue.use(Auth, {
    issuer: 'https://dev-796999-admin.okta.com//oauth2/default',
    client_id: '0oa4o7am3UCkZIqGQ4x6',
    redirect_uri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email'
})

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'App',
          component: App
        },
        {
          path: '/implicit/callback',
          component: Auth.handleCallback()
        },
    ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router