$ = jQuery.noConflict();

$(document).ready(function () {

    let slider_items = $('.s_item');
    let s_indicators = $('.indicator div');
    let i=0;
    //slider();
    // function slider() {
        // for (let i = 0; i < 3; i++) {
        //     //$(slider_items[i+1]).fadeOut(200);


        // }
        // let intervalID;
        // function slider() {
        //     if (i === 0) {
        //         $(slider_items[2]).removeClass('active');
        //         $(s_indicators[2]).removeClass('active');
        //         i++
        //         $(slider_items[0]).addClass('active');
        //         $(s_indicators[0]).addClass('active');
        //     }
        //     else if (i === 1) {
        //         $(slider_items[0]).removeClass('active');
        //         $(s_indicators[0]).removeClass('active');
        //         i++
        //         $(slider_items[1]).addClass('active');
        //         $(s_indicators[1]).addClass('active');
        //     }
        //     else if (i === 2) {
        //         i++
        //         $(slider_items[1]).removeClass('active');
        //         $(s_indicators[1]).removeClass('active');
        //         i = 0;
        //         $(slider_items[2]).addClass('active');
        //         $(s_indicators[2]).addClass('active');
        //     }

        // }
        // //i = 0;
        // if (!intervalID) {
        //     intervalID = setInterval(() => {
        //         slider()
        //     }, 2000);
        // }
    // }

    //FACILITIES RUN SND STOP ON HOVER
    // $(document).on('mouseover','.s_item',()=>{
    //     clearInterval(intervalID,()=>{
    //         intervalID=null;
    //     })
    // })
    // $(document).on('mouseleave','.s_item',()=>{
    //     intervalID = setInterval(() => {
    //         slider()
    //     }, 2000);
    // })

    //FACILITIES ANCOR CLICK FUNCTION
    $(document).on('click','.ancor:eq(0)',()=>{
        if($('.s_item.active').attr('data-item')!='s-1')
        {
            $('.s_item.active').removeClass('active').prev().addClass('active');
            $('.indicator div.active').removeClass('active').prev().addClass('active');
            
        }
        
        else{
            $('.indicator div.active').removeClass('active');
            $('.s_item.active').removeClass('active');
            $('.s_item:eq(2)').addClass('active');
            $('.indicator div:eq(2)').addClass('active');
        }
        
    })
    $(document).on('click','.ancor:eq(1)',()=>{
        if($('.s_item.active').attr('data-item')!='s-3')
        {
            $('.s_item.active').removeClass('active').next().addClass('active');
            $('.indicator div.active').removeClass('active').next().addClass('active');
        }
        
        else{
            $('.indicator div.active').removeClass('active');
            $('.s_item.active').removeClass('active');
            $('.s_item:eq(0)').addClass('active');
            $('.indicator div:eq(0)').addClass('active');
        }
        
    })

    $(document).on('click','.menu_bars',()=>{
        //let widt=$('.m_menu').width()
        
        //($($('.m_menu')).height()===400)?$($('.m_menu')).animate({height:0},300):$($('.m_menu')).animate({height:400},300)
        if($($('.m_menu')).width()===270){
            $('.menu_bars').css('padding-left','2px')
            $('.bar:first-child + .bar').css('visibility','visible');
            $('.bar:first-child').css('transform','rotate(0deg) translate(0px,0px)');
            $('.bar:last-child').css('transform','rotate(0deg) translate(0px,0px)');
            $($('.m_menu')).animate({width:0},300)
        }
        else{
            $('.menu_bars').css('padding-left','5px')
            $('.bar:first-child + .bar').css('visibility','hidden');
            $('.bar:first-child').css('transform','rotate(45deg) translate(6px,10px)');
            $('.bar:last-child').css('transform','rotate(-45deg) translate(7px,-10px)');
            $($('.m_menu')).animate({width:270},300)
        }
    })

    //NOTICE BOARD STOP AND RUN ON HOVER
    // $(document).on('mouseover','.notices',()=>{
    //     clearInterval(intervalID,()=>{
    //         intervalID=null;
    //     })
    // })
    // $(document).on('mouseleave','.notices',()=>{
    //     intervalID = setInterval(() => {
    //         slider()
    //     }, 2000);
    // })


    //PAYPAL INTEGRATION
    paypal.Buttons({

        // Set up the transaction
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '88.44'
                    }
                }]
            });
        },

        // Finalize the transaction
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {
                // Successful capture! For demo purposes:
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                var transaction = orderData.purchase_units[0].payments.captures[0];
                alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');

                // Replace the above to show a success message within this page, e.g.
                // const element = document.getElementById('paypal-button-container');
                // element.innerHTML = '';
                // element.innerHTML = '<h3>Thank you for your payment!</h3>';
                // Or go to another URL:  actions.redirect('thank_you.html');
            });
        }


    }).render('#paypal-button-container');
})