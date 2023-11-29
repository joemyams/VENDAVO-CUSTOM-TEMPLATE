<?php 
/* Template Name: Landing Page */ 
get_header(); ?>

<main id="siteMain" role="main" class="page-builder-body">
<section class="lp-header">
    <div class="lp-header__inner is-bg--navy is-top--xl is-bottom--xl">
    <div class="cont front is-flex--tablet is-fluid--limited rel">
    <div class="lp-header__text">
    <div class="trigger"></div>

        <h1><?php _e( 'The Future of the Aftermarket Organization', 'vendavo' ); ?></h1>
        <p><?php _e( 'And Why You Have to Invest in it', 'vendavo' ); ?></p>
    </div>
    <div class="lp-header__form front">
        <div class="form-placeholder"></div>
    </div>
   

    </div>
    
    </div>
    <div class="lp-header__image">
        <img class="image-fit" src="https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg" alt="">
    </div>
    <svg class="lp-header__swoop" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</section>
<section class="lp-body is-top--lg is-bottom--xl">
    <div class="cont is-fluid--limited">
    <div class="lp-body__text rte">
        <h4><?php _e( 'Historically, the aftermarket service business in industrial companies has followed a development path that starts with “service as a necessity”, i.e. to support warranty or break-fix, but not considered as a revenue and profit-generating business worthy of focus.', 'vendavo' ); ?></h4>
        <p><?php _e( 'Companies need to continuously invest in the aftermarket service business to ensure a more stable and recurring stream of profit. Dedicated investment in the aftermarket service business is needed to give it a chance to grow, rather than considering it an afterthought.', 'vendavo' ); ?></p>
        <article class="speaker is-featured" style="display: block;">
          <div class="speaker__inner">
            <div class="speaker__header">
              <div class="mktoImg speaker__image rel" id="featuredSpeakerImage"><img class="lpimg" src="https://pages.vendavo.com/rs/526-WQV-792/images/Brian%20Cipresse.png"></div>
              <div class="mktoText" id="featuredSpeakerHeader">
            	<h4><?php _e( 'First and Last Name', 'vendavo' ); ?></h4>
            	<h5><?php _e( 'Professional Title, Company Name', 'vendavo' ); ?></h5>
            </div>
            </div>
            <div class="mktoText speaker__body" id="featuredSpeakerBody">
              <p><?php _e( 'Cillum molestiae ut venenatis ratione corrupti commodi! Aspernatur, fermentum, quasi.', 'vendavo' ); ?></p>
              <p><?php _e( 'Assumenda vivamus? Ultricies feugiat facilisi consectetuer doloremque voluptatem! Risus nascetur.', 'vendavo' ); ?></p>
            </div>
          </div>
        </article>
        <div id="stop" class="stop"></div>
    </div>
    
</div>
</section>
<section class="lp--questions is-bottom--xl">
    <div class="cont is-flex--tablet is-fluid--limited">
        <div class="questions__images text-center">
            <div class="representatives">
            <div class="representative">
                <div class="representative__image rel">
                    <img class="image-fit" src="https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg" alt="">
            </div>
                <p class="representative__text">Elliot</p>
            </div>
            <div class="representative">
                <div class="representative__image rel">
                <img class="image-fit" src="https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg" alt="">
                    
                </div>
                <p class="representative__text">Connie</p>
            </div>
            </div>
            
        </div>
        <div class="questions__text">
            <h4><?php _e( 'Questions?', 'vendavo' ); ?></h4>
            <h5><?php _e( 'Speak with one of Vendavo’s friendly Solution Development Representatives', 'vendavo' ); ?>:</h5>
            <div class="cta-container">
                <a href="" class="btn">solutions@vendavo.com</a>
                <a href="" class="btn">(303) 309-2320</a>
            </div>
        </div>
    </div>
</section>
</main>

<style>
    .speaker__header {
        padding: 1rem 3rem 1rem 3rem;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
    }
    .speaker__header > div {
        position: relative;
        z-index: 15;
      
    }
    .speaker__header::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 95%;
        height: 100%;
        border-bottom-right-radius: 30px;
    transform: skewX(-25deg);
    transform-origin: top right;
     
        background-color: var(--ltGray);
    }
    .speaker__header .mktoText *:not(:last-child) {
        margin-bottom: 0.35rem !important;
    }
    .speaker__body {
        padding: 2rem 3rem;
    }
    .speaker {
        border: 2px solid var(--ltGray);
        border-radius: 10px;
        position: relative;
    }
    .speaker__image {
        border-radius: 100%;
        width: 110px;
        height: 110px;
        margin-right: -2rem;
        border: 8px solid #fff;
        overflow: hidden;
    }
    
    .form-placeholder {
        border: 1px solid red;
        height: 500px;
    }
    .representative {
        width: 45%;
    }
    .representative:first-child {
        margin-bottom: 3rem;
    }
    .representative:last-child {
        width: 38%;
        margin-left: -10%;
    }
    .representative p {
        margin-top: 0.5rem;
        font-size: 14px;
    }
    .representative__image {
        width: 100%;
        overflow: hidden;
        padding-bottom: 100%;
        border-radius: 100%;
        border: 2px solid var(--ltGray);
        filter: grayscale(1);
    }
    .lp-header__swoop {
        position: absolute;
        left: 0;
        bottom: -2rem;
        z-index: 2;
    }
    .lp-header .cont {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
.lp-header__form {
    border: 2px solid var(--ltGray);
    border-radius: 10px;
    padding: 3rem;
    background-color: #fff;
    margin-top: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    
}
.lp-header__text h1 {
    font-size: 3.25rem;

}
.lp-header__text p {
    font-size: 22px;
    margin-top: 1rem;

}

.lp-header { 
    color: #fff;
    position: relative;
    padding-bottom: 4rem;
}
.lp-header .cont {
    align-items: flex-start;
}
.representatives {
    display: flex;
    align-items: flex-end;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}
.lp-header__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .2;
    filter: grayscale(1);
}
.lp-header::after {
    content: '';
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: #fff;
    /* z-index: 5; */
    position: absolute;
}

@media screen and (min-width: 992px) {
    .lp-header__form {
    width: 40%;
    margin-top: 0;
    }
    .questions__images,
    .questions__text {
        width: 50%;
    }
    .lp-body__text,
.lp-header__text {
    width: 60%;
    padding-right: 6rem;
}
}

</style>
<?php get_footer();