
<template>
    <div class="login_box">
        <div class="login-main">
            <div class="login-container">
               <div class="logo-con">
                 <div class="con-top">
                     <!-- AutoGo -->
                     <!-- <img src="../../assets/logo.jpg" alt=""> -->
                 </div>
                 <div class="con-bottom">车联网云平台</div>
               </div>
               <div class="login-form">
                 <el-form ref="loginForm" :model="loginform" :rules="ruleForm">
                    <el-form-item prop="email">
                        <i class="iconfont icon-yonghuguanli"></i>
                        <el-input type="text" v-model="loginform.email" @focus="errMsg=''" placeholder="用户名" autoComplete="off" clearable  />
                    </el-form-item>
                    <el-form-item prop="password" style='margin-bottom:0;height:75px;'>
                        <i class="iconfont icon-quanxian"></i>
                        <el-input type="password" v-model="loginform.password"
                            @focus="errMsg=''" placeholder="密码" autoComplete="off" clearable  />
                        <span class='error'>{{errMsg}}</span>
                    </el-form-item>

                    <button @click.prevent="handleSubmit('loginForm')">登录</button>
                </el-form>
               </div>
            </div>
        </div>
    </div>
</template>
<script src='./index.js'></script>

<style lang="scss">
@import "./index.scss";
span.error{
    font-size:12px;
    color:#f56c6c;
    position:relative;
    bottom:8px;
}
</style>

