class ListItem extends erste.Component {
    constructor(show) {
        super();

        this.show = show;
    }

    template() {
        var imgFile = this.show['images']['fanart'].split('/').slice(-1);

        return `
<list-item id="${this.id}" data-show-id="${this.show['_id']}"
style="background-image: url(static/img/cover/${imgFile})">
    <show-title>${this.show['place']}</show-title>
    <show-title><br>${this.show['date']}</show-title>
    <show-title><br><br>${this.show['title']}</show-title>
</list-item>
<br>
`;
    };

}

module.exports = ListItem;
