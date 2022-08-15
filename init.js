var version_number ="0.1.1";
var mapdata = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,5,4,4,4,5,5,5,5,5,5,5,4,5,5,0,5,4,3,0,0,0,0,0,0,0,0,0,9,1],
    [1,5,4,4,5,4,5,5,5,5,4,4,5,4,5,5,5,4,4,3,3,0,4,4,4,0,0,0,4,1],
    [1,5,4,4,4,5,5,5,5,5,5,4,5,5,5,5,5,5,4,3,3,0,3,3,3,4,4,4,3,1],
    [1,5,5,5,5,5,5,5,5,5,5,5,5,5,0,5,5,4,3,3,3,0,3,3,3,0,3,2,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1],
    [1,4,4,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,3,2,4,4,0,4,0,4,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,4,0,3,4,0,0,0,4,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,3,4,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,4,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,3,4,3,0,0,0,0,0,0,1],
    [1,4,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,0,0,0,0,0,0,0,1],
    [1,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    [1,3,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,4,4,4,4,4,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,4,0,0,0,0,4,0,4,4,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,4,9,4,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,1],
    [1,4,4,4,3,4,4,4,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,4,4,4,4,4,4,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    [1,4,4,4,4,3,4,3,4,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],
    [1,4,3,4,4,4,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,3,3,3,2,3,4,3,0,3,0,0,0,0,0,0,2,3,0,2,0,0,0,0,0,3,2,3,2,1],
    [1,3,3,3,3,4,3,3,3,3,3,2,3,0,0,2,3,3,3,0,0,3,0,3,3,0,3,3,3,1],
    [1,4,3,3,2,2,3,3,3,2,2,2,3,3,3,3,3,2,3,3,0,0,3,3,0,2,3,3,3,1],
    [1,3,3,2,3,2,2,3,2,3,3,3,3,3,3,3,3,3,3,2,3,0,3,0,3,3,3,3,3,1],
    [1,3,9,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,1],
    [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    var mapgridelement = [];
    var plot_choice = [[
        [['Where am I?',"person","you"],['Hello,I am god in this world.',"person","▯▯▯"],"END"],[['Who are you?',"person","you"],['Hello,I am god in this world.',"person","▯▯▯"],,"END"]],
        [[['So which part are you responsible for?',"person","you"],['This …',"person","▯▯▯"],['I am ……',"person","▯▯▯"],["I don't like to define my job.","person","▯▯▯"],['So you don’t take responsibility for anything?',"person","you"],['……',"person","▯▯▯"],["Let's get back to the topic.","person","▯▯▯"],"END"]],
        [['So you kidnap me?',"person","you"],['……',"person","▯▯▯"],['Please don’t say that.',"person","▯▯▯"],['It’s just because this world is in danger,',"person","▯▯▯"],['so it needs you to…',"person","▯▯▯"],['So you kidnap me right?',"person","you"],['Then you violated Article 302 of the Criminal Law of the Republic of China. ',"person","you"],['You are a criminal. ',"person","you"],['So terrible, you are a guilty god.',"person","you"],['I am really sorry.',"person","▯▯▯"],['I will take the responsibility. Please help me.',"person","▯▯▯"],"END"],
        [[['Ok.',"person","you"],['Thanks you!',"person","▯▯▯"],"END"],
        [['You are a god right?',"person","you"],
        ["Can't you just solve the problem by yourself?","person","you"],
        ['Sorry.',"person","▯▯▯"],
        ['You see the person across bends down deeply.',"null"],
        ['I can’t use the “weapon of mass destruction”,',"person","▯▯▯"],
        ['and I can’t slaughter Ogres directly.”,',"person","▯▯▯"],
        ["So what are you doing here?....","person","you"],
        ['I am sorry…”,',"person","▯▯▯"],
        ['but I will do my best to assist you.”,',"person","▯▯▯"],
        ['Please.”,',"person","▯▯▯"],"END"]]
    
        
    ]//["prompt","You find...<br>something you can use for camping, some money and a sword"],
    var plotStory =[[],[['When you open your eyes,',"null"],
                        ["You see that you're sitting in front of a flaming campfire,","null"],
                        ['and the campfire is burning in the dark night sky.',"null"],
                        ['choice',"Where am I?",plot_choice[0][0],"Who are you?",plot_choice[0][1]],
                        ["Welcome to our world,","person","▯▯▯"],
                        ["and don’t be worried,as long as the matter is over, you can go home.","person","▯▯▯"],
                        ['choice',"What god?",plot_choice[0][0],"So you kidnap me?",plot_choice[0][1]],
                        ["This world was invaded by Ogres very serious.","person","▯▯▯"],
                        ["They are Ogres Heart Monsters from territory of monsters who climbed over the wall.","person","▯▯▯"],
                        ["Although Ogres is not strong, there are many.","person","▯▯▯"],
                        ["And they really like to go on expeditions to other countries.","person","▯▯▯"],
                        ["If we still don’t find any ways to eliminate them.","person","▯▯▯"],
                        ["They will destroy this world in 30 days.","person","▯▯▯"],
                        ["Please help this world.","person","▯▯▯"],
                        ['The person looks like entreat you.',"null"],
                        ['choice',"Ok. ",plot_choice[0][0],"You are a god right?",plot_choice[0][1]],
                        ["Let's embark on a journey~!","person","▯▯▯"],
                        "END"],[
                        ["so where do we go?","person","you"],
                        ['I have no idear,',"person","▯▯▯"],
                        ["You are so useless.","person","you"],
                        ['Maybe we can go to the recent village.',"person","▯▯▯"],
                        ['And find “weapon of mass destruction”.',"person","▯▯▯"],
                        ["ok….","person","you"],,"END"],
                        [['',"null"],
                        ['A small village appears in front of you.',"null"],
                        ['Hey~we arrived!',"person","▯▯▯"],
                        ['Let’s go to talk with the village head.',"person","▯▯▯"],
                        ['',"null"],
                        "END",[],[]],[
                        ['There is an old person in front of you.',"null"],
                        ["Hello village head, I am a traveler…","person","you"],
                        ['Just tell him directly that you are the messenger of God.',"person","▯▯▯"],
                        ["Is this okay?","person","you"],
                        ['Ok~ok.',"person","▯▯▯"],
                        ["Ok…","person","you"],
                        ['',"null"],
                                "END"]];
const travelWindow = document.createElement("div"); 
const plotTextwindow = document.createElement('div');
const mapWindow = document.createElement('div');
const gameStartbutton = document.createElement("button");
const gameLoadbutton = document.createElement("button");
const gamestart_bg_mask = document.createElement("div");
const gamestart_version_number = document.createElement("p");
const mapMask = '<img src="/picture/mapMask.png" alt="mask" id = "mapMask">';
const plotperson_name = document.createElement("div");
const mapplayer = document.createElement("div");
const travelWindow_date = document.createElement("p");
const mainBox = document.getElementById('mainBox');
const plotperson = document.createElement('div');
const plotTextwindow_next = document.createElement("div");
const plottext = document.createElement("p");
const mapgrid_thing_teast = document.createElement("div");
const plottext_button1 = document.createElement("button");
const plottext_button2 = document.createElement("button");
// promptWindow
const promptWindow = document.createElement("div");
const promptWindow_text = document.createElement("p");
const promptWindow_next =  document.createElement("div");
// village
const villageWindow = document.createElement("div");
const villageWindow_header_button = document.createElement("button");
const villageWindow_social_button = document.createElement("button");
const villageWindow_goout_button = document.createElement("button");
const villageWindow_Equipmentshop_button = document.createElement("button");
const villageWindow_villagename = document.createElement("p"); 
//village window popup
const VWsec_window = document.createElement("div");
const VW_PS_window = document.createElement("div");
const VW_INN_window = document.createElement("div");
const VW_BT_window = document.createElement("div");
const VW_PZ_window = document.createElement("div");

const VWsec_WT = document.createElement("p");
const VW_PS_WT = document.createElement("p");
const VW_INN_WT = document.createElement("p");
const VW_BT_WT = document.createElement("p");
const VW_PZ_WT = document.createElement("p");
const VWsec_WL = document.createElement("button");
const VW_PS_WL = document.createElement("button");
const VW_INN_WL = document.createElement("button");
const VW_BT_WL = document.createElement("button");
const VW_PZ_WL = document.createElement("button");
// backpack
const backpackWindow = document.createElement("div");
const backpackWindow_text = document.createElement("p");
const backpackWindow_next =  document.createElement("div");        
const backpackWindowInventory = document.createElement("div");
const backpackWindowInventoryItemDescription = document.createElement("div");
const backpackWindow_close = document.createElement("button");
const backpackWindowInventoryItemDescriptionText = document.createElement("p");
const backpackWindowInventoryItembuysellbutton = document.createElement("button")
let backpacknow_n_m,backpacknow;
backPackDivList = [] ;
///
let talktext,part,KeycodeN,plotRate,maprow,i,ii,travelx,travely,thing,Mapthing,mapdata_long,startPlacex,startPlacey,DS,date,promptnow,prompt_n_m,mainmission,money,goods,goodsnumber,NBPcontents,choiceRate;
let textRate = 0;
let nBAMove = true, travel_Start = false,openbackpack = false;
let typing_text = "";
startPlacex=0;
startPlacey=0;
choiceRate = 0;
dateTime = [0,9,2,6];
secondwindowbuttons = [];
buysellstate = true;
backpackopenstate = true;
let callgoods = 0
let writegoods = 0
let usedSlots = 0
let writename = []
// 新的
// VW 是villagewindow的簡寫
// sec 是次視窗的簡寫
// WT = 字 (<= 選項名稱)
// WL = 離開次視窗
// BPcontents => 背包內容
let BPcontents = {
    "sword":0,
    "armor":0,
    "gun":0,
    "ICBM":0,
    "asd":0,
    "asdq":0,
    "uaxzc":0,
    "uzxcsd":0,
    "uasdef":0,
    "unxcvef":0,
    "uqwdef":0,
    "unsdff":0,
    "ungnf":0,
    "uvbnf":0,
    "uhjkf":0,
    "ucvbef":0,
    "udfgef":0,
    "unsdff":0,
    "uxcef":0,
    "unqweef":0,
    "uzzhef":0,
    "umqlf":0,
    "usql":0,
    "nekos":0,
    "unsdwrw":0,
    "loli":0,

}


console.log(BPcontents)
VWsecOptions = [["EquipmentShop","Props shop","Inn","Bulk trade","pizza"],[],[]];//選項名稱
VWsecONN = [[7,3,4,6,2],[]];//選項可購買的不同物件數量
VWsecIN = [ [ 
    ["sell","buy"],["sell","buy"],["sleep"],["sell","buy"],["a","b"]
             ], [ ] ] ; //選項裡的物件名稱
shop_goods = [[["sword","armor","gun","ICBM","armor","gun","ICBM","armor","gun","ICBM","armor","gun","ICBM","armor","gun","ICBM"],["acs","adasd"],["banana","apple"]],[["1"],["2"],["3"]]];//0:ES 1:PS 2:wholesaler
let onvillage = 0;
let onshop = 0;
let price = {
    "sword":8000,
    "armor":10000,
    "gun":5500,
    "ICBM":8000000000

}

//init
function init(){
    console.log("initmainBox");
    mainBox.style.backgroundImage = "none";
    starttinitPlot();
    initMap();
    initpromptWindow();
    initvillage();
    Gamestartmenu();
    initbackpackWindow();
}

function initpromptWindow(){
    promptWindow.id = "promptWindow";
    promptWindow_text.id = "promptWindow_text";
    promptWindow_next.id = "promptWindow_next";
    mainBox.appendChild(promptWindow);
    promptWindow.appendChild(promptWindow_text);
    promptWindow.appendChild(promptWindow_next);
    promptWindow.style.display = "none";
    promptnow_n_m = true;
}

function starttinitPlot(){ //first plot start
    
    plotperson_name.className = 'plotperson_name';
    plotperson.appendChild(plotperson_name);
    plottext_button1.className = "plottext_button";
    plottext_button2.className = "plottext_button";
    plottext_button1.id = "plottext_button1";
    plottext_button2.id = "plottext_button2";
    plotTextwindow.appendChild(plottext_button1);
    plotTextwindow.appendChild(plottext_button2);
    plottext_button1.style.display = 'none';
    plottext_button2.style.display = 'none';
    plotperson.className = 'plotperson';
    plotperson.id = 'plotperson';
    mainBox.appendChild(plotperson);
    plotTextwindow.className = 'textwindow';
    plotTextwindow.id = 'plotTextwindow';
    mainBox.appendChild(plotTextwindow);
    plottext.id = 'plottext';
    plotTextwindow.appendChild(plottext);
    plotTextwindow_next.className = 'textwindow_next';
    plotTextwindow_next.id = 'plotTextwindow_next';
    plotTextwindow.appendChild(plotTextwindow_next);
    plottext.className = 'plottext';
    plotperson.style.display = 'none';
    plotTextwindow.style.display = 'none';
}

function initMap(){
    travelWindow.id = 'travelWindow';
    travelWindow.className = 'travelWindow';
    mapWindow.id = 'mapWindow';
    mapWindow.className = 'mapWindow';
    mapgrid_thing_teast.className = 'mapgrid_thing_teast';
    travelWindow_date.id = "mapWindow_date";
    mapWindow.innerHTML = mapMask;
    mainBox.appendChild(mapWindow);
    
    mainBox.appendChild(travelWindow);
    travelWindow.appendChild(travelWindow_date);
    travelWindow_date.innerHTML = "100.10.10"
    mapplayer.className = "mapplayer";
    mapplayer.id = "mapplayer";
    
    for(i=0;i<12;i++){
        mapWindow.innerHTML += `<div class="maprow" id="x|${i}"></div>`;
        maprow = document.getElementById(`x|${i}`);
        mapgridelement.push([]);
        for(ii=0;ii<30;ii++){
           //maprow.innerHTML += `<div class="mapgrid" id="xy|${i}|${ii}" ></div>`;
           mapgridelement[i][ii] = document.createElement("div");
           mapgridelement[i][ii].id = `xy|${i}|${ii}`;
           mapgridelement[i][ii].className = "mapgrid";
           maprow.appendChild(mapgridelement[i][ii]);
            
        }
    }
    //mapWindow.innerHTML = mapMask;
    mapWindow.style.display = 'none';
    travelWindow.style.display = 'none';

}

function initvillage(){
    villageWindow.id = "villageWindow";
    villageWindow_header_button.className= "villageWindow_button";
    villageWindow_social_button.className= "villageWindow_button";
    villageWindow_goout_button.className= "villageWindow_button";
    villageWindow_Equipmentshop_button.className= "villageWindow_button";
    villageWindow_Equipmentshop_button.className= "villageWindow_button";
    villageWindow_header_button.id = "villageWindow_wholesaler_button";
    villageWindow_social_button.id = "villageWindow_social_button";
    villageWindow_goout_button.id = "villageWindow_goout_button";
    villageWindow_Equipmentshop_button.id = "villageWindow_Equipmentshop_button";
    villageWindow_villagename.id = "villageWindow_villagename";

    villageWindow_Equipmentshop_button.onclick = sec0001;
    villageWindow_header_button.onclick = sec0004;
    villageWindow_social_button.onclick = sec0005;

    mainBox.appendChild(villageWindow);
    villageWindow.appendChild(villageWindow_villagename);
    villageWindow.appendChild(villageWindow_goout_button);
    villageWindow.appendChild(villageWindow_Equipmentshop_button);
    villageWindow.appendChild(villageWindow_header_button);
    villageWindow.appendChild(villageWindow_social_button);
    villageWindow_header_button.innerHTML ='Village header';
    villageWindow_Equipmentshop_button.innerHTML = 'Equipment shop';
    villageWindow_social_button.innerHTML ='piazza';
    villageWindow_goout_button.innerHTML = 'leave';
    villageWindow.style.display = 'none';






    VWsec_window.id = "VWsec_window";
    VWsec_WT.id = "VWsec_WT";
    VWsec_WL.className = "VWsec_button";
    mainBox.appendChild(VWsec_window);
    VWsec_window.appendChild(VWsec_WT);
    VWsec_window.appendChild(VWsec_WL);
    for(g = 0;g<20;g++){
        secondwindowbuttons[g] = document.createElement("button");
        secondwindowbuttons[g].className = "VWsec_button";
        secondwindowbuttons[g].id = `secbutton|${g}`;
        secondwindowbuttons[g].style.display = 'inline-block';
        VWsec_window.appendChild(secondwindowbuttons[g]);
    }
    VWsec_WL.onclick = VWsecwindowC;



    

    VWsec_WL.innerHTML = "leave";

    VWsec_window.style.display = 'none';
    // VWsec_window.style.zIndex = 5;


    // VW_PS_window.id = "VW_PS_window";
    // VW_ES_WT.id = "VW_ES_WT";
    // VW_ES_WL.id = "VWsec_button";
    // mainBox.appendChild(VW_ES_window);
    // VW_ES_window.appendChild(VW_ES_WT);
    // VW_ES_window.appendChild(VW_ES_WL);
    // VW_ES_WL.onclick = VWsecwindowC;
    // villageWindow_Equipmentshop_button.onclick = VWSESwindow;
    // VW_ES_WL.innerHTML = "leave"
    // VW_ES_window.style.display = 'none';
    // VW_ES_window.style.zIndex = 5;
    // VW_ES_WT.innerHTML="EquipmentShop";
    
}

function initbackpackWindow(){
    NBPcontents = 0;
    backpackWindow.id = "backpackWindow";
    backpackWindow_text.id = "backpackWindow_text";
    backpackWindow_next.id = "backpackWindow_next";
    backpackWindowInventory.id = "backpackWindowInventory";
    backpackWindowInventoryItemDescription.id = "backpackWindowInventoryItemDescription";
    backpackWindow_close.id = 'backpackWindow_close';
    backpackWindowInventoryItemDescriptionText.id = 'backpackWindowInventoryItemDescriptionText';
    backpackWindowInventoryItembuysellbutton.id = 'backpackWindowInventoryItembuysellbutton';
    mainBox.appendChild(backpackWindow);
    // backpackWindow.appendChild(backpackWindow_text);
    // let BPWIA = document.getElementById('backpackWindowInventory')
    backpackWindow.appendChild(backpackWindowInventory);
    
    
    backpackWindowInventoryItemDescription.appendChild(backpackWindowInventoryItemDescriptionText);
    backpackWindowInventoryItemDescription.appendChild(backpackWindowInventoryItembuysellbutton);
    backpackWindowInventoryItemDescription.appendChild(backpackWindow_close);
    backpackWindowInventoryItembuysellbutton.onclick = buysellfunc;
    for(f = 0;f < 5;f++){
        backpackWindowInventory.innerHTML += `<div class="Invrow" id="invy|${f}"></div>`;
        let staticinvrow = document.getElementById(`invy|${f}`);
        backPackDivList.push([]);
        for(ff = 0;ff<5;ff++){
            backPackDivList[f][ff] = document.createElement("div");
            backPackDivList[f][ff].id = `invxy|${f}|${ff}`;
            backPackDivList[f][ff].className = "Invgrid";
            staticinvrow.appendChild(backPackDivList[f][ff]);
        }
    }
                            
    // for(g = 0;g<5;g++){
    //     for(gg = 0;gg<5;gg++){
    //         let Cpic = document.getElementById(`invxy|${g}|${gg}`)
    //         Cpic.innerHTML = '<img src="/picture/map_garss.png" alt="" class="map_picture_teast"></img>'
    //     }
    // }
    backpackWindowInventory.appendChild(backpackWindowInventoryItemDescription);
    backpackWindow_close.innerHTML ="close"
    backpackWindowInventoryItemDescriptionText.innerHTML = "_"
    // backpackWindowInventory.innerHTML = BPWIA
    
    // backpackWindow.appendChild(backpackWindow_next);
    backpackWindow.style.display = "none";
    backpacknow_n_m = true;
    backpackWindow_close.onclick = backpack_buy_close;
}