class Section {
    constructor({ items, renderer } , classSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = classSelector;
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);   
        });
    }

    addItem(element) {
        //takes a DOM element and adds it to the container.
        this._container.prepend(element);
    }
}

export default Section;