var __ = erste.locale.__;
var MapView = require('../map/map-view');

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
        this.supportsBackGesture = true; 
    }

    onActivation() {
        this.navBar.vm = this.vm;
    }

    onMapTap(e) {
        var mapView = new MapView();
        mapView.vm = this.vm;
        this.vm.pull(mapView, true);
    };

    onDetailTap(e) {
        var mapView = new MapView();
        mapView.vm = this.vm;
        this.vm.pull(mapView, true);
    }

    get events() {
        return {
            'tap': {
                '.button1': this.onDetailTap,
                '.button2': this.onMapTap
            }
        }
    }

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