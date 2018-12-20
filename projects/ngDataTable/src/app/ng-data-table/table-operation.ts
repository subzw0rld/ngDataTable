export class TableOperation {
    /**
     * sort
     */
    public sortAscending(array: Array<any>, property: string) {
        array.sort((a, b) => {
            if (a[property] < b[property]) {
                return -1;
            } else if (a[property] > b[property]) {
                return 1;
            }

            return 0;
        });
    }

    public sortDescending(array: Array<any>, property: string) {
        array.sort((a, b) => {
            if (a[property] > b[property]) {
                return -1;
            } else if (a[property] < b[property]) {
                return 1;
            }

            return 0;
        });
    }

    public filterByKey(array: Array<any>, property:string, filterString:String):Array<any> {
        return array.filter(item => {
            return item[property] === filterString;
        });
    }

    public filterValues(array: Array<any>, filterArr:Array<any>):Array<any> {
        return array.filter(item => {
            return filterArr.filter(filterData => {
                return item[filterData.key] !== filterData.value;
            }).length == 0;
        });
    }

}