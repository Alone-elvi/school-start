{$params=[
"where"=>["id"=>201],
'current' => 1,
'showhidden' => 1,
'showunpublished' => 1,
"class_key" => 1
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
{$objSl = json_decode($result.object.tvs.slider.value, 1)}
{$options = "&q=100&w=500&h=500&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}

<section class="blox w-animate w-start_animation"
         style=" padding-top:px; padding-bottom:px; background-size: cover; min-height:px;  background-color:#ffffff;">
    <div class="max-overlay" style="background-color:#f7f7f7;"></div>
    <div class="wpb_row vc_row-fluid full-row">
        <div class="container">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <hr class="vertical-space2">
                        <div class="w-divider8">
                            <h3><span class="colorf spl" style="color:;">{$result.object.pagetitle}</span></h3></div>
                        <hr class="vertical-space1">
                        <div class="testimonials-slider-w ts-hepta">
                            <ul id="testimonials-slider" class="slides w-crsl owl-carousel owl-theme"
                                style="opacity: 1; display: block;">
                                <div class="owl-wrapper-outer autoHeight" style="height: 321px;">
                                    <div class="owl-wrapper"
                                         style="width: 4384px; left: 0px; display: block; transition: all 1000ms ease; transform: translate3d(0px, 0px, 0px);">
                                        {$i = 0}
                                        {foreach $objSl as $object}
                                            {$image = "assets/images/"|cat:$object.image|default:$object.imageDefault}
                                            {$src = $modx->runSnippet('phpthumbof', [
                                            "input" => $image,
                                            "options"   => $options
                                            ])}
                                            <div class="owl-item" id="owl_slide_{$i}" style="width: 1096px; height: 650px;">
                                                {$i = $i + 1}
                                                <li>
                                                    <div class="testimonial">
                                                        <div class="testimonial-brand">
                                                            <h4><strong>{$object.title}</strong><br><em></em></h4>
                                                            <div class="w-square">
                                                                <a class="fancybox-effects-a" href="{$src}"><img src="{$src}"
                                                                                                       alt="{$object.alt}"></a>
                                                            </div>
                                                        </div>
                                                        <div class="testimonial-content">
                                                            <h4><q>{$object.description}</q></h4>
                                                            <div class="testimonial-arrow"></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        {/foreach}
                                    </div>
                                </div>

                                <div class="owl-controls clickable">
                                    <div class="owl-pagination">
                                        <div class="owl-page active" id="owl_slide_0"><span class=""></span></div>
                                        {for $i = 1 to count($objSl)-1}
                                            <div class="owl-page" id="owl_slide_{$i}"><span class=""></span></div>
                                        {/for}
                                    </div>
                                    <div class="owl-buttons">
                                        <div class="owl-prev"></div>
                                        <div class="owl-next"></div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <hr class="vertical-space5">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function() {
            /*
             *  Simple image gallery. Uses default settings
             */

            $('.fancybox').fancybox();

            /*
             *  Different effects
             */

            // Change title type, overlay closing speed
            $(".fancybox-effects-a").fancybox({
                helpers: {
                    title: {
                        type: 'outside'
                    },
                    overlay: {
                        speedOut: 0
                    }
                }
            });
        })
    </script>
    <script>
        $('.owl-page').click(function () {
            $('.owl-item').hide();
            $('.owl-page').removeClass('active');
            $(this).addClass("active")
            $("#" + $(this).attr("id")).show();
        });

    </script>
</section>