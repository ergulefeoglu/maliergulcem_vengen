class DetailView extends erste.View {
    constructor(show) {
        super();

        this.className = 'detail-view';
        this.show = show;
    }

    get supportsBackGesture() {
        return true;
    }

    onTap(e) {
        console.log(`tapping ${this.show.title}`);
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
        <p>${show.place}</p>
        <hr>
        <p class="description">${show.description}</p>
        <hr>
    </div>
    <button class="button1" type="button">Get Ticket</button>
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

module.exports = DetailView;
