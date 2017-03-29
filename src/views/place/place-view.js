var __ = erste.locale.__;

class PlaceView extends erste.View {
    constructor(show) {
        super();
        this.vm = new erste.ViewManager();
        this.className = 'place-view';
        this.show = show;

        this.navBar = new erste.NavBar({
            title: __('<img src="static/foto/logo3.png"/>'),
            hasMenuButton: true,
            hasBackButton: true
        });

        this.hasSidebar = true;
    }

    get supportsBackGesture() {
        return true;
    }

    onActivation() {
        if (cfg.PLATFORM == 'device')
            StatusBar.styleLightContent();
    }

    onAfterRender() {
        this.vm = new erste.ViewManager(this.el);
        this.navBar.vm = this.vm;
    };

    template_content() {

        var show = this.show;

        return `${this.navBar}       
<h3>${show.place}</h3>
<hr>
<br>
<h4>Gallery</h4><br>
<img class="underCons" src="static/foto/underCons.png"/>
<h4 class="upcoming"><hr>Upcoming Events</h4>
<br>
<button type="button" class="button1">Check Now</button><br>
<div class="div1">
<h4><hr>Contact</h4>
<p>Phone : ${show.phone}</p>
<p>Address : ${show.address}</p>
</div>
<button type="button" class="button2">Show On Map</button><br>
`
;
    }
}

module.exports = PlaceView; 