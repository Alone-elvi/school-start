{extends "layout.tpl"}

{block name="params"}
    {$params=[
    "where"=>["id" => $modx->resource->id],
    'showhidden' => 1,
    "current" => 1,
    'showunpublished' => 1,
    "class_key" => 1
    ]}

    {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
    {$objSl = json_decode($result.object.tvs.slider.value, 1)}

{/block}

{block name=content}
    <link rel=stylesheet href="{$pre_template_url}css/esg.css"/>
    <script src='{$pre_template_url}js/esg.js'></script>
    <section id="headline">
        <div class="container">
            <h2>{$modx->resource->pagetitle}</h2>
        </div>
    </section>
    <div class="wpb_row vc_row-fluid full-row">
        <div class=container>
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class=wpb_wrapper>
                        <hr class=vertical-space2>
                        <article class="myportfolio-container minimal-light" id=esg-grid-4-1-wrap>
                            <div id=esg-grid-4-1 class=esg-grid
                                 style="background-color: transparent;padding: 0px 0px 0px 0px ; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;">
                                <div class=esg-clear-no-height></div>
                                <ul>
                                    {foreach $objSl as $object}
                                        {$options = "&q=100&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}
                                        {$image = "assets/images/"|cat:$object.image|default:$object.imageDefault}
                                        {$src = $modx->runSnippet('phpthumbof', [
                                        "input" => $image,
                                        "options"   => $options
                                        ])}
                                        <li class="filterall filter-paint filter-photography eg-item-skin-2-wrapper"
                                            data-date=1465625332 data-cobblesw=1 data-cobblesh=1>
                                            <div class=esg-media-cover-wrapper>
                                                <div class=esg-entry-media>
                                                    <img src="{$src}" data-lazysrc={$src} alt="">
                                                </div>
                                                <div class=esg-entry-cover>
                                                    <div class="esg-overlay esg-slide eg-webnus-115454-container"
                                                         data-delay=0>
                                                    </div>
                                                    <div class="esg-bottom eg-webnus-115454-element-27-a esg-slide"
                                                         data-delay=0.1>
                                                        <a class="eg-webnus-115454-element-27 fancybox"
                                                           href="{$image}" lgtitle="{$object.title}">
                                                            <i class=eg-icon-plus></i>
                                                        </a>
                                                    </div>
                                                    <div class="esg-center eg-webnus-115454-element-1 esg-none esg-clear"
                                                         style="height: 5px; visibility: hidden;"></div>
                                                    <div class="esg-center eg-webnus-115454-element-25-a esg-slide"
                                                         data-delay=0.05>
                                                    </div>
                                                    <div class="esg-center eg-webnus-115454-element-3 esg-none esg-clear"
                                                         style="height: 5px; visibility: hidden;"></div>
                                                    <div class="esg-center eg-webnus-115454-element-28-a esg-flipdown"
                                                         data-delay=0.57>
                                                        {$object.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    {/foreach}
                                </ul>
                            </div>
                        </article>
                        <div class=clear></div>
                        <hr class=vertical-space2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        /*<![CDATA[*/
        function eggbfc(winw, resultoption) {
            var lasttop = winw,
                    lastbottom = 0,
                    smallest = 9999,
                    largest = 0,
                    samount = 0,
                    lamoung = 0,
                    lastamount = 0,
                    resultid = 0,
                    resultidb = 0,
                    responsiveEntries = [{
                        width: 1400,
                        amount: 4
                    }, {
                        width: 1170,
                        amount: 4
                    }, {
                        width: 1024,
                        amount: 4
                    }, {
                        width: 960,
                        amount: 3
                    }, {
                        width: 778,
                        amount: 3
                    }, {
                        width: 640,
                        amount: 3
                    }, {
                        width: 480,
                        amount: 1
                    }];
            if (responsiveEntries != undefined && responsiveEntries.length > 0)
                jQuery.each(responsiveEntries, function (index, obj) {
                    var curw = obj.width != undefined ? obj.width : 0,
                            cura = obj.amount != undefined ? obj.amount : 0;
                    if (smallest > curw) {
                        smallest = curw;
                        samount = cura;
                        resultidb = index;
                    }
                    if (largest < curw) {
                        largest = curw;
                        lamount = cura;
                    }
                    if (curw > lastbottom && curw <= lasttop) {
                        lastbottom = curw;
                        lastamount = cura;
                        resultid = index;
                    }
                })
            if (smallest > winw) {
                lastamount = samount;
                resultid = resultidb;
            }
            var obj = new Object;
            obj.index = resultid;
            obj.column = lastamount;
            if (resultoption == "id")
                return obj;
            else
                return lastamount;
        }
        if ("even" == "even") {
            var coh = 0,
                    container = jQuery("#esg-grid-4-1");
            var cwidth = container.width(),
                    ar = "4:3",
                    gbfc = eggbfc(jQuery(window).width(), "id"),
                    row = 4;
            ar = ar.split(":");
            aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
            coh = cwidth / aratio;
            coh = coh / gbfc.column * row;
            var ul = container.find("ul").first();
            ul.css({
                display: "block",
                height: coh + "px"
            });
        }
        var essapi_4;
        jQuery(document).ready(function () {
            essapi_4 = jQuery("#esg-grid-4-1").tpessential({
                gridID: 4,
                layout: "even",
                forceFullWidth: "off",
                lazyLoad: "on",
                lazyLoadColor: "#FFFFFF",
                row: 4,
                loadMoreAjaxToken: "2a53a31b4e",

                loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
                ajaxContentTarget: "ess-grid-ajax-container-",
                ajaxScrollToOffset: "0",
                ajaxCloseButton: "off",
                ajaxContentSliding: "on",
                ajaxScrollToOnLoad: "on",
                ajaxNavButton: "off",
                ajaxCloseType: "type1",
                ajaxCloseInner: "false",
                ajaxCloseStyle: "light",
                ajaxClosePosition: "tr",
                space: 0,
                pageAnimation: "fade",
                paginationScrollToTop: "off",
                spinner: "spinner0",
                evenGridMasonrySkinPusher: "off",
                lightBoxMode: "single",
                animSpeed: 1000,
                delayBasic: 1,
                mainhoverdelay: 1,
                filterType: "single",
                showDropFilter: "hover",
                filterGroupClass: "esg-fgc-4",
                googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
                aspectratio: "4:3",
                responsiveEntries: [{
                    width: 1400,
                    amount: 4
                }, {
                    width: 1170,
                    amount: 4
                }, {
                    width: 1024,
                    amount: 4
                }, {
                    width: 960,
                    amount: 3
                }, {
                    width: 778,
                    amount: 3
                }, {
                    width: 640,
                    amount: 3
                }, {
                    width: 480,
                    amount: 1
                }]
            });
            try {
                jQuery("#esg-grid-4-1 .esgbox").esgbox({
                    padding: [0, 0, 0, 0],
                    afterLoad: function () {
                        if (this.element.hasClass("esgboxhtml5")) {
                            var mp = this.element.data("mp4"),
                                    ogv = this.element.data("ogv"),
                                    webm = this.element.data("webm");
                            this.content = '<div style=width:100%;height:100%;><video autoplay=true loop="" class=rowbgimage poster="" width=100% height=auto><source src="' + mp + '" type=video/mp4><source src="' + webm + '" type=video/webm><source src="' + ogv + '" type=video/ogg></video></div>';
                            var riint = setInterval(function () {
                                jQuery(window).trigger("resize");
                            }, 100);
                            setTimeout(function () {
                                clearInterval(riint);
                            }, 2500);
                        }
                        ;
                    },
                    beforeShow: function () {
                        this.title = jQuery(this.element).attr('lgtitle');
                        if (this.title) {
                            this.title = "";
                            this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
                        }
                    },
                    afterShow: function () {},
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    nextEffect: 'fade',
                    prevEffect: 'fade',
                    openSpeed: 'normal',
                    closeSpeed: 'normal',
                    nextSpeed: 'normal',
                    prevSpeed: 'normal',
                    helpers: {
                        media: {},
                        title: {
                            type: ""
                        }
                    }
                });
            } catch (e) {}
        });
        /*]]>*/
    </script>
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

    <hr class=vertical-space3>
{/block}

