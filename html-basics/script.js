
var number=10;
var string="Assalamualaikum World";
var isMuslim=true;
var groceries=['shrbat','ketchup','samosas','pakoras','fruitchat']
function GetGroceries(){
    for (i=0;i<groceries.length;i++){
        console.log("bought" + groceries[i]+" for Ramzan")
    
    }
}
GetGroceries();
document.getElementById('box').addEventListener('click',function(){
    alert=('I got clicked');
})
