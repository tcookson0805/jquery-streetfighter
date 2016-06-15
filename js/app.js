$(document).ready(function(){
  
  var hadouken = document.getElementById('hadouken-sound')
  var themesong = document.getElementById('theme-song')
  var lebronjames = document.getElementById('lebronjames')
  var warriors = document.getElementById('warriors')

  
  themesong.play()
  
  $('.sf-logo').fadeIn(3000, function(){
    $(this).fadeOut(2000, function(){
      $('.brought-to-you').fadeIn(3000, function(){
        $(this).fadeOut(2000, function(){
          $('.jquery-logo').fadeIn(3000, function(){
            $(this).fadeOut(2000, function(){
              $('.instructions').fadeIn(3000)
            })
          })
        })
      })
    })
  })

  
  $('.fighter').mouseenter(function(){
    $(this).attr('src', 'images/ryu-ready-position.gif')
  });
  
  $('.fighter').mouseleave(function(){
    $(this).attr('src', 'images/ryu-standing-still.png')
  });
  
  $('.fighter').mousedown(function(){
    $(this).attr('src', 'images/ryu-throwing-hadouken.png');
    $('.hadouken').show()
    $('.hadouken').animate({left: '500px'}, 500, function(){
      $(this).hide();
      $(this).css('left', '10px');
    });
    hadouken.play();
  });
  
  $('.fighter').mouseup(function(){
    $(this).attr('src', 'images/ryu-ready-position.gif')
  });
  
  
  $(document).keydown(function(x){
    if(x.keyCode == 87){
      $('.fighter').attr('src', 'images/ryu-cool.gif')
      themesong.pause();
      lebronjames.pause();
      warriors.play()
    }
    if(x.keyCode == 67){
      $('.fighter').attr('src', 'images/ryu-cool.gif')
      themesong.pause();
      warriors.pause();
      lebronjames.play();
    }
  })
  
  $(document).keyup(function(x){
    if(x.keyCode == 87){
      $('.fighter').attr('src', 'images/ryu-ready-position.gif')
      themesong.play();
      lebronjames.pause();
      warriors.pause()
    }
    if(x.keyCode == 67){
      $('.fighter').attr('src', 'images/ryu-ready-position.gif')
      themesong.play();
      warriors.pause();
      lebronjames.pause();
    }
  })
  

});
