<?php $str = implode("", $stat['content']['number']);
      $length = strlen($str);
      if ($length > 6) {
          $styles = ' stat--xs';
      } elseif ($length > 5) {
        $styles = ' stat--sm';
      } elseif ($length > 3 ) {
        $styles = ' stat--lg';
      } else {
        $styles = ' stat--lg';
      }; ?>
<div class="stat-bubble-container rel <?php echo $styles; ?>">
    <div class="stat-bubble text-center ">
        <div class="stat-bubble__inner">
            <?php 
            if ($stat['content']['number']['value']) {
                $str = 'class="stat-num is-lg"';
                if ($stat['content']['number']['prepend']) { $str = $str . ' data-prepend="'. $stat['content']['number']['prepend'] .'"'; }
                if ($stat['content']['number']['append']) { $str = $str . ' data-append="'. $stat['content']['number']['append'] .'"'; }
                echo '<p '. $str .'>' . $stat['content']['number']['value']. '</p>';
            } ; 
            echo acfOutput($stat['content']['headline'], 'p', 'stat-label') . 
                 acfOutput($stat['content']['subheadline'], 'p', 'stat-sublabel') . 
                 acfImgOutput($stat['content']['logo'], 'stat-logo', ''); ?>       
        </div>
    </div>
    <svg class="stat-blob" x="0px" y="0px" viewBox="0 0 427 345" xml:space="preserve">
        <path vector-effect="non-scaling-stroke" class="stat-blob__line" d="M206.8,335.7L22,193c-32.7-25.2-23.8-76.6,15.4-88.9L353.1,4.7c49.4-15.6,91.4,39.8,62.8,83L257.3,327.4
            C246.1,344.3,222.9,348.1,206.8,335.7z"/>
    </svg>
</div>