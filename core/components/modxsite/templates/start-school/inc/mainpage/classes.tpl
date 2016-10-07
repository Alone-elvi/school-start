{$params = [
"limit"     => 4,
"parent"      => 170,
"showhidden" => 1,
"showunpublished" => 1,
"class_key" => 1,
"cache"     => 1
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}

{$options = "&q=100&w=400&h=400&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}

<section class="blox w-animate w-start_animation"
         style=" padding-top:px; padding-bottom:px;  min-height:px;  background-color:#f7f7f7;">
    <div class="max-overlay" style="background-color:"></div>
    <div class="wpb_row vc_row-fluid full-row">
        <div class="container">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                        <hr class="vertical-space3">
                        <div class="w-divider8">
                            <h3>
                                <span class="colorf spl" style="color:;">Присоединяйтесь</span>
                                <span class="spr">к нашей </span>
                                <span class="colorf spl" style="color:;">команде</span>
                            </h3>
                        </div>
                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                            {$i = 0}
                            {assign var=color_arr value = array("#8cba5b", "#fb6e53", "#fa7ead", "#51c1e9")}
                            {foreach $result.object as $object}
                                {if $i%2 == 0}
                                    <div class="wpb_column vc_column_container vc_col-sm-6">
                                        <div class="vc_column-inner ">
                                            <div class=wpb_wrapper>
                                                <div class="our-clss-type1 clearfix"
                                                     style=" background:{$color_arr[$i]};">
                                                    <div class="img-wrap col-md-6" style=" border-color: ; ">
                                                        {$image = $object.image|default:$object.imageDefault}
                                                        {$src = $modx->runSnippet('phpthumbof', [
                                                        "input" => $image,
                                                        "options"   => $options
                                                        ])}

                                                        <img src="{$src}" alt="">
                                                    </div>
                                                    <div class="content-wrap col-md-6">
                                                        <h6>{$object.pagetitle}</h6>
                                                        <div class="class-desc">
                                                            <span>{$object.introtext}</span>
                                                        </div>
                                                        <p>{$object.content}</p>
                                                        <a class="magicmore" href="{$object.uri}"
                                                           style=" background: ; ">Узнать больше</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {else}
                                    <div class="wpb_column vc_column_container vc_col-sm-6">
                                        <div class="vc_column-inner ">
                                            <div class="wpb_wrapper">
                                                <div class="our-clss-type1 clearfix"
                                                     style=" background:{$color_arr[$i]};">
                                                    <div class="img-wrap col-md-6" style=" border-color: ; ">
                                                        {$image = $object.image|default:$object.imageDefault}
                                                        {$src = $modx->runSnippet('phpthumbof', [
                                                        "input" => $image,
                                                        "options"   => $options
                                                        ])}

                                                        <img src="{$src}" alt="">
                                                    </div>
                                                    <div class="content-wrap col-md-6">
                                                        <h6>{$object.pagetitle}</h6>
                                                        <div class="class-desc">
                                                            <span>{$object.introtext}</span>
                                                        </div>
                                                        <p>{$object.content}</p>
                                                        <a class="magicmore" href="{$object.uri}"
                                                           style=" background: ; ">Узнать больше</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/if}
                                {$i = $i+1}
                            {/foreach}
                        </div>
                    </div>
                    <hr class="vertical-space4">
                </div>
            </div>
        </div>
    </div>
</section>
