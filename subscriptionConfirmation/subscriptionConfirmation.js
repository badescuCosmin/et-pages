
$(document).ready(function() {
    confetti({
        particleCount: 110,
        origin:{x:.5, y:.5},
        startVelocity:35,
        spread:90,
        
        colors:['#FF424F','#FEBC00','#1375EF','#A500B3'],
        shapes:['circle'],
        ticks :100,
        gravity:0.05
      });
});