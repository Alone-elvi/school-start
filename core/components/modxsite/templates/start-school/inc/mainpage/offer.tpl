{$params = [
"limit"     => 6,
"parent"      => 164,
"showhidden" => 1,
"showunpublished" => 1,
"class_key" => 1,
"cache"     => 1
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
<section class="container">
    <div class="row-wrapper-x">
        <section class="wpb_row   w-animate w-start_animation">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <hr class="vertical-space3">
                        <div class="w-divider8">
                            <h3><span class="colorf spl" style="color:;">С нами</span><span class="spr">в чемпионы</span>
                            </h3></div>
                        <hr class="vertical-space2">
                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                            {$i = 0}
                            {assign var=color_arr value = array("#48cfae", "#fb6e52", "#88d339", "#50c1e9", "#fccf19", "#ac92ed")}
                            {foreach $result.object as $object}
                                <div class="wpb_column vc_column_container vc_col-sm-6">
                                    <div class="vc_column-inner ">
                                        <div class="wpb_wrapper">
                                            <article class="icon-box16 borderbottom borderright borderleft"
                                                     style="background:;">
                                                <i class="fa-bookmark "
                                                   style=" color:{$color_arr[$i]};">
                                                </i>
                                                <h4>{$object.pagetitle}</h4>
                                                <p>{$object.content}</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                {$i = $i + 1}
                            {/foreach}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>

