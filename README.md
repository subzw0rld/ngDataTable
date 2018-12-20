# What is subzw0rld-ng-data-table ?

Nothing fancy, its a simple datagrid with a fixed header and allows sorting and filtering of data based on the keys passed to it through a json dataprovider, provided by the application as an @Input param to the table. In order to improve performance the data table is plugged with [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll). The user can configure the throttle (waiting time before triggering the scroll behavior).

# Support
Angular 7.x and above

# Installation
> npm i subzw0rld-ng-data-table

# Usage
In order to render the table you need to nest the following tag in your angular template:

>       <ng-data-table [header] = "..." [tableData] = "..." [throttle] = "200" (scrollEvent) = "callback()"></ng-data-table>

## Properties
> - header - The @Input containing the data for the table header.
> - tableData - The @Input containing the data for the table body.
> - throttle - The waiting time before triggering the infinite scroll. It is also an @Input parameter.
> - scrollEvent - The callback to be triggered when the Table is scrolled.

## Data Format
The JSON data should have the following format:
### Format for Header data
>       "header": [
>        {
>            "id": 1, 
>           "value": "Emp ID", 
>           "sortKey": "empID", 
>           "sort": true, 
>           "displaySortItem": true, 
>           "displayFilterItem": false
>         }
>   ]

It is to be noted that the object key should be as shown above whereas the value can be any value barring the following rules.

The value of the following should only be boolean:

- sort - This field enables/disables the sorting/filtering feature. You can use this feature to control which column should or should not have the feature for sorting/filtering.
- displaySortItem - Show/Hides the fields for Sorting data in the dropdown (Setting this to false will only show the option for filtering the column data).
- displayFilterItem - Show/Hides the fields for Filtering data in the dropdown (Setting this to false will only show the option for sorting the column data).

### Format for Row data (Table Body)

>   "row": [
>      {
>          "empID": "1111",
>          "fName": "Subroto",
>          "mName": "",
>          "lName": "Mukherjee",
>          "du": "Software",
>          "proj": "Bla Bla"
>      }
>   ]

The keys shown here are only for representation, you can have any property label for the key, only factor (also the most important one), you need to ensure before setting the data for the row object would be that ***the value of the sortKey property in the header object should corresspond to the properties in the row object.*** Note the value of sortKey in the header object maps to ___empID___ property of the row object.

### Putting it together
Just wrap the header and row object inside curly braces '{}' and you are all set:

>       {
>           "header": [],
>           "row": []
>       }