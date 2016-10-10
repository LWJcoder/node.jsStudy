/**
 * Created by Joh on 2016/10/10.
 */
var rect = {
    per : function(x,y){
       return 2*(x+y);
},
    area: function (x,y) {
        return x*y;
    }
};

function solveRect(l, b) {
    if(l<0 || b <0){
        console.log("l or b can not less than 0;");
    }
    else{
        rect.per(l,b);
        rect.area(l, b);
    }


}

solveRect(2,5);//14 10
