{$params=[
"where"=>["id"=>173],
'current' => 1,
'showhidden' => 1,
'showunpublished' => 1,
"class_key" => 1
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
{$objSl = json_decode($result.object.tvs.slider.value, 1)}
{$options = "&q=100&h=400&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}

<section class="blox aligncenter page-title-x    "
         style=" padding-top:px; padding-bottom:px;  background: url('{$result.object.image}') repeat ; background-position: center center;background-size: cover; min-height:px; ">
    <div class="max-overlay" style="background-color:"></div>
    <div class="wpb_row vc_row-fluid full-row">
        <div class="container">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <hr class="vertical-space4">
                        <div class="w-divider8">
                            <h3>
                                <span class="colorf spl" style="color:;">{$result.object.pagetitle}</span>
                            </h3>
                        </div>

                        <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">

                                <p style="text-align: center; font-size: 15px;">
                                    <span style="color: #656d78;">Лучшие тренера в городе Москве!</span>
                                </p>
                            </div>
                        </div>
                        <hr class="vertical-space3">
                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                            {$i = 0}
                            {foreach $objSl as $object}
                                {$image = "assets/images/"|cat:$object.image|default:$object.imageDefault}
                                {$src = $modx->runSnippet('phpthumbof', [
                                "input" => $image,
                                "options"   => $options
                                ])}
                                {if !$i%2}
                                    <div class="wpb_column vc_column_container vc_col-sm-6">
                                        <div class="vc_column-inner ">
                                            <div class="wpb_wrapper">
                                                <article class="our-team4 clearfix">
                                                    <div class="tdetail">
                                                        <figure>
                                                            <a class="fancybox" href="{$src}">
                                                                <img src="{$src}" alt="">
                                                            </a>
                                                        </figure>
                                                        <h2>{$object.title}</h2>
                                                        <h5>{$object.note}</h5>
                                                        <article class="iconbox-18">
                                                            <p>{$object.description}
                                                            </p>
                                                        </article>
                                                        <!--div class="social-team"><a href="index.html#"><i
                                                                        class="fa-twitter"></i></a><a
                                                                    href="index.html#"><i
                                                                        class="fa-facebook"></i></a><a
                                                                    href="index.html#"><i
                                                                        class="fa-google-plus"></i></a><a
                                                                    href="index.html#"><i
                                                                        class="fa-linkedin"></i></a>
                                                        </div-->
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                {else}
                                    <div class="wpb_column vc_column_container vc_col-sm-6">
                                        <div class="vc_column-inner ">
                                            <div class="wpb_wrapper">
                                                <article class="our-team4 clearfix">
                                                    <figure><img src="{$src}" alt="">
                                                    </figure>
                                                    <div class="tdetail"><h2>{$object.title}</h2><h5>{$object.note}</h5>
                                                        <p>{$object.description}</p>
                                                        <!--div class="social-team"><a href="index.html#"><i
                                                                        class="fa-twitter"></i></a><a
                                                                    href="index.html#"><i
                                                                        class="fa-facebook"></i></a><a
                                                                    href="index.html#"><i
                                                                        class="fa-google-plus"></i></a><a
                                                                    href="index.html#"><i
                                                                        class="fa-linkedin"></i></a>
                                                        </div-->
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                {/if}
                            {/foreach}
                        </div>
                        <hr class="vertical-space5">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
