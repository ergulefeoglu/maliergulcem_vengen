var __ = erste.locale.__;

var ShowsView = require('./shows/shows-view');
var AboutView = require('./about/about-view');
var Sidebar = require('./sidebar/sidebar');
var SignIn = require('./sidebar/signin');
var SignUp = require('./sidebar/signup');
var Search = require('./search/search');

class MainView extends erste.TabBar {
    constructor(vm) {
        super();

        this.showsView = new ShowsView();
        this.aboutView = new AboutView();
        this.signIn = new SignIn();
        this.signUp = new SignUp();
        this.search = new Search();
        
        this.views = [this.showsView, this.search, this.search, this.search, this.signIn, this.aboutView];
        

        this.showsView.navBar.menuButtonHandler = () => vm.toggleSidebar();

        this.hasSidebar = true;

        this.sidebar = new Sidebar();
        this.sidebar.vm = vm;

        //this.sidebar.on('switchView', e => this.activateItemByName(e.view));
        this.sidebar.on('switchView', e => {
            var view;

            switch(e.view) {
                case 'Sign up':
                view = this.signUp;
                break;
                case 'Sign in':
                view = this.signIn;
                break;
                case 'About':
                view = this.aboutView;
                break;
                default:
                view = this.showsView;
            }
            vm.setCurrentView(view);

        }
        );
        this.sidebar.render(document.body);
        
    }

    onAfterRender() {
        super.onAfterRender();

        

        //this.activateItemByName('shows');
    };

    template_items() {
        return `
<tab-item class="active" data-view="showsView">Upcoming Events</tab-item><tab-item data-view="Search">Search by Genre</tab-item>


`;
    };

}


module.exports = MainView;
