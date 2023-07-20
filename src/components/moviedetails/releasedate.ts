export function releaseDate(date:any){
if(date){
let str_date=date.toString();
let year=str_date.slice(0,4)

console.log(year)
return(year)
}

}