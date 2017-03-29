var __ = erste.locale.__;

var PlaceView = require('../place/place-view');

class DetailView extends erste.View {
    constructor(show) {
        super();
        this.vm = new erste.ViewManager();
        this.className = 'detail-view';
        this.show = show;
    }

    get supportsBackGesture() {
        return true;
    }

    onTap(e) {
        var show = this.show;
        var placeView = new PlaceView(show);
        placeView.vm = this.vm;
        this.vm.pull(placeView, true);
    };

    get events() {
        return {
            'tap': {
                '.buttonPlace': this.onTap
            }
        }
    }

    template_content() {
        var imgFile = this.show['images']['fanart'].split('/').slice(-1);

        var show = this.show;

        return `
    <div class="info">
        <p><button class="buttonArtist" type="button">${show.title}</button></p>
        <hr>
        <img class="image1" src="static/img/poster/${imgFile}"/>
        <hr>
        <p>${show.date}</p>
        <p>${show.day}</p>
        <p><button class="buttonPlace" type="button">${show.place}</button></p>
        <hr>
        <p class="description">${show.description}</p>
        <hr>
    </div>
    <button class="button1" type="button" onclick="location.href='http://www.biletix.com/';">Get Ticket</button>
`;
    }
}

module.exports = DetailView;
