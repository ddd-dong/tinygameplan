function backpackB_S00(){
    backpackB_S_MainCallBack(0,0);
}
function backpackB_S01(){
    backpackB_S_MainCallBack(0,1);
}
function backpackB_S02(){
    backpackB_S_MainCallBack(0,2);
}
function backpackB_S03(){
    backpackB_S_MainCallBack(0,3);
}
function backpackB_S04(){
    backpackB_S_MainCallBack(0,4);
}
function backpackB_S10(){
    backpackB_S_MainCallBack(1,0);
}
function backpackB_S11(){
    backpackB_S_MainCallBack(1,1);
}
function backpackB_S12(){
    backpackB_S_MainCallBack(1,2);
}
function backpackB_S13(){
    backpackB_S_MainCallBack(1,3);
}
function backpackB_S14(){
    backpackB_S_MainCallBack(1,4);
}
function backpackB_S20(){
    backpackB_S_MainCallBack(2,0);
}
function backpackB_S21(){
    backpackB_S_MainCallBack(2,1);
}
function backpackB_S22(){
    backpackB_S_MainCallBack(2,2);
}
function backpackB_S23(){
    backpackB_S_MainCallBack(2,3);
}
function backpackB_S24(){
    backpackB_S_MainCallBack(2,4);
}
function backpackB_S30(){
    backpackB_S_MainCallBack(3,0);
}
function backpackB_S31(){
    backpackB_S_MainCallBack(3,1);
}
function backpackB_S32(){
    backpackB_S_MainCallBack(3,2);
}
function backpackB_S33(){
    backpackB_S_MainCallBack(3,3);
}
function backpackB_S34(){
    backpackB_S_MainCallBack(3,4);
}
function backpackB_S40(){
    backpackB_S_MainCallBack(4,0);
}
function backpackB_S41(){
    backpackB_S_MainCallBack(4,1);
}
function backpackB_S42(){
    backpackB_S_MainCallBack(4,2);
}
function backpackB_S43(){
    backpackB_S_MainCallBack(4,3);
}
function backpackB_S44(){
    backpackB_S_MainCallBack(4,4);
}
function backpackB_S_MainCallBack(a,aa){
    callgoods = aa + a*5;
    if (backpackopenstate){
        console.log(`XY: ${a}, ${aa} has been pressed, item: ${shop_goods[onvillage][onshop][callgoods]}, price: ${price[shop_goods[onvillage][onshop][callgoods]]}`);
        backpackWindowInventoryItemDescriptionText.innerHTML = `item: ${shop_goods[onvillage][onshop][callgoods]}, price: ${price[shop_goods[onvillage][onshop][callgoods]]}`;
    }

}










