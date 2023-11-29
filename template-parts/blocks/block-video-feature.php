<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$video = get_field('block_video');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
<?php if ($video['treatment'] == 'layout-one'): ?>
    <div class="cont is-boxed">
        <div class="video-feature__thumb">
            <div <?php if ($video['url']) echo 'data-fancybox href="'. $video['url'] .'"'; ?> class="video-feature__aspect rel">
                <?php if ($video['url']) echo '<span class="video-feature__play"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2146 9.75358C21.5816 10.5166 21.5816 12.4834 20.2146 13.2464L3.81844 22.3972C2.48532 23.1412 0.843751 22.1774 0.843751 20.6508L0.843752 2.34924C0.843752 0.822547 2.48532 -0.141203 3.81844 0.60282L20.2146 9.75358Z" fill="white"/></svg>Play Video</span>'; ?>
                <?php echo acfImgOutput($video['placeholder'], 'image-fit', ''); ?>
            </div>
        </div>
        <div class="video-feature__text">
            <div class="feature-text__inner front">
                <?php echo acfImgOutput($content['logo'], '', 'feature-text__image'); ?>
                <?php echo acfOutput($content['kicker'], 'p', 'feature-text__kicker kicker'); ?>
                <?php echo acfOutput($content['headline'], 'h3', 'feature-text__headline'); ?>
                <?php echo acfOutput($content['subheadline'], 'p', 'feature-text__subheadline'); ?>
            </div>
        </div>
    </div>
    <svg class="video-feature__swoop" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1042.94 284.11" style="enable-background:new 0 0 1042.94 284.11;" xml:space="preserve">
        <style type="text/css">
            .swoop-line {fill:none;stroke:#64BC46;stroke-width:2;stroke-miterlimit:10;}
         </style>
        <g class="swoop-base">
            <path class="swoop-line" vector-effect="non-scaling-stroke" d="M0.07,121.81c57.49,35.79,113.44,74.88,175.29,102.64c41.68,18.7,86.86,27.99,132.76,28.16
                c45.31,0.17,89.93-12.81,132.69-26.54c33.93-10.89,67.45-23.06,100.84-35.5c203.27-75.73,409.06-143.89,501.2-173.85"/>
            <path vector-effect="non-scaling-stroke" class="swoop-line" d="M0.07,127.37c39.43,24.4,78.05,50.11,117.82,73.98c56.05,33.65,116.91,58.19,182.88,61.1
                c66.93,2.96,130.67-21.12,193.51-40.71c14.39-4.49,28.79-8.97,43.22-13.33c4.32-1.3,8.63-2.6,12.95-3.9
                c213.5-64.02,408.17-126.3,492.39-153.52"/>
        </g>
        </svg>
        <?php elseif  ($video['treatment'] == 'layout-two'): ?>
        <div class="cont is-default is-blob">
            <div <?php if ($video['url']) echo 'data-fancybox href="'. $video['url'] .'"'; ?> class="video-feature__blob rel">
                <?php echo acfImgOutput($video['placeholder'], '', ''); ?>
                <?php if ($video['url']): ?>
                  <div class="video-btn-container">
                <span class="video-feature__btn is-text--blue-20">
                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2146 9.75358C21.5816 10.5166 21.5816 12.4834 20.2146 13.2464L3.81844 22.3972C2.48532 23.1412 0.843751 22.1774 0.843751 20.6508L0.843752 2.34924C0.843752 0.822547 2.48532 -0.141203 3.81844 0.60282L20.2146 9.75358Z" fill="#4fa627"/></svg>
                </span>
                <span class="btn-label">Play Video</span>
                </div>
                <?php endif; ?>
            </div>
            <div class="video-feature__text">
                <div class="feature-text__inner front">
                    <?php echo acfOutput($content['kicker'], 'p', 'feature-text__kicker kicker'); ?>
                    <?php echo acfOutput($content['headline'], 'h2', 'feature-text__headline'); ?>
                    <?php echo acfOutput($content['subheadline'], 'p', 'feature-text__subheadline'); ?>
                    <?php echo acfImgOutput($content['logo'], '', 'feature-text__image'); ?>
                </div>
            </div>
        </div>
        <?php endif; ?>
</section>

<?php endif; ?>