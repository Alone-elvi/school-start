{extends file="layout.tpl"}

{block name=content}
    {field name=content}
    <div class="row">
        <div class="span12 mrgbtm35">
            <!-- GOOGLE MAP -->
            <div class="row-fluid mrgbtm35 gmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.628676435509!2d37.512695!3d55.678057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54cffa4c0cf11%3A0xb96df050dc36d178!2z0L_RgC4g0JLQtdGA0L3QsNC00YHQutC-0LPQviwgMzcsINCc0L7RgdC60LLQsCwgMTE5NDE1!5e0!3m2!1sru!2sru!4v1428874072021" width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>                
            </div>
            <div class="row">
                <div class="span8">
                    <h4>Написать нам:</h4>
                    <div id="note"></div>
                    <div id="fields">
                        [[!smarty?tpl=`inc/forms/feedback.tpl`]]
                    </div>
                </div>
                <div class="span4">
                    <div class="row-fluid">
                        <div class="span12">
                            <h4>Контактная информация</h4>
                            <p>
                                <br/>
                                {$phone = $modx->getObject('modResource',158)}
                                {$email = $modx->getObject('modResource',159)}
                                {$address  = $modx->getObject('modResource',161)}
                                
                                <strong>Адрес:</strong>
                                {$address->get('content')}
                                <br/>
                                <strong>Телефоны:</strong>
                                {$phone->get('content')}
                                <br/>
                                <strong>Email:</strong>
                                {$email->get('content')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/block} 
