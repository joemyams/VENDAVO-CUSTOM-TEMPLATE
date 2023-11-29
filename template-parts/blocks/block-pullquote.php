<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$design = get_field('block_design');
$layout = get_field('block_layout');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <div class="cont <?php echo $layout['text_align'] . ' '.  $design['content_width']; ?>">
        <?php $quote = ($content['use_library']) ? get_field('site_quote', $content['quote_id']) : $content; ?>
		<?php if ($content['quote_icon'] !== 'none'): ?>
        <svg class="pullquote__icon" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9588 5.58139C10 5.44358 8.52234 5.92592 7.52577 7.02842C6.52921 8.13092 6.03093 9.66408 6.03093 11.6279C6.03093 12.3859 6.06529 12.9716 6.13402 13.385H12.732V26.6667H0V12.8682C0 8.7683 0.841924 5.59862 2.52577 3.35917C4.24399 1.11972 6.75258 0 10.0515 0C11.0137 0 11.9072 0.0689052 12.732 0.206716L11.9588 5.58139ZM29.2268 5.58139C27.268 5.44358 25.7904 5.92592 24.7938 7.02842C23.7973 8.13092 23.299 9.66408 23.299 11.6279C23.299 12.3859 23.3333 12.9716 23.4021 13.385H30V26.6667H17.268V12.8682C17.268 8.7683 18.11 5.59862 19.7938 3.35917C21.512 1.11972 24.0206 0 27.3196 0C28.2818 0 29.1753 0.0689052 30 0.206716L29.2268 5.58139Z" fill="#4CA815"/>
        </svg>
		<?php endif; ?>
        <?php echo acfOutput( $quote['quote'], 'blockquote', 'h3 pullquote__blockquote') ; ?>
        <?php echo acfOutput( $quote['quote_subheadline'], 'div', 'pullquote__subheadline') ; ?>
        <?php echo acfOutput( $quote['quote_small'], 'div', 'pullquote__subheadline') ; ?>
        <div class="pullquote__meta">
            <?php echo acfImgOutput($quote['headshot'], 'image-fit', 'pullquote__headshot'); ?>
            <div class="pullquote__details">
                <?php echo acfOutput( $quote['speaker'], 'p', '') ; ?>
                <p><?php echo acfOutput( $quote['title'], 'span', '') ; ?><?php if(!$quote['logo']){ echo acfOutput( ' ,' . $quote['company'], 'span', '') ;}; ?></p>
            <?php echo acfImgOutput($quote['logo'], '', 'pullquote__logo'); ?>

            </div>
        </div>
    
    </div>
</section>

<?php endif; ?>