<?php if(get_field('has_announcement_bar', 'options') && get_field('announcement_bar_content', 'options')) : ?>
<div class="site-header__upper is-bg--green-G front announcement__bar" <?php if(get_field('announcement_bar_bg', 'options')): ?>style="background: <?php the_field('announcement_bar_bg', 'options'); ?>!important"<?php endif; ?>>
	<div class="cont">
		<?php the_field('announcement_bar_content', 'options'); ?>
	</div>
</div>
<?php if(get_field('announcement_bar_text_color', 'options') || get_field('announcement_bar_link_color', 'options')) : ?>
<style type="text/css">
	<?php if(get_field('announcement_bar_text_color', 'options')): ?>
		.announcement__bar { color : <?php the_field('announcement_bar_text_color', 'options'); ?> !important }
	<?php endif; ?>
	<?php if(get_field('announcement_bar_link_color', 'options')): ?>
		.announcement__bar a { color : <?php the_field('announcement_bar_link_color', 'options'); ?> !important; box-shadow: inset 0 -0.075em <?php the_field('announcement_bar_link_color', 'options'); ?>, inset 0 -0.1em <?php the_field('announcement_bar_link_color', 'options'); ?>; }
		.announcement__bar a:hover { box-shadow: inset 0 -0.075em <?php the_field('announcement_bar_link_color', 'options'); ?>, inset 0 -0.1em <?php the_field('announcement_bar_link_color', 'options'); ?>; }
	<?php endif; ?>
</style>
<?php endif; ?>
<?php endif; ?>