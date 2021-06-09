<?php

	$setting=unserialize(@file_get_contents(DATA_DIR.'/setting/overnotes.dat'));
	ini_set('mbstring.http_input', 'pass');
	parse_str($_SERVER['QUERY_STRING'],$_GET);
	$keyword=isset($_GET['k'])?trim($_GET['k']):'';
	$category=isset($_GET['c'])?trim($_GET['c']):'';
	$page=isset($_GET['p'])?trim($_GET['p']):'';
	$base_title = !empty($setting['title'])? $setting['title'] : 'OverNotes';

?>﻿<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=-100%, user-scalable=yes" />
<meta name="format-detection" content="telephone=no">
<title><?php echo $base_title; ?>｜町田市の歯医者｜ワイズデンタルオフィス</title>
<meta name="keywords" content="お知らせ,ブログ,休み,情報">
<meta name="description" content="町田市の歯医者「ワイズデンタルオフィス」の<?php echo $base_title; ?>はこちらをご覧ください。当院のお休みやお口の健康に役立つ情報などを日々発信しています。お時間がありましたら、お気軽にチェックしていただけますと幸いです。">
<link rel="shortcut icon" href="../images/favicon.ico">
<link rel="stylesheet" href="../css/styles.css">
<link rel="stylesheet" href="../css/responsive.css">
<script src="../js/jquery.min.js"></script> 

<!-- Google Analytics start -->
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		
			ga('create', ' UA-15203699-48', 'auto');
			ga('send', 'pageview');
		
		</script>
<!-- Google Analytics end -->
</head>

<body class="under">
<div id="wrapper">
  <!--header-->
   <header id="header">
    <div class="container">
      <h1 class="logo"><a href="https://www.ys-dental.com/"><img loading="lazy" src="../images/logo.jpg" alt="町田市の歯医者「ワイズデンタルオフィス」、「<?php echo $base_title; ?>」のページです。"></a></h1>
      <div class="h_right">
        <div class="h_info">
          <p class="txt_tel"><span>TEL.</span><a class="sweetlink" href="tel:0427276474" onclick="ga('send', 'event', 'sp', 'tel');">042-727-6474</a></p>
          <p class="txt_time">9:30～13:30/15:00～19:00 (土曜18時まで)<br>休診日:木曜・日曜・祝日</p>
        </div>
        <ul class="h_btn">
          <li class="menu_hamburger bg01"><span class="menu_icon"><span></span></span></li>
          <li class="menu_map bg02">
            <a href="../clinic/access.html#ttl01" onclick="ga('send', 'event', 'sp', 'map');"><span class="txt">ACCESS</span></a>
          </li>
          <li class="menu_calendar bg01">
            <a target="_blank" href="https://www.shika-town.com/b00001384/reservation" onclick="ga('send', 'event', 'content', 'shikatown');"><span class="txt">診療予約</span></a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <!--header-->
  <!--gnavi-->
  <nav id="gnavi">
    <div class="container">
      <div class="gnavi_wrap">
        <div class="gnavi_menu">
          <div class="gnavi_item first">
            <ul>
              <li><a href="https://www.ys-dental.com/">Home</a></li>
            </ul>
            <p class="btn_web"><a class="bg01" target="_blank" href="https://www.shika-town.com/b00001384/reservation" onclick="ga('send', 'event', 'content', 'shikatown');">WEB診療予約</a></p>
          </div>
          <div class="gnavi_item no_sub">
            <p class="ttl">医院案内</p>
            <ul>
              <li><a href="../clinic/information.html">初診の方へ</a></li>
              <li class="sp"><a href="../clinic/staff.html">スタッフ紹介･求人情報</a></li>
              <li><a href="../clinic/concept.html">医院コンセプト･特長</a></li>
              <li class="sp"><a href="../information/cate_1">お知らせ</a></li>
              <li><a href="../clinic/access.html">医院情報･アクセス</a></li>
              <li class="pc"><a href="../clinic/staff.html">スタッフ紹介･求人情報</a></li>
              <li class="pc"><a href="../information/cate_1">お知らせ</a></li>
              <li><a href="../information/cate_2">ブログ</a></li>
            </ul>
          </div>
          <div class="gnavi_item">
            <p class="ttl">診療メニュー</p>
            <ul>
              <li class="over"><a>計画的に機能を回復させる</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/fullmouse.html">フルマウス治療</a></li>
                </ul>	
              </li>
              <li class="over"><a>歯が痛む・しみる</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/caries.html">むし歯</a></li>
                </ul>	
              </li>
              <li class="over"><a>その歯残せるかも</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/end.html">根管治療とは</a></li>
                  <li><a href="../treatment/endflow.html">根管治療の流れと費用</a></li>
                </ul>	
              </li>
              <li class="over"><a>お子さまの歯を守りたい</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/child.html">小児歯科</a></li>
                </ul>	
              </li>
            </ul>
          </div>
          <div class="gnavi_item">
            <ul>
              <li class="over"><a>歯がグラつく・歯ぐきから血が出る</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/perio.html">歯周病とは</a></li>
                  <li><a href="../treatment/perioflow.html">歯周病の治療と費用</a></li>
                </ul>	
              </li>
              <li class="over"><a>むし歯・歯周病にならないために</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/maintenance.html">メインテナンス・予防歯科</a></li>
                </ul>	
              </li>
              <li class="over"><a>歯並びが気になる・キレイにしたい</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/ortho.html">歯列矯正とは</a></li>
                  <li><a href="../treatment/orthoflow.html">歯列矯正の種類と費用</a></li>
                </ul>	
              </li>
            </ul>
          </div>
          <div class="gnavi_item">
            <ul>
              <li class="over"><a>白く美しい歯を手に入れる</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/whitening.html">セラミック治療・ホワイトニング</a></li>
                </ul>	
              </li>
              <li class="over"><a>歯を失ってしまった</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/denture.html">入れ歯・ブリッジ</a></li>
                  <li><a href="../treatment/implant.html">インプラント</a></li>
                </ul>	
              </li>
              <li class="over"><a>顎が痛い・ガクガクする</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/gaku.html">顎関節症・咬み合わせ</a></li>
                </ul>	
              </li>
              <li class="over"><a>運動能力アップ・ケガ防止</a>
                <ul class="sub_menu">
                  <li><a href="../treatment/sport.html">スポーツ歯科</a></li>
                </ul>	
              </li>
            </ul>
          </div>
          <div class="gnavi_item has_bnr_sp">
            <ul>
              <li>
                <a target="_blank" href="https://www.shika-town.com/b00001384"><img loading="lazy" src="../images/f_bnr01.jpg" alt="歯科タウン"></a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/%E7%94%BA%E7%94%B0%E5%B8%82%E3%81%AE%E6%AD%AF%E7%A7%91-%E3%83%AF%E3%82%A4%E3%82%BA%E3%83%87%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9-253620621319556/"><img loading="lazy" src="../images/f_bnr02.jpg" alt="ワイズデンタルクリニックFacebookをチェック"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!--end gnavi-->
  <main id="main">
    <div id="mainvisual">
      <div class="container">
        <h2><?php echo $base_title; ?></h2>
      </div>
    </div>
    <ul class="topic_path">
      <li><a href="https://www.ys-dental.com/">Home</a></li>
      <li><?php echo $base_title; ?></li>
    </ul>
    <div id="content">
      <section class="under_boxh3">
        <ul class="anchor_list">
          <!-- *********   CATEGORIES   ********* -->
          <?php
	$category_index=get_category_index();
	foreach($category_index as $rowid=>$id){
		$category_data=unserialize(@file_get_contents(DATA_DIR.'/category/'.$id.'.dat'));
		$category_url=$category_data['id'];
		$category_name=$category_data['name'];
		$category_text=@$category_data['text'];
		$category_id=$id;
		${'category'.$id.'_url'}=$category_data['id'];
		${'category'.$id.'_name'}=$category_data['name'];
		${'category'.$id.'_text'}=@$category_data['text'];
		$selected=(@$_GET['c']==$id?' selected="selected"':'');

?>
            <li> <a href="<?php echo $category_url; ?>"><?php echo $category_name; ?></a> </li>
          <?php
	}
?>
          <!-- *********    /CATEGORIES ********* -->
        </ul>
      </section>
      <div class="section"> 
        <!-- *********   POSTS   ********* -->
        <?php $limitNum = 10 ?>
        <?php
	$contribute_index=contribute_search(
		@$current_category_id
		,''
		,''
		,''
		,''
		,''
	);
	$max_record_count=count($contribute_index);

	$current_page=(@$_GET['p'])?(@$_GET['p']):1;
	$contribute_index=array_slice($contribute_index,($current_page-1)*$limitNum,$limitNum);
	$record_count=count($contribute_index)

?>
          <div class="information_list">
            <?php
	$local_index=0;
	foreach($contribute_index as $rowid=>$index){
		$contribute=unserialize(@file_get_contents(DATA_DIR.'/contribute/'.$index['id'].'.dat'));
		$title=$contribute['title'];
		$url=$contribute['url'].'/';
		$category_id=$index['category'];
		$category_data=unserialize(@file_get_contents(DATA_DIR.'/category/'.$category_id.'.dat'));
		$category_name=$category_data['name'];
		$category_text=@$category_data['text'];
		$field_id=$index['field'];
		$date=$index['public_begin_datetime'];
		$id=$index['id'];
		$field=get_field($field_id);

		foreach($field as $field_index=>$field_data){
			${$field_data['code'].'_Name'}=$field_data['name'];
			${$field_data['code'].'_Value'}=make_value(
		$field_data['name']
				,@$contribute['data'][$field_id][$field_index]
				,$field_data['type']
				,$id
				,$field_id
				,$field_index
			);
	
			if($field_data['type']=='image'){
				${$field_data['code'].'_Src'}=ROOT_URI.'/_data/contribute/images/'.@$contribute['data'][$field_id][$field_index];
			}
		}
		$local_index++;

?>
              <div class="information_item"> <a href="<?php echo $url; ?>">
                <p class="information_itm_img">
                  <?php
	if($image1_Value){
?> <img src="<?php echo $image1_Src; ?>" alt="<?php echo $title; ?>" />
                    <?php
	}else{
?>
                    <img src="../images/under_img01.jpg" alt="<?php echo $title; ?>" /> <?php
	}
?>
                </p>
                <?php
                $dates = explode("/", $date);
              ?>
                <div class="information_itm_main">
                  <p class="information_itm_date"><?php echo $dates[0].'.'; ?><?php echo $dates[1].'.'; ?><?php echo $dates[2]; ?></p>
                  <p class="information_itm_ttl"><?php echo mb_strimwidth($title, 0, 100, '…', 'UTF-8'); ?></p>
                </div>
                </a> </div>
            <?php
		foreach($field as $field_index=>$field_data){
			unset(${$field_data['code'].'_Name'});
			unset(${$field_data['code'].'_Value'});
			unset(${$field_data['code'].'_Src'});
		}
	}
?>
          </div>
        
        <!-- *********    /POSTS ********* -->
        <?php
	$page_count=(int)ceil($max_record_count/(float)$limitNum);
?>
          <?php
	if($max_record_count > $limitNum){
?>
            <ul class="pager clearfix">
              <?php
	if($current_page <= 1){
?>
                <li class="disabled"><a href="#">&laquo;</a></li>
                <?php
	}else{
?>
                <li><a href="./?p=1">&laquo;</a></li>
              <?php
	}
?>
              <?php
	$page_old=@$page;
	for($page=1;$page<=$page_count;$page++){
?>
                <?php
	if($current_page == $page){
?>
                  <li class="active"><a href="#"><?php echo $page; ?></a></li>
                  <?php
	}else{
?>
                  <li><a href="./?p=<?php echo $page; ?>"><?php echo $page; ?></a></li>
                <?php
	}
?>
              <?php
	}
$page=$page_old;
?>
              <?php
	if($current_page*$limitNum<$max_record_count){
?>
                <?php 
                                            $lastpage = ceil($max_record_count / $limitNum);
                                        ?>
                <li><a href="./?p=<?php echo $lastpage; ?>">&raquo;</a></li>
                <?php
	}else{
?>
                <li class="disabled"><a href="#">&raquo;</a></li>
              <?php
	}
?>
            </ul>
          <?php
	}
?>
        
      </div>
    </div>
  </main>
   <!--footer-->
  <footer id="footer">
    <div class="f_slide">
      <p class="slide"></p>
      <p class="f_logo"><a href="https://www.ys-dental.com/"><img loading="lazy" src="../images/f_logo.jpg" alt="YS-DENTAL 町田の歯医者ワイズデンタルオフィス"></a></p>
    </div>
    <div class="f_center">
      <div class="container">
        <div class="f_list">
          <ul class="f_info">
            <li>
              <p class="txt">ご予約・お問い合わせはこちら</p>
              <p class="txt_tel"><span>TEL.</span><a class="sweetlink" href="tel:0427276474" onclick="ga('send', 'event', 'sp', 'tel');">042-727-6474</a></p>
            </li>
            <li>
              <p class="btn_web"><a class="bg01" target="_blank" href="https://www.shika-town.com/b00001384/reservation" onclick="ga('send', 'event', 'content', 'shikatown');">WEB診療予約</a></p>
            </li>
          </ul>
          <ul class="f_bnr">
            <li>
              <a target="_blank" href="https://www.shika-town.com/b00001384"><img loading="lazy" src="../images/f_bnr01.jpg" alt="歯科タウン"></a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/%E7%94%BA%E7%94%B0%E5%B8%82%E3%81%AE%E6%AD%AF%E7%A7%91-%E3%83%AF%E3%82%A4%E3%82%BA%E3%83%87%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9-253620621319556/"><img loading="lazy" src="../images/f_bnr02.jpg" alt="ワイズデンタルクリニックFacebookをチェック"></a>
            </li>
          </ul>
        </div>
        <div class="f_time">
          <p class="img"><img loading="lazy" src="../images/f_working_time.jpg" alt="診療時間"></p>
          <p class="time"><span>9:30～13:30/15:00～19:00（&#9650;土曜18時まで）</span><br class="sp">休診日:木曜・日曜・祝日</p>
        </div>
      </div>
    </div>
    <div class="f_list_txt">
      <div class="container">
        <p class="f_add"><span>〒194-0022</span>東京都町田市森野1-24-13 <br class="sp">ギャランフォトビル2</p>
        <p class="f_txt">小田急小田原線｢町田駅｣ 徒歩<span class="num">3</span>分<span class="space"></span><br class="sp">JR横浜線｢町田駅｣ 徒歩<span class="num">5</span>分</p>
      </div>
    </div>
    <div class="f_map">
      <ul class="grp_list_feature">
        <li class="grp_feature_item">
          <a href="../clinic/concept.html#ttl01">
            <p class="ttl"><span class="en">Feature</span><span class="num">01</span></p>
            <p class="txt">治療計画を重視した<br>再発を防止する治療</p>
          </a>
        </li>
        <li class="grp_feature_item">
          <a href="../clinic/concept.html#ttl02">
            <p class="ttl"><span class="en">Feature</span><span class="num">02</span></p>
            <p class="txt">先端機器活用による<br>精密な治療と滅菌の徹底</p>
          </a>
        </li>
        <li class="grp_feature_item">
          <a href="../clinic/concept.html#ttl03">
            <p class="ttl"><span class="en">Feature</span><span class="num">03</span></p>
            <p class="txt">院長による院内技工システム<br>患者様の負担を軽減する治療</p>
          </a>
        </li>
      </ul>
      <p class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12985.326210083666!2d139.4432767!3d35.545513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc651c872e65d7379!2z44Ov44Kk44K644OH44Oz44K_44Or44Kq44OV44Kj44K5!5e0!3m2!1sja!2s!4v1620812148435!5m2!1sja!2s" allowfullscreen="" loading="lazy"></iframe></p>
    </div>
    <p class="copyright">Copyright &copy; ワイズデンタルオフィス <br class="sp375">All Rights Reserved.</p>
    <p id="totop"><a href="#wrapper"><img loading="lazy" src="../images/totop.jpg" alt="to top"></a></p>
    
    <ul class="f_call show">
      <li class="btn_tel"><a class="sweetlink" href="tel:0427276474" onclick="ga('send', 'event', 'sp', 'tel');"><span>TEL.</span>042-727-6474</a></li>
      <li class="btn_web"><a class="bg01" target="_blank"  href="https://www.shika-town.com/b00001384/reservation" onclick="ga('send', 'event', 'content', 'shikatown');"><span>WEB診療予約</span></a></li>
      <li class="btn_top"><a href="#wrapper"><img src="../images/totop_sp.jpg" alt="To top"></a></li>
      </ul>
  </footer>
  <!--footer-->
</div>
<script src="../js/common.js"></script> 
<script src="../js/track-tel.js"></script>
<script src="../js/sweetlink.js"></script> 
</body>
</html>
