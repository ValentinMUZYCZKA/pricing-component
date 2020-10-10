var timeLine = new TimelineMax();
var currentAnnually = document.getElementsByClassName('switch__btn--input')[0].checked;
var cards = document.getElementsByClassName('card');
var amounts = document.getElementsByClassName('card__amount');
var currency = document.getElementsByClassName('card__price');

console.log(currency);
document.getElementsByClassName('switch__btn--slider')[0].addEventListener('click', switchPricing)
function switchPricing(){
    if (window.innerWidth < 960) {
        if (currentAnnually) {
            currentAnnually = false;
            timeLine.to(amounts[0],0.2,{opacity: 0})
                    .to(currency[0],0.2,{opacity: 0},'-=0.2')
                    .to(amounts[0],0.2,{display: 'none'})      
                    
                    .to(amounts[1],0.2,{display:'block'})
                    .to(amounts[1],0.2,{opacity:1})
                    .to(currency[0],0.2,{opacity:1},'-=0.2')


                    .to(amounts[2],0.2,{opacity: 0},'-=0.2')
                    .to(currency[1],0.2,{opacity: 0},'-=0.2')
                    .to(amounts[2],0.2,{display: 'none'})      
                    
                    .to(amounts[3],0.2,{display:'block'})
                    .to(amounts[3],0.2,{opacity:1})
                    .to(currency[1],0.2,{opacity:1},'-=0.2')


                    .to(amounts[4],0.2,{opacity: 0},'-=0.2')
                    .to(currency[2],0.2,{opacity: 0},'-=0.2')
                    .to(amounts[4],0.2,{display: 'none'})      
                    
                    .to(amounts[5],0.2,{display:'block'})
                    .to(amounts[5],0.2,{opacity:1})
                    .to(currency[2],0.2,{opacity:1},'-=0.2')
        }else{
            currentAnnually = true;
            timeLine.to(amounts[1],0.2,{opacity: 0})
                    .to(currency[0],0.2,{opacity: 0},'-=0.2')
                    .to(amounts[1],0.2,{display: 'none'})      
                    
                    .to(amounts[0],0.2,{display:'block'})
                    .to(amounts[0],0.2,{opacity:1})
                    .to(currency[0],0.2,{opacity:1},'-=0.2')


                    .to(amounts[3],0.2,{opacity: 0},'-=0.2')
                    .to(currency[1],0.2,{opacity: 0},'-=0.2')
                    .to(amounts[3],0.2,{display: 'none'})      
                    
                    .to(amounts[2],0.2,{display:'block'})
                    .to(amounts[2],0.2,{opacity:1})
                    .to(currency[1],0.2,{opacity:1},'-=0.2')


                    .to(amounts[5],0.2,{opacity: 0},'-=0.2')
                    .to(currency[2],0.2,{opacity: 0},'-=0.2')
                    .to(amounts[5],0.2,{display: 'none'})      
                    
                    .to(amounts[4],0.2,{display:'block'})
                    .to(amounts[4],0.2,{opacity:1})
                    .to(currency[2],0.2,{opacity:1},'-=0.2')
        }
        
    }else{

            if (currentAnnually) {
                currentAnnually = false;
                timeLine.to(cards[0],0.2,{x: 350, ease: Power3.easeOut})
                        .to(cards[2],0.2,{x: -350, ease: Power3.easeOut},'-=0.2')
        
        
        
                        .to(amounts[0], 0.2,{ display: 'none'})
                        .to(amounts[2], 0.2,{ opacity:0,},'-=0.1')
                        .to(currency[1],0.2,{opacity:0},'-=0.2')
                        .to(amounts[2], 0.2,{ display: 'none'},'-=0.1')
                        .to(amounts[4], 0.2,{ display: 'none'},'-=0.1')
        
                        .to(amounts[1], 0.2,{ display: 'block'})
                        .to(amounts[3], 0.2,{ display: 'block'},'-=0.2')
                        .to(currency[1],0.2,{opacity:1},'-=0.1')
                        .to(amounts[3], 0.2,{  opacity:1,},0)
                        .to(amounts[5], 0.1,{ display: 'block'},'-=0.1')
        
        
                        .to(cards[0],0.2,{x: 0, ease: Power3.easeOut},'-=0.1')
                        .to(cards[2],0.2,{x: 0, ease: Power3.easeOut},'-=0.2');
            }else{
                currentAnnually = true;
        
                timeLine.to(cards[0],0.2,{x: 350, ease: Power3.easeOut})
                        .to(cards[2],0.2,{x: -350, ease: Power3.easeOut},'-=0.2')
        
        
                        .to(amounts[1], 0.2,{ display: 'none'})
                        .to(currency[1],0.2,{opacity:0},'-=0.1')
                        .to(amounts[3], 0.2,{ opacity:0},'-=0.2')                
                        .to(amounts[3], 0.2,{ display: 'none'},'-=0.1')
                        .to(amounts[5], 0.1,{ display: 'none'},'-=0.2')
        
                        .to(amounts[0], 0.2,{ display: 'block'})
                        .to(amounts[2], 0.2,{ display: 'block'},'-=0.2')
                        .to(currency[1],0.2,{opacity:1},'-=0.1')
                        .to(amounts[2], 0.2,{ opacity:1},'-=0.2')    
                        .to(amounts[4], 0.1,{ display: 'block'},'-=0.1')
        
        
                        .to(cards[0],0.2,{x: 0, ease: Power3.easeOut},'-=0.1')
                        .to(cards[2],0.2,{x: 0, ease: Power3.easeOut},'-=0.2');
            }
            
        }
    
}
