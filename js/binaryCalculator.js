function onButton(e) {
    var btn = e.target || e.srcElement;
    var action = document.getElementById(btn.id).innerHTML;
    var res = document.getElementById('res');
    
    function lastIsOperator(){
    if(res.innerHTML.endsWith('+') || res.innerHTML.endsWith('-') || res.innerHTML.endsWith('*') || res.innerHTML.endsWith('/')){
      return true;
    }
  }
    
    switch(action) {
        case 'C':
            res.innerHTML = '';
            break;
        case '=':
            var expr = res.innerHTML;
            var nums = /(\d+)/g;
            // Replace all base 2 nums with base 10 equivs
            expr = expr.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            // eval in base 10 and convert to base 2
            res.innerHTML = Math.floor(eval(expr)).toString(2);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (lastIsOperator()) {
                /* Will overwrite last operator with new one */
                res.innerHTML = res.innerHTML.substring(0, res.innerHTML.length-1) + action;
            } else {
                res.innerHTML += action;
            }
            break;
        default:
            res.innerHTML += action;
            break;
    }
}
var buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = onButton;
}