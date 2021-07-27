class SearchBar
{
    constructor(containerId, onChange){
        this.containerId = containerId;
        this.onChange = onChange;
        this.indexGenerator = new IndexGenerator("SearchBar");
        this.searchTextId = this.indexGenerator.append("searchText");
        
    }

    render(){
        document.getElementById(this.containerId).innerHTML = this.fillHtml();

        this.searchTextElement = document.getElementById(this.searchTextId);

        this.searchTextElement.addEventListener('keyup', this.onSearchKeyUp);
    }

    getValue() {
        return this.searchTextElement.value;
    }

    onSearchKeyUp = () => {
        this.onChange();
    }

    fillHtml(){
        var html = `Enter search Text: <input type='text' id='${this.searchTextId}' />`;

        return html;
    }
}