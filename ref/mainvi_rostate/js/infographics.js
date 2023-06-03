$(function(){

  (function(){

    var $win = $(window);
    // var position01 = $('.graf-show01').offset().top - ($win.height() / 3 * 2);
    var position02 = $('.graf-show02').offset().top - ($win.height() / 3 * 2);
    // var position03 = $('.graf-show03').offset().top - ($win.height() / 3 * 2);
    var position04 = $('.graf-show04').offset().top - ($win.height() / 3 * 2);
    // var position05 = $('.graf-show05').offset().top - ($win.height() / 3 * 2);
    
    var flag01 = null;
    var flag02 = null;
    var flag03 = null;
    var flag04 = null;
    var flag05 = null;

    // //グラフ男女
    // var doughnutData = [
    //   {
    //     value: 55,
    //     color: "#448aff",
    //     highlight: "#67a0ff",
    //     label: "男性"
    //   },
    //   {
    //     value: 45,
    //     color:"#ff4081",
    //     highlight: "#ff6499",
    //     label: "女性"
    //   }
    // ];

    // var options1 = {percentageInnerCutout : 70,};

    //職種比率
    var doughnutData2 = [
      {
        value: 40,
        color:"#ffde33",
        highlight: "#ffd600",
        label: "女性"
      },
      {
        value: 29,
        color: "#ff4081",
        highlight: "#ff6499",
        label: "男性"
      } 
      ,
      {
        value: 22,
        color: "#5494ff",
        highlight: "#2979ff",
        label: "男性"
      }
      ,
      {
        value: 9,
        color: "#33d375",
        highlight: "#00c853",
        label: "男性"
      } 
    ];
    var options2 = {
      // 中央の円のカットの大きさ ( パーセント )
      percentageInnerCutout : 70,
      // アニメーション終了後に実行する処理
    };
    //職種比率
    var doughnutData3 = [
      
      {
        value: 40,
        color:"#5494ff",
        highlight: "#2979ff",
        label: "女性"
      },
        {
        value: 40,
        color: "#bb33ff",
        highlight: "#aa00ff",
        label: "男性"
      },
      {
        value: 20,
        color: "#ff7575",
        highlight: "#ff5252",
        label: "男性"
      }
    ];
    var options3 = {
      // 中央の円のカットの大きさ ( パーセント )
      percentageInnerCutout : 70,
      // アニメーション終了後に実行する処理
    };
    //既婚率
    var doughnutData4 = [
       {
        value: 23,
        color:"#ff4081",
        highlight: "#ff6499",
        label: "女性"
      },
        {
        value: 41,
        color: "#448aff",
        highlight: "#67a0ff",
        label: "男性"
      }
      ,
        {
        value: 7,
        color: "#ff7575",
        highlight: "#ff5252",
        label: "男性"
      }
      ,
        {
        value: 8,
        color: "#ffde33",
        highlight: "#ffd600",
        label: "男性"
      }
      ,
        {
        value: 21,
        color: "#33d375",
        highlight: "#33d375",
        label: "男性"
      }
    ];
    var options4 = {
      // 中央の円のカットの大きさ ( パーセント )
      percentageInnerCutout : 70,
      // アニメーション終了後に実行する処理
    };

    //既婚率
    var doughnutData5 = [
      {
        value: 22,
        color:"#ffde33",
        highlight: "#ffd600",
        label: "女性"
      },
      {
        value: 78,
        color: "#33d375",
        highlight: "#33d375",
        label: "男性"
      }  
    ];
    var options5 = {
      // 中央の円のカットの大きさ ( パーセント )
      percentageInnerCutout : 70,
      // アニメーション終了後に実行する処理
    };
    //棒グラフ

    var barChartData = {
      labels : ["第1期","第2期","第3期","第4期","第5期","第6期","第7期","第8期","第9期","第10期","第11期","第12期","第13期","第14期","第15期","第16期","第17期"],
      datasets : [
        {
          fillColor : [
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
			"#2979ff",
			"#2979ff",
            "#ff5252"
          ],
          strokeColor : [
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
            "#2979ff",
			"#2979ff",
			"#2979ff",
            "#ff5252"
          ],
          highlightFill: /*"#eebdcb"*/"#80affe",
          highlightStroke: /*"#eebdcb"*/"#80affe",
          data : [0.13,1.25,2.06,2.97,5.84,12.85,21.07,26.3,26.35,27.72,30.26,33.74,38.35,39.29,39.81,42.06,46.67],
        }
      ]
    }
    var baroptions = {
      // 表示の時のアニメーション
      animation : true,
      // アニメーションの速度 ( ステップ数 )
      animationSteps : 60,
      // アニメーションの種類
      animationEasing : 'easeOutQuad',

    };


    window.onload = function(){
      //男女
      // var ctx = document.getElementById("doughnut-chart").getContext("2d");
      // window.myDoughnut1 = new Chart(ctx).Doughnut(doughnutData,options1, {
      //   responsive : true
      // });
      //職種
      var ctx2 = document.getElementById("doughnut-chart2").getContext("2d");
      window.myDoughnut2 = new Chart(ctx2).Doughnut(doughnutData2,options2, {
        responsive : true
      });
      // //新卒入社割合
      // var ctx3 = document.getElementById("doughnut-chart3").getContext("2d");
      // window.myDoughnut3 = new Chart(ctx3).Doughnut(doughnutData3,options3, {
      //   responsive : true
      // });
      //既婚率
      var ctx4 = document.getElementById("doughnut-chart4").getContext("2d");
      window.myDoughnut4 = new Chart(ctx4).Doughnut(doughnutData4,options4, {
        responsive : true
      });
      //
      // var ctx5 = document.getElementById("doughnut-chart5").getContext("2d");
      // window.myDoughnut5 = new Chart(ctx5).Doughnut(doughnutData5,options5, {
      //   responsive : true
      // });
    }



    $win.scroll(function(){
      // if($(this).scrollTop() > position01 && flag01=== null){
      //   flag01 = 1;
      //   var myDoughnut1 = new Chart(document.getElementById('doughnut-chart1').getContext('2d')).Doughnut(doughnutData,options1);
        
      //   //カウントアップ
      //   var countElm = $('.graf-show01 .count'),
      //       countSpeed = 50;

      //   countElm.each(function(){
      //     var self = $(this),
      //         countMax = self.attr('data-num'),
      //         thisCount = self.text(),
      //         countTimer;

      //     function timer(){
      //       countTimer = setInterval(function(){
      //         var countNext = thisCount++;
      //         self.text(countNext);

      //         if(countNext == countMax){
      //           clearInterval(countTimer);
      //         }
      //       },countSpeed);
      //     }
      //     timer();
      //   });
          
      // }
      if($(this).scrollTop() > position02 && flag02 === null){
        flag02 = 1;
        var myDoughnut2 = new Chart(document.getElementById('doughnut-chart2').getContext('2d')).Doughnut(doughnutData2,options2);
          
          
        //カウントアップ
        var countElm = $('.graf-show02 .count'),
            countSpeed = 50;

        countElm.each(function(){
          var self = $(this),
              countMax = self.attr('data-num'),
              thisCount = self.text(),
              countTimer;

          function timer(){
            countTimer = setInterval(function(){
              var countNext = thisCount++;
              self.text(countNext);

              if(countNext == countMax){
                clearInterval(countTimer);
              }
            },countSpeed);
          }
          timer();
        });
          
          
      }
      
    // if($(this).scrollTop() > position03 && flag03 === null){
    //     flag03 = 1;
    //     var myDoughnut2 = new Chart(document.getElementById('doughnut-chart3').getContext('2d')).Doughnut(doughnutData3,options3);
          
          
    //     //カウントアップ
    //     var countElm = $('.graf-show03 .count'),
    //         countSpeed = 50;

    //     countElm.each(function(){
    //       var self = $(this),
    //           countMax = self.attr('data-num'),
    //           thisCount = self.text(),
    //           countTimer;

    //       function timer(){
    //         countTimer = setInterval(function(){
    //           var countNext = thisCount++;
    //           self.text(countNext);

    //           if(countNext == countMax){
    //             clearInterval(countTimer);
    //           }
    //         },countSpeed);
    //       }
    //       timer();
    //     });               
    //   }
        
      if($(this).scrollTop() > position04 && flag04 === null){
        flag04 = 1;
        var myDoughnut2 = new Chart(document.getElementById('doughnut-chart4').getContext('2d')).Doughnut(doughnutData4,options3);
          
          
        //カウントアップ
        var countElm = $('.graf-show04 .count'),
            countSpeed = 50;

        countElm.each(function(){
          var self = $(this),
              countMax = self.attr('data-num'),
              thisCount = self.text(),
              countTimer;

          function timer(){
            countTimer = setInterval(function(){
              var countNext = thisCount++;
              self.text(countNext);

              if(countNext == countMax){
                clearInterval(countTimer);
              }
            },countSpeed);
          }
          timer();
        });               
      }

      // if($(this).scrollTop() > position05 && flag05 === null){
      //   flag05 = 1;
      //   var myDoughnut2 = new Chart(document.getElementById('doughnut-chart5').getContext('2d')).Doughnut(doughnutData5,options3);
          
          
      //   //カウントアップ
      //   var countElm = $('.graf-show05 .count'),
      //       countSpeed = 50;

      //   countElm.each(function(){
      //     var self = $(this),
      //         countMax = self.attr('data-num'),
      //         thisCount = self.text(),
      //         countTimer;

      //     function timer(){
      //       countTimer = setInterval(function(){
      //         var countNext = thisCount++;
      //         self.text(countNext);

      //         if(countNext == countMax){
      //           clearInterval(countTimer);
      //         }
      //       },countSpeed);
      //     }
      //     timer();
      //   });               
      // }
        

    });



  })();


    
   
  
    
    
});