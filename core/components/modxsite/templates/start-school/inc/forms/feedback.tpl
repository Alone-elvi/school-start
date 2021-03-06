<hr class="vertical-space4">
<div class="w-divider8">
    <h3>
        <span class="colorf spl" style="color:;">Написать</span>
        <span class="spr">нам</span>
    </h3>
</div>


{$request = $smarty.post}

{if $request}
    {$modx->error->reset()}
    {processor action="web/forms/feedback" ns="modxsite" params=$request assign=form_result}
{/if}


{if !$form_result.success}

<section class="container">
    <div class="row-wrapper-x">
        <section class="wpb_row   w-animate w-start_animation">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <h5 class="subtitle">Контактная информация</h5>
                            <div class="textwidget">
                                <div class="contant-information">
                                    <div class="clearfix"><i class="fa-home"></i>
                                        <span>{include file="inc/contacts/address.tpl"}</span>
                                    </div>
                                    <div class="clearfix"><i class="fa-phone"></i>
                                        <div><a href="{include file='inc/contacts/phone.tpl'}">
                                                {include file='inc/contacts/phone.tpl'}
                                            </a></div>
                                    </div>
                                    <div class="clearfix"><i class="fa-envelope"></i>
                                        <div>
                                            {include file="inc/contacts/email.tpl"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Для записи в группы или по другим интересующим вас вопросам, просим заполнить
                                форму обратной связи или связаться с нами по указанному телефонному номеру</p>
                            <iframe src="https://api-maps.yandex.ru/frame/v1/-/CZcC6N2t" width="100%" height="400" frameborder="0"></iframe>
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <h5 class="subtitle">Обратная связь</h5>
                            <form name="order_form" action="{link id=$modx->resource->id}?action=submit"
                                  method="post">

                                <div class="form-group {if $form_result.field_errors.fullname}has-error{/if}">
                                    <label for="fullname">Имя</label>
                                    <div class="">
                                        <input id="fullname" class="form-control" placeholder="Как вас зовут?"
                                               type="text"
                                               value="{if $request.fullname}{$request.fullname}{else}{$profile.fullname}{/if}"
                                               name="fullname">
                                        {if $form_result.field_errors.fullname}
                                            <span class="help-inline">{$form_result.field_errors.fullname}</span>
                                        {/if}
                                    </div>
                                </div>


                                <div class="form-group {if $form_result.field_errors.email}has-error{/if}">
                                    <label for="email">Электронная почта</label>
                                    {if $profile.email}
                                        <div class="">
                                            <input type="hidden" value="{$profile.email}" name="email">
                                            <input id="email" class="form-control" type="text"
                                                   value="{$profile.email}"
                                                   disabled>
                                        </div>
                                    {else}
                                        <div class="">
                                            <input id="email" class="form-control"
                                                   placeholder="Адрес электронной почты"
                                                   type="text" value="{$request.email}" name="email">
                                        </div>
                                        {if $form_result.field_errors.email}
                                            <span class="help-inline">{$form_result.field_errors.email}</span>
                                        {/if}
                                    {/if}
                                </div>


                                <div class="form-group {if $form_result.field_errors.phone}has-error{/if}">
                                    <label for="phone">Телефон</label>
                                    <div class="">
                                        <input id="phone" class="form-control"
                                               placeholder="Номер телефона для связи"
                                               type="text"
                                               value="{if $request.phone}{$request.phone}{else}{$profile.phone}{/if}"
                                               name="phone">
                                        {if $form_result.field_errors.phone}
                                            <span class="help-inline">{$form_result.field_errors.phone}</span>
                                        {/if}
                                    </div>
                                </div>


                                <div class="form-group {if $form_result.field_errors.message}has-error{/if}">
                                    <label for="message">Текст сообщения</label>
                                    <div class="">
                                <textarea rows="10" id="message" class="form-control"
                                          placeholder="Ваш вопрос или пожелание"
                                          name="message">{$request.message}</textarea>
                                        {if $form_result.field_errors.message}
                                            <span class="help-inline">{$form_result.field_errors.message}</span>
                                        {/if}
                                    </div>
                                </div>


                                {if !$request OR $form_result.field_errors.captcha OR !$request.captcha}
                                    <div class="form-group {if $form_result.field_errors.captcha}has-error{/if}">
                                        <label for="captcha">Введите код с картинки</label>
                                        <input id="captcha" type="text" class="form-control w150"
                                               placeholder="Проверочный код"
                                               name="captcha" value=""/>
                                        [[$modcaptcha]]
                                        {if $form_result.field_errors.captcha}
                                            <div>
                                                <span class="help-inline">{$form_result.field_errors.captcha}</span>
                                            </div>
                                        {/if}
                                    </div>
                                {else}
                                    <input type="hidden" name="captcha" value="{$request.captcha}"/>
                                {/if}


                                <div class="form-group">
                                    <input type="submit" class="btn btn-primary" name="submit" value="Отправить"/>
                                </div>

                            </form>
                        </div>
                    </div>

                    {else}
                    <p>
                        <span class="success">{$form_result.message|default:"Спасибо! Ваше сообщение принято."}</span>
                    </p>
                    {/if}
                </div>
            </div>
        </section>
    </div>
</section>