
// code will run as soon as page loads. 
window.onload = function(){




// stopwatch is an Object. it will store multiple functions. 
// 
//  Click events. 
$("lap").on("click", stopwatch.recordLap);
$("stop").on("click",stopwatch.stop);
$("reset").on("click", stopwatch.reset);
$("start").on("click", stopwatch.start);
//why is start in white?
};

