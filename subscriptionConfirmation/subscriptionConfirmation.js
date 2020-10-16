
$(document).ready(function() {
    confetti({
        particleCount: 110,
        origin:{x:.50, y:.6},
        startVelocity:35,
        spread:90,
        decay:.93,
        colors:['#FF424F','#FEBC00','#1375EF','#A500B3'],
        shapes:['circle'],
        ticks :80,
        gravity:0
      });
});