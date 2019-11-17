var cards = [
    {
        img : ['12.40.png'],
        a : ['A. 12:45' , 'false'],
        b : ['B. 12:00', 'false'],
        c : ['C. 12:40', 'true']
    },
    {
        img : ['12.20.png'],
        a : ['A. 11:45' , 'false'],
        b : ['B. 12:20', 'true'],
        c : ['C. 12:15', 'false']
    },
    {
        img : ['12.15.png'],
        a : ['A. 11:45' , 'true'],
        b : ['B. 10:00', 'false'],
        c : ['C. 12:15', 'true']
    },
    {
        img : ['11.10.png'],
        a : ['A. 11:05' , 'false'],
        b : ['B. 11:10', 'true'],
        c : ['C. 11:15', 'false']
    },
    {
        img : ['10.50.png'],
        a : ['A. 10:45' , 'false'],
        b : ['B. 10:50', 'true'],
        c : ['C. 9:15', 'false']
    },
    // {
    //     img : ['10.35.png'],
    //     a : ['A. 10:35' , 'true'],
    //     b : ['B. 10:00', 'false'],
    //     c : ['C. 12:35', 'false']
    // },
    // {
    //     img : ['9.25.png'],
    //     a : ['A. 5:45' , 'false'],
    //     b : ['B. 9:25', 'true'],
    //     c : ['C. 9:15', 'false']
    // },
    // {
    //     img : ['9.15.png'],
    //     a : ['A. 3:15' , 'false'],
    //     b : ['B. 9:00', 'false'],
    //     c : ['C. 9:15', 'true']
    // },
    // {
    //     img : ['8.35.png'],
    //     a : ['A. 7:45' , 'false'],
    //     b : ['B. 9:00', 'false'],
    //     c : ['C. 8:35', 'true']
    // },
    // {
    //     img : ['7.05.png'],
    //     a : ['A. 7:05' , 'true'],
    //     b : ['B. 6:00', 'false'],
    //     c : ['C. 7:15', 'false']
    // },
    // {
    //     img : ['6.35.png'],
    //     a : ['A. 1:10' , 'false'],
    //     b : ['B. 3:30', 'false'],
    //     c : ['C. 6:35', 'true']
    // },
    // {
    //     img : ['5.50.png'],
    //     a : ['A. 5:45' , 'false'],
    //     b : ['B. 5:50', 'true'],
    //     c : ['C. 9:15', 'false']
    // },
    // {
    //     img : ['3.40.png'],
    //     a : ['A. 5:45' , 'false'],
    //     b : ['B. 3:50', 'false'],
    //     c : ['C. 3:40', 'true'] 
    // },
    // {        
    //     img : ['3.00.png'],
    //     a : ['A. 5:45' , 'false'],
    //     b : ['B. 3:00', 'true'],
    //     c : ['C. 9:15', 'false']

    // },
    // { 
    //     img : ['4.45.png'],
    //     a : ['A. 4:45' , 'true'],
    //     b : ['B. 2:15', 'false'],
    //     c : ['C. 10:03', 'false']
    // },
    // {
    //     img : ['9.25.png'],
    //     a : ['A. 8:15','false'],
    //     b : ['B. 9:35','false'],
    //     c : ['C. 9:25', 'true']
    // }

]

var total_score = 0;
var total_cards = 0;
var  index = 0;
var atr = 1;
var score = 0

///DOM Card changing
const new_card = (index) => {

    document.getElementById('1').nextSibling.nodeValue = cards[index]['a'][0];
    // console.log(document.getElementById('1').nextSibling.nodeValue);
    document.getElementById('2').nextSibling.nodeValue = cards[index]['b'][0];
    document.getElementById('3').nextSibling.nodeValue = cards[index]['c'][0];
    document.getElementById('myimage').setAttribute('src',cards[index]['img'][0]);

    
    document.getElementById('1').setAttribute('value',cards[index]['a'][atr]);
    // console.log (document.getElementById(1).value);
    document.getElementById('2').setAttribute('value',cards[index]['b'][atr]);
    document.getElementById('3').setAttribute('value',cards[index]['c'][atr]);;
    
}

//Value Validation funtion
const validateForm = (fmr) => {
    if (index < 5) {
        // console.log(index);
    try{
        for (var i = 0; i < 4; i++) {
            if (fmr[i].value == 'true') {
                if (fmr[i].checked == true) {
                   score++;
                }
            } 
        }
    }
    catch(e){
        console.log('error in checking', e);
    } 
    new_card(index);
    index++;
    total_score = score;
    // alert(total_score);
    }
    else if (index == 5 ) {        
        var game_2 = document.getElementById("game_2");
        console.log(game_2.innerText = "Your Final Score is ");


        let h_6 = document.getElementById('score_h6');


        var h_3 = document.createElement('h3');
        // console.log(h_3);
        h_3.innerText = total_score;
        game_2.appendChild(h_3);

        
        if ( total_score <= 2 ){
            h_6.innerText= 'You lose!... I guess I am keeping time for more tea parties!';
            var img_har = document.getElementById('queen');
            img_har.src=('mad_hatter5.png');
        }
        else if (total_score > 2){ 
            h_6.innerText= 'Great job! But run fast, because I will catch you to get time back!';
            var img_har = document.getElementById('queen');
            img_har.src= 'mad_hatter10.png';

        }   

    } 
    return false;    
}