{$params = [
"parent"      => 170,
"showhidden" => 1,
"showunpublished" => 1,
"class_key" => 1,
"cache"     => 1
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result_classes}

{$params=[
"parent"=>174,
'showhidden' => 1,
'showunpublished' => 1,
"cache"     => 1
]}


{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result_weekdays}

{$params=[
"where"=>["id"=>173],
'current' => 1,
'showhidden' => 1,
'showunpublished' => 1,
"class_key" => 1
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result_couches}
{$resCouches = json_decode($result_couches.object.tvs.slider.value, 1)}
{$arr_couches = array()}
{foreach $resCouches as $obj}
    {$arr_couches[$obj.MIGX_id] =  $obj.title}
{/foreach}

<section class="container">
    <div class="row-wrapper-x">
        <section class="wpb_row   w-animate w-start_animation">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">

                        <hr class="vertical-space4">
                        <div class="w-divider8">
                            <h3>
                                <span class="colorf spl" style="color:;">Расписание</span>
                                <span class="spr">занятий</span>
                            </h3>
                        </div>
                        <hr class="vertical-space2">
                        <div class="tab">
                            <ul id="wb_fiter_select">
                                <li class="wb_filter_fi">Все занятия</li>
                                {$courses_colors = array("#00c0e2", "#fd4964", "#4acfae", "#ab8de9",  "#f5ba5a")}

                                {assign var = arr_classes value = array()}
                                {$i = 0}
                                {$tb_classes = array()}
                                {$tb_colors = array()}
                                {$tb_cc = array()}
                                {foreach $result_classes.object as $object_classes}
                                    {$arr_classes[$object_classes.id] = $object_classes.pagetitle}
                                    {$tb_cc[$object_classes.id] = $object_classes.pagetitle}
                                    {$tb_colors[$object_classes.id] = $courses_colors[$i]}
                                    <li value="{$object_classes.id}">{$object_classes.pagetitle}</li>
                                    {$i = $i + 1}
                                {/foreach}
                            </ul>
                        </div>

                        {$arr_tmp = array()}
                        {$arr_timetable = array()}
                        {$arr_wd = array()}

                        {foreach $result_weekdays.object as $object}
                            {$arr_wd[] = $object.pagetitle}
                            {$objSl = json_decode($object.tvs.timetible.value, 1)}
                            {$tmp_arr = array()}
                            {foreach $objSl as $tmp}
                                {$tmp_arr[] = $tmp['from']}
                            {/foreach}
                            {if !empty($objSl)}
                                {$m = array_multisort($tmp_arr, $objSl)}
                            {/if}
                            {*$arr_timetable[] = $object.id*}
                            {$arr_timetable[$object.id] = $objSl}
                        {/foreach}
                        <table class="wb_time_table" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                            <!--<tr class="days">
                                <!--<th style="background-color: #f5f6f6 ;"></th>-->
                            <!--<th style="background-color: #f5f6f6 ; color:#a4a4a4 ;">Понедельник</th>
                            <th style="background-color: #f5f6f6 ; color:#a4a4a4 ;">Вторник</th>
                            <th style="background-color: #f5f6f6 ; color:#a4a4a4 ;">Среда</th>
                            <th style="background-color: #f5f6f6 ; color:#a4a4a4 ;">Четверг</th>
                            <th style="background-color: #f5f6f6  ; color:#a4a4a4 ;">Пятница</th>
                            <th style="background-color: #f5f6f6  ; color:#a4a4a4 ;">Суббота</th>
                            <th style="background-color: #f5f6f6  ; color:#a4a4a4 ;">Воскресение</th>
                        </tr>-->

                            {$wd = 0}
                            {foreach $arr_timetable as $arr_t}
                                <tr class="wb_table">
                                    <td style="color: rgb(164, 164, 164); visibility: visible; background-color: rgb(245, 246, 246);"
                                        class="time">{$arr_wd[$wd]}
                                    </td>
                                    {$wd = $wd + 1}
                                    {foreach $arr_t as $arr}
                                        <td class="{$tb_cc[$arr["courses"]]}"
                                            data-bgcolor="{$tb_colors[$arr["courses"]]}"
                                            data-bghover=""
                                            style="background-image: url(); background-color: {$tb_colors[$arr["courses"]]};">
                                            {if !empty($arr["from"])}
                                                <span class="wb_filter_find"
                                                      style="visibility: visible;">с {$arr["from"]}</span>
                                            {/if}
                                            {if !empty($arr["until"])}
                                                <span class="wb_filter_find"
                                                      style="visibility: visible;">до {$arr["until"]}</span>
                                            {/if}
                                            <span class="wb_filter_find" style="visibility: visible;">
                                                    <span class="wb_course" data-txcolor="#ffffff" data-txhover=""
                                                          style="color: #ffffff;">
                                                        {if !empty($arr["courses"])}
                                                            {$arr_classes[$arr["courses"]]}
                                                        {/if}
                                                    </span>
                                                    <span class="wb_desc" style="color: #ffffff;">
                                                        {if !empty($arr['couches'])}
                                                            {$arr_couches[$arr['couches']]}
                                                        {/if}
                                                    </span>
                                                </span>
                                        </td>
                                    {/foreach}
                                    {for $i=0 to 6-count($arr_t)}
                                        <td style="background-color: #f5f6f6 ; color:#a4a4a4 ;">

                                        </td>
                                    {/for}
                                </tr>
                            {/foreach}
                            </tbody>
                        </table>
                        <hr class="vertical-space4">
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>
