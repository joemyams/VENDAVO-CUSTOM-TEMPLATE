<?php 
$ticker = get_field('ticker_shortcode');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <div class="cont is-full is-fluid">
        <?php if ($ticker && function_exists('ditty_news_ticker')) echo do_shortcode($ticker); ?>
        <?php if (is_admin() && $ticker) echo '<p class="text-center" >Ticker Inserted with Shortcode ' . $ticker .'. Please preview or publish page to view.</p>'; ?>
    </div>
</section>

<?php endif; ?> 