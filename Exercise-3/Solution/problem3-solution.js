let ourJetDB = []

function jetMarket(itemNum){
  sellingItemBase = [['Sukhoi Su-57', 'Best'],['Dassault Rafale', 'Normal'],['Chengdu J-10', 'Best']]
  if (itemNum===undefined){
    console.log('We Are Selling: '+sellingItemBase)
  }else{
    return sellingItemBase[itemNum];
  }

}

function buyNewJet(jet, callback){
  setTimeout(function(){
    ourJetDB.push(jet);
    callback();
  }, 3000);
}

function getOwnList(){
  setTimeout(function(){
      console.log('We Bought: \n'+ourJetDB);
  }, 1000)
}


buyNewJet(jetMarket(1), getOwnList);
buyNewJet(jetMarket(0), getOwnList);
jetMarket();



