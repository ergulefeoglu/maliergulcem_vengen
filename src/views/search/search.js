var __ = erste.locale.__;

class Search extends erste.View {
    constructor() {
        super();

        this.className = 'search';

        this.navBar = new erste.NavBar({
            title: __('<img src="static/foto/logo3.png"/>'),
            hasMenuButton: true,
            hasBackButton: true
        });

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
        return `
        ${this.navBar}    
<div>
<p>House <input type="checkbox" class="checkbox1" name="music" value="House"></p>
<hr>
<p>Rock <input type="checkbox" class="checkbox2" name="music" value="Rock"></p>
<hr>
<p>Pop <input type="checkbox" class="checkbox3" name="music" value="Pop"></p>
<hr>
<p>Latin House <input type="checkbox" class="checkbox4" name="music" value="Latin House"></p>
<hr>
<p>Hip-hop <input type="checkbox" class="checkbox5" name="music" value="Hip-hop"></p>
<hr>
<p>Dubstep <input type="checkbox" class="checkbox6" name="music" value="Dubstep"></p>
<hr>
<p>Country <input type="checkbox" class="checkbox7" name="music" value="Country"></p>
<hr>
<p>Drum and Bass <input type="checkbox" class="checkbox8" name="music" value="Drum and Bass"></p>
<hr>
<p>80s <input type="checkbox" class="checkbox9" name="music" value="80s"></p>
<hr>
<p>90s <input type="checkbox" class="checkbox10" name="music" value="90s"></p>
<hr>
<p>R&B <input type="checkbox" class="checkbox11" name="music" value="R&B"></p>
<hr>
<p>Others <input type="checkbox" class="checkbox12" name="music" value="Others"></p>
</div>
<button type="button">Show Events</button>
`
;
    }
}

module.exports = Search;
