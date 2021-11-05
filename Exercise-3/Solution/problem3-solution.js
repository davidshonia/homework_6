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
    console.log('Jet Bought Successfully')
    callback();
  }, 1500);
}

function getOwnList(){
  setTimeout(function(){
      console.log('We Got: \n'+ourJetDB);
  }, 3000)
}  


buyNewJet(jetMarket(0), getOwnList);
buyNewJet(jetMarket(1), getOwnList);
jetMarket();



