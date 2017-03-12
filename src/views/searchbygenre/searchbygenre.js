var __ = erste.locale.__;

class SearchByGenre extends erste.View {
    constructor() {
        super();

        this.className = 'searchbygenre';

    }
    template_content() {
        return `        
<hr>
<h4>${__('About Ussdads')}</h4>

<h5>${__('Version 1.0.0')}</h5>

<br><hr>
<div>
<p>${__('All rights reserved')}</p>
<br>
<p>${__('© 2017 VenGen Media')}</p>
</div>
`
;
    }
}

module.exports = SignUpView;
