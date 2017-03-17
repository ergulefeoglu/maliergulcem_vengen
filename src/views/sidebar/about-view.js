var __ = erste.locale.__;

class AboutView extends erste.View {
    constructor(vm) {
        super();

        this.className = 'about-view';

        this.navBar = new erste.NavBar({
            title: __('<img class="img1" src="static/foto/logo3.png"/>'),
            hasMenuButton: true,
            hasBackButton: true
        });
    this.navBar.vm = vm;
    }
    
    template_content() {
        return `${this.navBar}        
<hr>
<h4>${__('About Us')}</h4>
<br><hr><br>
<img class="img2" src="static/foto/logo1.png"/>

<h5>${__('Version 1.0.0')}</h5>

<img class="img3" src="static/foto/logo2.png"/>
<br><hr>
<div class="div1">
<p>${__('All rights reserved')}</p>
<br>
<p>${__('© 2017 VenGen Media')}</p>
</div>
`
;
    }
}

module.exports = AboutView;
