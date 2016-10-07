{$params=[
"where"=>["id"=>169],
'current' => 1,
'showhidden' => 1,
'showunpublished' => 1,
"class_key" => 1
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
{$objSl = json_decode($result.object.tvs.slider.value, 1)}
{$options = "&q=100&h=677&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}


<section class="wpb_row full-row">
    <div class="wpb_column vc_column_container vc_col-sm-12">
        <div class="vc_column-inner ">
            <div class=wpb_wrapper>
                <div id=rev_slider_4_1_wrapper class="rev_slider_wrapper fullwidthbanner-container"
                     style="margin:0px auto;background-color:#3b464b;padding:0px;margin-top:0px;margin-bottom:0px;">
                    <div id=rev_slider_4_1 class="rev_slider fullwidthabanner" style=display:none; data-version=5.2.5.3>
                        <ul>
                            {foreach $objSl as $object}
                                {$image = "assets/images/"|cat:$object.image|default:$object.imageDefault}
                                {$src = $modx->runSnippet('phpthumbof', [
                                "input" => $image,
                                "options"   => $options
                                ])}
                                <!-- SLIDE  -->
                                <li data-index=rs-10 data-transition=fade data-slotamount=7 data-hideafterloop=0
                                    data-hideslideonmobile=off data-easein=default data-easeout=default
                                    data-masterspeed=500
                                    data-thumb={$src}
                                    data-rotate=0 data-saveperformance=off data-title=Slide data-param1=""
                                    data-param2="" data-param3="" data-param4="" data-param5="" data-param6=""
                                    data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    <img src={$src}
                                         alt="" title=kids-slider1-sp1 width=1920 height=680
                                         data-bgposition="center top" data-bgfit=cover data-bgrepeat=no-repeat
                                         data-bgparallax=off class=rev-slidebg data-no-retina>
                                </li>
                                <!-- SLIDE  -->
                            {/foreach}
                        </ul>
                        {literal}
                            <script>/*<![CDATA[*/
                                var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
                                var htmlDivCss = "";
                                if (htmlDiv) {
                                    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
                                } else {
                                    var htmlDiv = document.createElement("div");
                                    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
                                    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
                                }
                                /*]]>*/
                            </script>
                        {/literal}
                    </div>
                </div>
            </div>
        </div>
    </div>

    {literal}
        <script>/*<![CDATA[*/
            var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
            var htmlDivCss = ".tp-caption.wlargetext,.wlargetext{font-size:72px;line-height:1.1px;font-weight:bold;font-family:\"Montserrat\";color:#16161d;text-decoration:none;background-color:transparent;border-width:0px;border-color:rgb(255,255,255);border-style:none;text-shadow:none;margin:0px;white-space:nowrap;letter-spacing:-5px;text-align:left}.tp-caption.thinheadlinepax,.thinheadlinepax{color:#55585d;font-weight:300;font-size:25px;line-height:36px;font-family:\"Roboto\";text-decoration:none;background-color:transparent;border-width:0px;border-color:rgb(0,0,0);border-style:none;text-shadow:none}";
            if (htmlDiv) {
                htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
            } else {
                var htmlDiv = document.createElement("div");
                htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
                document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
            }
            /*]]>*/
        </script>
        <script>/*<![CDATA[*/
            var setREVStartSize = function () {
                try {
                    var e = new Object, i = jQuery(window).width(), t = 9999, r = 0, n = 0, l = 0, f = 0, s = 0, h = 0;
                    e.c = jQuery('#rev_slider_4_1');
                    e.gridwidth = [1206];
                    e.gridheight = [680];
                    e.sliderLayout = "fullwidth";
                    if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
                                f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
                            }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
                        var u = (e.c.width(), jQuery(window).height());
                        if (void 0 != e.fullScreenOffsetContainer) {
                            var c = e.fullScreenOffsetContainer.split(",");
                            if (c)jQuery.each(c, function (e, i) {
                                u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                            }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
                        }
                        f = u
                    } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
                    e.c.closest(".rev_slider_wrapper").css({height: f})
                } catch (d) {
                    console.log("Failure at Presize of Slider:" + d)
                }
            };
            setREVStartSize();
            var tpj = jQuery;
            var revapi4;
            tpj(document).ready(function () {
                if (tpj("#rev_slider_4_1").revolution == undefined) {
                    revslider_showDoubleJqueryError("#rev_slider_4_1");
                } else {
                    revapi4 = tpj("#rev_slider_4_1").show().revolution({
                        sliderType: "standard",
                        jsFileLocation: "/assets/components/modxsite/templates/start-school/wp-content/plugins/revslider/public/assets/js",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        navigation: {
                            keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            mouseScrollReverse: "default",
                            onHoverStop: "on",
                            touch: {
                                touchenabled: "on",
                                swipe_threshold: 0.7,
                                swipe_min_touches: 1,
                                swipe_direction: "horizontal",
                                drag_block_vertical: false
                            },
                            arrows: {
                                style: "uranus",
                                enable: true,
                                hide_onmobile: false,
                                hide_onleave: false,
                                tmp: '',
                                left: {h_align: "left", v_align: "center", h_offset: 20, v_offset: 0},
                                right: {h_align: "right", v_align: "center", h_offset: 20, v_offset: 0}
                            }
                        },
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: 1206,
                        gridheight: 680,
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "enterpoint",
                            speed: 400,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 47, 48, 49, 50, 51, 55],
                            type: "mouse",
                            disable_onmobile: "on"
                        },
                        shadow: 0,
                        spinner: "spinner0",
                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,
                        shuffle: "off",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: false,}
                    });
                }
            });
            /*]]>*/
        </script>
        <script>
            var htmlDivCss = unescape("%23rev_slider_4_1%20.uranus.tparrows%20%7B%0A%20%20width%3A50px%3B%0A%20%20height%3A50px%3B%0A%20%20background%3Argba%28255%2C255%2C255%2C0%29%3B%0A%20%7D%0A%20%23rev_slider_4_1%20.uranus.tparrows%3Abefore%20%7B%0A%20width%3A50px%3B%0A%20height%3A50px%3B%0A%20line-height%3A50px%3B%0A%20font-size%3A40px%3B%0A%20transition%3Aall%200.3s%3B%0A-webkit-transition%3Aall%200.3s%3B%0A%20%7D%0A%20%0A%20%20%23rev_slider_4_1%20.uranus.tparrows%3Ahover%3Abefore%20%7B%0A%20%20%20%20opacity%3A0.75%3B%0A%20%20%7D%0A");
            var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
            if (htmlDiv) {
                htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
            } else {
                var htmlDiv = document.createElement('div');
                htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
                document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
            }
        </script>

    {/literal}

</section>
