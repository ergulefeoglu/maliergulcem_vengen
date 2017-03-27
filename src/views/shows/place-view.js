var __ = erste.locale.__;

class DetailView extends erste.View {
    constructor(show) {
        super();
        this.vm = new erste.ViewManager();
        this.className = 'place-view';
        this.show = show;
    }

    get supportsBackGesture() {
        return true;
    }

    onTap(e) {
        var signUpView = new SignUp();
        signUpView.vm = this.vm;
        this.vm.setCurrentView(signUpView);
    };


    template_content() {
        var imgFile = this.show['images']['fanart'].split('/').slice(-1);

        var show = this.show;

        return `
    <div class="info">
        <p>${show.title}</p>
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

    get events() {
        return {
            'tap': {
                '.detail-view': this.onTap
            }
        };
    };
}

module.exports = PlaceView;
