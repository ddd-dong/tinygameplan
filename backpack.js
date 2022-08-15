// backpackwindow   

async function see_backpack(){
    backpackWindow.style.display = "block";
    // backpackWindow_text.innerHTML = "_";
    backpacknow = true;
    backpackopenstate = false;
    writename = Object.keys(BPcontents)
    for(f = 0;f < 5;f++){
        for(ff = 0;ff<5;ff++){
            writegoods = callgoods = ff + f*5;
            
            document.getElementById(`invxy|${f}|${ff}`).innerHTML = `${writename[writegoods]} * ${BPcontents[writename[writegoods]]}`;

        }

    }
    await waitingKeypress();
    backpacktnow = false;
    backpackWindow.style.display = 'none';

}
function backpack_buy(shop,villagename){
    backpackopenstate = true;
    backpackWindow.style.display = "block";
    // backpackWindow_text.innerHTML = "_";
    if (buysellstate){
        backpackWindowInventoryItembuysellbutton.innerHTML = "buy"
    }else{
        backpackWindowInventoryItembuysellbutton.innerHTML = "sell"
    }
    backpacknow = true;
    goodsnumber = 0;
    backpackWindow_close.onclick = backpack_buy_close;
    onvillage = villagename;
    onshop = shop;
        for(f = 0;f < 5;f++){
            for(ff = 0;ff<5;ff++){
                if(shop_goods[villagename][shop][goodsnumber] == undefined){
                    document.getElementById(`invxy|${f}|${ff}`).innerHTML = '__'
                    goodsnumber++
                }
                else{
                    document.getElementById(`invxy|${f}|${ff}`).innerHTML = `${shop_goods[villagename][shop][goodsnumber]}`;
                    console.log(shop_goods[villagename][shop][goodsnumber]);

                    goodsnumber++;
                }
                // if(Es_goods[villagename][0][goodsnumber] == undefined){
                //     goodsnumber = 0
                //     break
                // }
            }
            // if(goodsnumber == 0){
            //     break
            // }
        }
        document.getElementById(`invxy|0|0`).onclick = backpackB_S00;
        document.getElementById(`invxy|0|1`).onclick = backpackB_S01;
        document.getElementById(`invxy|0|2`).onclick = backpackB_S02;
        document.getElementById(`invxy|0|3`).onclick = backpackB_S03;
        document.getElementById(`invxy|0|4`).onclick = backpackB_S04;
        document.getElementById(`invxy|1|0`).onclick = backpackB_S10;
        document.getElementById(`invxy|1|1`).onclick = backpackB_S11;
        document.getElementById(`invxy|1|2`).onclick = backpackB_S12;
        document.getElementById(`invxy|1|3`).onclick = backpackB_S13;
        document.getElementById(`invxy|1|4`).onclick = backpackB_S14;
        document.getElementById(`invxy|2|0`).onclick = backpackB_S20;
        document.getElementById(`invxy|2|1`).onclick = backpackB_S21;
        document.getElementById(`invxy|2|2`).onclick = backpackB_S22;
        document.getElementById(`invxy|2|3`).onclick = backpackB_S23;
        document.getElementById(`invxy|2|4`).onclick = backpackB_S24;
        document.getElementById(`invxy|3|0`).onclick = backpackB_S30;
        document.getElementById(`invxy|3|1`).onclick = backpackB_S31;
        document.getElementById(`invxy|3|2`).onclick = backpackB_S32;
        document.getElementById(`invxy|3|3`).onclick = backpackB_S33;
        document.getElementById(`invxy|3|4`).onclick = backpackB_S34;
        document.getElementById(`invxy|4|0`).onclick = backpackB_S40;
        document.getElementById(`invxy|4|1`).onclick = backpackB_S41;
        document.getElementById(`invxy|4|2`).onclick = backpackB_S42;
        document.getElementById(`invxy|4|3`).onclick = backpackB_S43;
        document.getElementById(`invxy|4|4`).onclick = backpackB_S44;
}
function backpack_push(thing){
    BPcontents.push(thing);
    NBPcontents ++;
    
}
function backpack_buy_close(){
    for(f = 0;f < 5;f++){
        for(ff = 0;ff<5;ff++){
            document.getElementById(`invxy|${f}|${ff}`).innerHTML = '';
        }
    }
    backpacktnow = false;
    backpackWindow.style.display = 'none';
}