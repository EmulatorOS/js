(function(){function get_latest_hw_version(){return fetch("/happy-wheels-js/version.json").then(function(response){return response.json();}).catch(function(error){throw error;});}
function check_loop(){if(!("HW_VERSION"in window)){setTimeout(check_loop,1000*5);return;}
try{get_latest_hw_version().then(function(latest_version){if(window.HW_VERSION["index"]!==latest_version["index"]||window.HW_VERSION["dependencies"]!==latest_version["dependencies"]){alert("A newer version of Happy Wheels is available! REFRESH the page to update.");}else{setTimeout(check_loop,1000*60*2);}}).catch(function(error){setTimeout(check_loop,1000*60*5);})}catch(e){setTimeout(check_loop,1000*60*5);}}
setTimeout(check_loop,1000*60*3);})();
