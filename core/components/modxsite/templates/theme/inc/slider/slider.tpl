{assign var=params value=[
"where" => [
"id"    => 176
],
"current"   => true
]}
{processor action="web/portfolio/getdata" ns="modxsite" params=$params assign=result}

{assign var=object value=$result.object}
<div class="span9 mrgbtm35">
    <div id="banner_container">
        <!-- START REVOLUTION SLIDER 2.0.3 -->
        <link rel='stylesheet' id='rev-google-font'
              href='http://fonts.googleapis.com/css?family==Open+Sans:300italic,400italic,600italic,700italic,800italic,300,600,700,800'
              type='text/css' media='all'/>
        <div id="rev_slider_2_1_wrapper" class="rev_slider_wrapper banner_container"
             style="margin:0px auto;background-color:#E9E9E9;padding:0px;margin-top:0px;margin-bottom:0px;max-height:440px;height:440;">
            <div id="rev_slider_2_1" class="rev_slider banner_container"
                 style="display:none;max-height:440px;height:440;">
                <ul>
                    {foreach $object.gallery as $item}
                        <li data-transition="random" data-slotamount="7" data-masterspeed="300">
                            <img src="{$item.image}">
                            {if $item.description}
                                <div class="tp-caption big_white fade"
                                     data-x="550"
                                     data-y="90"
                                     data-speed="300"
                                     data-start="500"
                                     data-easing="easeOutExpo">
                                    <!--<div>{*$item.description*}</div>-->
                                </div>
                            {/if}
                            {if $item.description}
                                <div class="tp-caption very_large_text fade"
                                     data-x="224"
                                     data-y="24"
                                     data-speed="300"
                                     data-start="500"
                                     data-easing="easeOutExpo">
                                    <!--<div>{*$item.description*}</div>-->
                                </div>
                            {/if}
                        </li>
                    {/foreach}
                </ul>
            </div>
        </div>
    </div>
                    
