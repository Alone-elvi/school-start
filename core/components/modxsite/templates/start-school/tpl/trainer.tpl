{extends "layout.tpl"}
{block name=params}
    {$params=[
    "where"=>["id"=>173],
    'current' => 1,
    'showhidden' => 1,
    'showunpublished' => 1,
    "class_key" => 1
    ]}

    {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
    {$objSl = json_decode($result.object.tvs.slider.value, 1)}
    {$options = "&q=100&w=300&h=400&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}
{/block}
{block name=content append}
    <section class="container">
        <section class="wpb_row  ">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class=wpb_wrapper>
                        <div class=w-divider11>
                            <h3 class=colorf style=color:><span class=spl>Наши</span><span class=spr>тренеры</span></h3>
                            <p>Наши замечательные тренеры.</p>
                        </div>
                        <hr class=vertical-space1>
                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                            <div class="wpb_column vc_column_container vc_col-sm-6">
                                <div class="vc_column-inner ">
                                    <div class=wpb_wrapper>
                                        {$i = 0}
                                        {foreach $objSl as $object}
                                            {if $i%2 == 0}
                                                {include file="inc/trainer/trainer_column.tpl"}
                                            {/if}
                                            {$i = $i + 1}
                                        {/foreach}
                                    </div>
                                </div>
                            </div>
                            <div class="wpb_column vc_column_container vc_col-sm-6">
                                <div class="vc_column-inner ">
                                    <div class=wpb_wrapper>
                                        {$i = 0}
                                        {foreach $objSl as $object}
                                            {if $i%2 != 0}
                                                {include file="inc/trainer/trainer_column.tpl"}
                                            {/if}
                                            {$i = $i + 1}
                                        {/foreach}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
{/block}