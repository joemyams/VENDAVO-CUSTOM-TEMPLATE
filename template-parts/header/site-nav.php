<?php
/**
 * Displays the site navigation.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since 1.0.0
 */

?>

<?php if ( has_nav_menu( 'header-nav' ) ) : ?>

<nav id="site-navigation" class="site-header__nav" role="navigation" aria-label="Primary Menu">
  <?php
		wp_nav_menu(
			array(
				'theme_location'  => 'header-nav',
				'menu_class'      => 'menu-wrapper',
				'container_class' => 'primary-menu-container',
				'items_wrap'      => '<ul id="primary-menu-list" class="%2$s">%3$s</ul>',
        'fallback_cb'     => false,
        'walker'          => new vendavoWalker
			)
		);
		?>
  <div class="site-header__search-toggle">
    <?php echo vendavo_get_icon_svg( 'ui', 'search' ); ?>
  </div>
  <div class="menu-button-container">
    <button id="primary-mobile-menu" class="button" aria-controls="primary-menu-list" aria-expanded="false">
      <span class="dropdown-icon open"><?php esc_html_e( 'Menu', 'twentytwentyone' ); ?>
        <?php echo vendavo_get_icon_svg( 'ui', 'menu' ); ?>
      </span>
      <span class="dropdown-icon close"><?php esc_html_e( 'Close', 'twentytwentyone' ); ?>
        <?php echo vendavo_get_icon_svg( 'ui', 'close' ); ?>
      </span>
    </button><!-- #primary-mobile-menu -->
  </div><!-- .menu-button-container -->

</nav><!-- #site-navigation -->

<?php endif; ?>