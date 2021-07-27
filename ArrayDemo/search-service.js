class SearchService
{
     async getSearchArray(){
        var array = [
            {
                name: "Name 1",
                address: "Address 1",
                description: "Description 1"
            },
            {
                name: "Name 2",
                address: "Address 2",
                description: "Description 2"
            }
        ]

        return new Promise(resolve => {
            setTimeout(() => {
              resolve(array);
            }, 2000);
          });
    }
}