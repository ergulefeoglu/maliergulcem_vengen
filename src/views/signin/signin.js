var __ = erste.locale.__;

class SignIn extends erste.View {
    constructor() {
        super();

        this.className = 'signin';

    }
    template_content() {
        return `        
<hr>
<h4>${__('About Us')}</h4>
<hr><br>
<img src="static/foto/logo1.png"/>

<h5>${__('Version 1.sdsad0.0')}</h5>

<img class="img1" src="static/foto/logo2.png"/>
<br><hr>
<div>
<p>${__('All rights reservehadilanaadasd')}</p>
<br>
<p>${__('© 2017 VenGen Media')}</p>
</div>
`
;
    }
}

module.exports = SignIn;