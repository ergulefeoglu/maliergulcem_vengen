var __ = erste.locale.__;

class PlaceView extends erste.View {
    constructor(vm) {
        super();

        this.className = 'place-view';

        this.navBar = new erste.NavBar({
            title: __('<img src="static/foto/logo3.png"/>'),
            hasMenuButton: true,
            hasBackButton: true
        });
    this.navBar.vm = vm;
    }

    template_content() {
        return `${this.navBar}       
<h3>KÜÇÜKÇİFTLİKPARK</h3>
<hr>
<br>
<h4>Gallery</h4><br>
<h4 class="upcoming"><hr>Upcoming Events</h4>
<br>
<button type="button" class="button1">Check Now</button><br>
<div class="div1">
<h4><hr>Contact</h4>
<p>Phone : (212) 123 45 67</p>
<p>Address : XYZ Mah. ABC Sok. No:156 Beşiktaş / İstanbul</p>
</div>
<button type="button" class="button2">Show On Map</button><br>
`
;
    }
}

module.exports = PlaceView; 