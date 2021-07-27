class ResultTable
{
    constructor(containerId){
        this.containerId = containerId;
        this.searchService = new SearchService();
    }

    getFilterArray() {
        return this.array.filter((item) => {
            return StringUtil.contains(item.name, this.filterString)
                || StringUtil.contains(item.address, this.filterString)
                || StringUtil.contains(item.description, this.filterString)
        });
    }

    async render(filterString) {
        this.array = await this.searchService.getSearchArray();
        this.filter(filterString);
    }

    filter(filterString){
        this.filterString = filterString;

        this.filterArray = this.getFilterArray();

        document.getElementById(this.containerId).innerHTML = this.fillHtml();
    }

    fillHtml() {
        var html = 
            `<table>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Description</th>
                </tr>`;
        for (var item of this.filterArray){
            html += `<tr>
                        <td>${item.name}</td>
                        <td>${item.address}</td>
                        <td>${item.description}</td>
                    </tr>`;
        }
        html += `</table>`;

        return html;
    }

}