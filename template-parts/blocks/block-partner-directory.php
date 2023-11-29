<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <div class="cont is-default text-center">
        <h2>Partner Ecosystem</h2>
        <div class="tab-group button-group filter-button-group">
            <div class="tab-group__indicator" data-position="0"></div>
            <?php 
            $terms = get_terms( array( 'taxonomy' => 'partner-type', 'hide_empty' => true) );
            $count = 1;
            echo '<a class="is-active tab-link" data-filter="*" data-index="0" href="">All Partners</a>';
			foreach ($terms as $term) {
                echo '<a class="tab-link" data-filter=".'. $term->slug .'" data-index="'. $count .'" href="">'. $term->name .'</a>';
				$count++;
			}; ?>
        </div>
        <div class="partner-directory__grid">
        <?php 
        $args = array(  
            'post_type' => 'partners',
            'post_status' => 'publish',
            'posts_per_page' => -1, 
            'orderby' => 'title',
            'order' => 'ASC'
        );
        $i = 1;
        $loop = new WP_Query( $args ); 
        while ( $loop->have_posts() ) : $loop->the_post(); 
            $postID = get_the_ID();
            $card = get_field('partner_details', $postID);
            $card['blockID'] = $block['id'];
            $card['postID'] = $postID;
            $card['boxID'] = $i . '_' . $block['id'];
            set_query_var('card', $card);
            get_template_part('/template-parts/cards/card-partner');
            $i++;
        endwhile;
        wp_reset_postdata();?>
        </div>
    </div>
</section>

<?php endif; ?>