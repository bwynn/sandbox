var deck = {
    	count: 52,
      array: [1,2,3,4,5,6,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40, 41,42,43,44,45,46, 47, 48, 49, 50, 51, 52, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
	};

function random() {
  var arr = [];
  var localArray = [];
  var n = deck.count;

  for (var i = 0; i < deck.count; i++) {
    localArray.push(deck.array[i]);
  }

  while( n ) {
    var i = Math.floor(Math.random() * deck.count)
      if ( i in localArray ) {
        arr.push(localArray[i]);
        delete localArray[i];
        n--;
      }
  }
  return arr;
}

function ascending() {
  var arr = [];
	for (var i = 0; i < deck.count; i++) {
      arr.push( deck.array[i] )
    }
    return arr.sort(function(a, b) { return a - b });
}

document.getElementById("submit").addEventListener("click", function(e) {
    	e.preventDefault();
		  console.log( ascending());
	}, false);

document.getElementById("submit-random").addEventListener("click", function(e) {
      e.preventDefault();
      console.log( random( deck.array ));
})
