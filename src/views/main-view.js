var __ = erste.locale.__;

var ShowsView = require('./shows/shows-view');
var Sidebar = require('./sidebar/sidebar');
var Search = require('./search/search');

class MainView extends erste.TabBar {
    constructor(vm) {
        super();

        this.showsView = new ShowsView();
        this.search = new Search();

        this.views = [this.showsView, this.search];

        this.showsView.navBar.menuButtonHandler = () => vm.toggleSidebar();
        this.search.navBar.menuButtonHandler = () => vm.toggleSidebar();
        this.vm = vm;
        this.hasSidebar = true;

    }

    onAfterRender() {
        super.onAfterRender();

        this.vm.setCurrentView(this.showsView);

    };

    template_items() {
        return `
<tab-item class="active" data-view="showsView">Upcoming Events</tab-item><tab-item data-view="Search">Search by Genre</tab-item>


`;
    };

}


module.exports = MainView;
