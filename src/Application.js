var Sidebar = require('./views/sidebar/sidebar');
var MainView = require('./views/main-view');
var locale = require('./lib/locale');
var SignIn = require('./views/sidebar/signin');
var SignUp = require('./views/sidebar/signup');
var AboutView = require('./views/sidebar/aboutview');


class Application {
    constructor() {
        this.vm = new erste.ViewManager();

        var mainView = new MainView(this.vm);
        var signInView = new SignIn(this.vm);
        var signUpView = new SignUp(this.vm);
        var aboutView = new AboutView(this.vm);

        this.sidebar = new Sidebar();
        this.sidebar.render(document.body);

        this.sidebar.on('switchView', e => {
            var view;

            switch (e.view) {
                case 'Sign up':
                    view = signUpView;
                    break;
                case 'Sign in':
                    view = signInView;
                    break;
                case 'About':
                    view = aboutView;
                    break;
                default:
                    view = mainView;
            }

            this.vm.setCurrentView(view, true);
        });

        mainView.render(document.body);

        this.vm.setCurrentView(mainView);
    }
}

module.exports = new Application();
