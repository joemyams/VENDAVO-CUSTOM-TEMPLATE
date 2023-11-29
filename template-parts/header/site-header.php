<?php
/**
 * Displays the site header.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since 1.0.0
 */
 ?>
<header id="masthead" class="site-header" role="banner">
    
        <?php get_template_part( 'template-parts/header/site-utility' ); ?>
        
    <div class="site-header__lower front">
        <div class="cont is-flex">
            <?php get_template_part( 'template-parts/header/site-branding' ); ?>
            <?php get_template_part( 'template-parts/header/site-nav' ); ?>
        </div>
    </div>
    <div class="site-header__search">
      <?php echo get_search_form(); ?>
    </div>
</header>

<style>
  .site-header__search {
    background: #fff;
    width: 100%;
    padding: 1.5rem 0;
    transition: 300ms ease top;
    position: absolute;
    top: -100%;
    left: 0;

  }

  .site-header__search form {
    width: 90%;
    margin: 0 auto;
  }
  .site-header__search .search-form {
    margin-bottom: 0;
  }
  .nav-search-open .site-header__search {
    top: 100%;
    transition: 300ms ease top;
  }
    .site-header__search-toggle {
      cursor: pointer;
      margin-right: 1rem;

    }
  .site-header__search-toggle:hover svg path {
    fill: var(--green-10);
    transition: 300ms ease fill;
  }
</style>