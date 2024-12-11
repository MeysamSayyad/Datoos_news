export default function textModifier(text:string,count:number){
return text.length > count ?  text.slice(0,count) + '...':text.slice(0,count)
}