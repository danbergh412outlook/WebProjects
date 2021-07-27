class Index
{
    constructor(containerId) {
        this.containerId = containerId;
        
        this.resultTable = new ResultTable("resultTableContainer");
        this.searchBar = new SearchBar("searchBarContainer", this.onSearchChange);
    }

    onSearchChange = () => {
         this.resultTable.filter(this.searchBar.getValue());
    }

    async render(){
        document.getElementById(this.containerId).innerHTML = this.fillHtml();

        this.searchBar.render();

        await this.resultTable.render(this.searchBar.getValue());
        
    }
    fillHtml(){
        var html = `
            <div id='searchBarContainer'>
            </div>
            <div id='resultTableContainer'>
            </div>
        `;

        return html;
    }
}

