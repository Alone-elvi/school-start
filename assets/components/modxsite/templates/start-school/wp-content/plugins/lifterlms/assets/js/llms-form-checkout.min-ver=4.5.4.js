jQuery(document).ready(function(t){t("#llms_country_options").chosen(),get_current_price(),t("#show-coupon").on("click",display_coupon_form),t(".llms-payment-options input[type=radio]").change(display_current_price),t(".llms-payment-methods input[type=radio]").length&&"creditcard"==t(".llms-payment-methods input[type=radio]:checked").data("payment-type")&&t(".llms-creditcard-fields").show(),t(".llms-payment-methods input[type=radio]").change(display_credit_card_fields)}),function(t){display_credit_card_fields=function(){"creditcard"==t(this).data("payment-type")?t(".llms-creditcard-fields").slideDown("fast"):t(".llms-creditcard-fields").slideUp("fast")}}(jQuery),function(t){display_coupon_form=function(){return t(this).hide(),t("#llms-checkout-coupon").show().slideDown("slow"),!1}}(jQuery),function(t){display_current_price=function(){var e=t(this).attr("id"),i=t("#"+e).parent().find("label").html();t(".llms-final-price").html(i)}}(jQuery),function(t){get_current_price=function(){var e=t(".llms-payment-options input[type=radio]:checked"),i=t(e).attr("id"),e=t("#"+i).parent().find("label").html();t(".llms-final-price").html(e)}}(jQuery);