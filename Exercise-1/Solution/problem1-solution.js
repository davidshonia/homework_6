let f35 = new fighter_jet('F-35 Lightning', 'Best', 'USA', '15 | 12 | 2006', true);
let su57 = new fighter_jet('Sukhoi Su-57', false,'RUS', '25 | 12 | 2020', false);
let mirage = new fighter_jet('Dassault Mirage 2000', 'Normal', 'FRA', '19 | 07 | 1984', true);
let su25 = new fighter_jet('Su-25 Frogfoot', 'Under Construction', 'USSR', '9 | 07 | 1981', true);
let rafale = new fighter_jet('Dassault Rafale', false, 'FRA', '18 | 06 | 2001', false);
let chengdu = new fighter_jet('Chengdu J-10', false, 'CHI', '23 | 03 | 1998', false);

function fighter_jet(model, condition, origin, built_year, in_base) {
    this.model = model;
    this.condition = condition;
    this.origin = origin;
    this.built_year = built_year;
    this.in_base = in_base;


    this.hangarInfo = function () {
      if (this.in_base==true){
        return `${this.model} Imyofeba Bazaze`;
      }else{
        return `${this.model} Ar Imyofeba Bazaze`;
      }
    };

    this.conditionNow = function () {
      if (this.condition==false){
        return 'Es Tvitmfrinavi Ar Arsebobs Bazashi'
      }else{
        return `Mdgomareoba: ${this.condition}`;
      }
    };

    this.jetInfo = function(){
      return `Warmomavloba: ${this.origin} \nSheiqmna: ${this.built_year}`;
    }
  
}
console.log(f35.hangarInfo())
console.log(f35.conditionNow())
console.log(f35.jetInfo())