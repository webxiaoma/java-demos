/************************

Time: 2017-4-7
edition : 1.0
author: maxinxiang (webxiaoma)

说明：该插件用于日常页面的一些特定功能，可以使用中针对某个项目存在漏洞，欢迎指出
QQ 1376557466

注意事项：
   1.本插件是在jq基础上来封装的，所以使用前请引入jq
   2.因为部分功能对jq版本有要求，建议引入 1.7+ 版本的jq文件，

************************/


$(function(){


(function(rootObj){
  // ********************点击按钮页面滑动到指定位置的效果方法 start**********************
   var mScrollTarget=rootObj.mScrollTarget;
   $.fn[mScrollTarget]=function(obj){
       // 默认值
     var __def__={
       time:300,
       sumTop:0
     }
        $.extend(this,__def__,obj);
        
        if(this.el == null){
           throw "el is required" //必须参数抛出错误
        }

    var tag=this.el;
    var time=this.time;
    var sumTop=this.sumTop; 
    $(this).children().on("click",function(){
      var index= $(this).index(); 
      var hetop=$(tag).eq(index).position().top-sumTop;
      $("body,html").animate({"scrollTop":hetop},time)
        })
    }

// ********************点击按钮页面滑动到指定位置的效果方法 end**********************

// ********************  滚动页面加载动画 start**********************
    
    var mAnimate=rootObj.mAnimate; 
     $.fn[mAnimate]=function(funOne,funTwo,topPX){
             var __def__={
              funOne:function(){},
              funTwo:function(){},
              topPX:0
             }
             var __pro__={
              funOne:funOne,
              funTwo:funTwo,
              topPX:topPX
             }
           
           // 判断第二个参数回调函数存不存在
              if(typeof arguments[1] == "number" ){
                 __pro__.funTwo= function () {};
                 __pro__.topPX=arguments[1];
                 
              }
           
          $.extend(this,__def__,__pro__);

             var that=this;
                
               $(window).scroll(function(){
              
                   var scro= $("body,heml").scrollTop()
                   var top = that.position().top-scro; // 到达动画开始位置
                   var height=that.height()+that.position().top; //离开动画结束位置
                   
                   if(top<that.topPX && scro<height){
                      that.funOne.call(that);
                   }else {
                      that.funTwo.call(that);
                     
                   }
               })
     }

// ********************  滚动页面加载动画 end**********************

// ******************** 表单验证 start *************************

     var mInput = rootObj.mInput;
     $.fn[mInput]=function(obj){
        var __def__={
          event:"dfsd",
          mtype:[],
          inptest:{mtype:null,mval:null},
          success:function(){},
          error:function(){}
        }
        this.data("mInpMun",0);  //对每个验证表单做标记，在提交时使用
         // 对象整合
        $.extend(this,__def__,obj) 
        var that=this; 

        // 存储正则
        var phone=/^1[34578]\d{9}$/;   //手机号验证
        var email=/[\w!#$%&'*+=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/  //邮箱验证
        var card=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\sd|X|x)$)/  //身份证验证
        var name=/^[\u4E00-\u9FA5]{2,6}(?:·[\u4E00-\u9FA5]{2,6})*$|^[A-Za-z][A-Za-z\s]*[A-Za-z]$/   //匹配姓名(包含中文名字和英文名字)
        var username=/^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/   // 用户名(中文、英文、数字但不包括下划线等符号)
        var post=/[1-9]\d{5}(?!\d)/  //中国邮编
        var passworda=/(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,18}/  //数字和字母(字母不区分大小写)
        var passwordb=/^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])).{6,18}$/  //数字和字母(字母区分大小写)
        var passwordc=/((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{8,16}/i //数字和字母还有特殊字符任意两字符
        var passwordd=/(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{8,16}/i //数字、字母、特殊字符的组合，3者都有
        var inpTest=[
            {mtype:"phone",mval:phone},
            {mtype:"email",mval:email},
            {mtype:"card",mval:card},
            {mtype:"name",mval:name},
            {mtype:"username",mval:username},
            {mtype:"post",mval:post},
            {mtype:"passworda",mval:passworda},
            {mtype:"passwordb",mval:passwordb},
            {mtype:"passwordc",mval:passwordc},
            {mtype:"passwordc",mval:passwordd},
        ]
        
        // 加入手动添加的正则
        var Imtype=that.inptest.mtype;
        if(Imtype!==null || Imtype!==""){
          for(var i=0;i<inpTest.length;i++){
            if(Imtype==inpTest[i].mtype){
              throw "variable " + Imtype + " has existed, please change"  //检查变量是否存在，如果存在抛出错误
            }
          }
         inpTest.push(that.inptest)

        }

      // 验证表单
        $(this).on(this.event,function(){

        // 查看需要验证几种表单类型
        var value=that.val();
        var mun = 0;
            for(var i=0;i<that.mtype.length;i++){
              for(var s=0; s<inpTest.length;s++){
                 if(that.mtype[i]==inpTest[s].mtype){
                    if(inpTest[s].mval.test(value)){
                      mun++;
                      that.data("mInpMun",1);
                    }
                   
                 }
              }
             
            }
         
            // 判断表单正确性
            if(mun){
                that.success() 

            }else{
                that.error(value)
            }
        })
     }

// ******************** 表单验证 end *************************

// ******************** 表单提交证 start *************************
    var mSubmit=rootObj.mSubmit;
    $.fn[mSubmit]=function(fun){
      var inp=document.getElementsByTagName('input');
      var  that=this;
       $(this).on("submit",function(){
       // 检测每个需要验证的表单是否符合要求
         for(var i=0;i<inp.length;i++){
           if($(inp[i]).data("mInpMun")==0){
             var obje=$(inp[i])
             fun(obje)
             return false;
               
           }
         }
        
       })
    }


// ******************** 表单提交证 end *************************

})({
   mScrollTarget:"mScrollTarget", // 点击按钮页面滑动到指定位置的效果
   mAnimate:"mAnimate",           // 滚动页面加载动画
   mInput:"mInput",                // 表单验证
   mSubmit:"mSubmit"               //表单提交
})



})