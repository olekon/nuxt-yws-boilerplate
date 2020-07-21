export default async function ({ app, route }) {
    if(process.server) return;
    const auth = app.$auth;
    const authStrategy = auth.strategy.name;

    if(!auth.loggedIn && route.name === 'login' && authStrategy === 'instagram') {        
        await app.$api.loginInstagram(route.query.code);

        auth.setStrategy('local');
        await auth.fetchUser();

        window.location = auth.options.redirect.home;
    }

    if (auth.loggedIn && (authStrategy === 'facebook' || authStrategy === 'google')) {
        const token = auth.getToken(authStrategy).substr(7);
        
        try {
            await app.$api.loginSocial(authStrategy, token);        
            auth.setStrategy('local');

            await auth.fetchUser();
        } catch (e) {
            console.log(e);
            
        }
    }
}