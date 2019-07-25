// import api from '../api/admin/admin';
// import md5 from '../utils/md5';
// import util from '../utils/util';


export default {
    data() {
        return {
            loginform: {
                email: "",
                password: ""
            },
            errMsg: '',

            ruleForm: {
                email: [{
                    required: true,
                    message: "请填写用户名",
                    trigger: "blur"
                }],
                password: [{
                    required: true,
                    message: "请填写密码",
                    trigger: "blur"
                }]
            },
        };
    },
    methods: {
        handleSubmit(name) {
            localStorage.clear();
            this.$refs[name].validate(valid => {
                //验证通过
                if (valid) {
                    // let passwd = md5.hex_md5(this.loginform.password);

                    // api.Login({ email: this.loginform.email, password: passwd }).then(rsp => {
                    //     if (!rsp.err) {
                    //         localStorage.setItem('token', rsp.token);
                    //         localStorage.setItem('orgid',rsp.org_id);

                    //         localStorage.setItem('username',this.loginform.email);

                    //         // 存储登陆成功信息
                    //         localStorage.setItem('loginsuccess', 1);

                    //         this.$router.push({ path: '/home' });

                    //     } else {
                    //         this.errMsg = rsp.err.msg;
                    //         return Promise.reject(rsp.err); //靠弹窗抛出

                    //     }
                    
                    // }).catch(err=>this.$Message.error(err.msg));
                }
            })

        },


    },

    mounted() {
        this.errMsg = localStorage.errorMessage||'';
        this.loginform.email = localStorage.username || '';
        this.$forceUpdate();
    },
};