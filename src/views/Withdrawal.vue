<template>
    <div class="dashboard">
        <div class="dashboard__wrapper">
           <div class="dashboard__left" id="dashboard__left">
            <div class="heading text-center pt-3">
                    <img src="../assets/images/user.png" class="user__img" alt=""><br>
                       <small>{{id}}</small><br><br>
                       <!-- <h4>{{ first_name }} {{ last_name }}</h4> -->
                         <small>Please refresh the page if no data was loaded or contact support if you have any issue</small>
            </div>
            <br /><br />
            <ul>
               <li><router-link to="/dashboard/overview"><i class="fa fa-cubes icons"></i>&nbsp;&nbsp; Overview</router-link></li><hr> 
                <li><router-link to="/dashboard/profile"><i class="fa fa-users icons"></i>&nbsp;&nbsp; Profile</router-link></li><hr>
                 <li><router-link to="/dashboard/withdrawal"><i class="fa fa-clone icons"></i>&nbsp;&nbsp; Make Withdrawal</router-link></li><hr> 
               <li @click="logOut()" class="logout"><i class="fa fa-database icons"></i>&nbsp;&nbsp; Logout</li><hr>
            </ul>
            <br><br><br><br>
           </div>
           <div class="dashboard__right">
               <div class="dashoard__heading d-none d-md-block">
                 <div class="heading__content d-flex justify-content-between">
                      <div class="toggler">
                      <i class="fa fa-bars"></i>
                  </div>
                  <div class="email__holder">
                      <h6>{{email}}</h6>
                  </div>
                 </div>
               </div>
              <div class="right__wrapper">
                  <div class="heading d-flex justify-content-between">
                  <div class="content">
                   <h5>Welcome Back!</h5>
                      <h4>{{ name }}</h4>
                      <!-- <small>{{ firstCode }}</small> -->
                  <!-- <small>{{ accountNumber }}</small> -->
                  </div>
                    <div @click.prevent="show()" class="navbar__toggler">
                      <i class="fa fa-bars"></i>
                  </div>
                  <hr>
              </div>
              <div id="dashboard">
             <small>You can transfer your referral commission into any bank account instantly</small>
             <hr>
                  <div class="row">
                   <div class="col-md-12">
                        <form @submit.prevent="withdraw()">
                    <div class="form-group">
                        <label for="id">Identification Numbar</label>
                        <input type="text" class="form-control" disabled  v-bind:value="id">
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="bank_name">Your Bank</label>
                               <input type="text" class="form-control" v-model="bank_name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="account">Your Account Number</label>
                                <input type="tel" class="form-control" v-model="account_number">
                            </div>
                        </div>
                    </div>
                     <div class="form-group">
                        <label for="account">Your Account Name</label>
                        <input type="text" class="form-control" v-model="account_name">
                            </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="date" class="form-control" placeholder="When do you want the transfer" v-model="withdraw_date">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Amount to withdraw" v-model="amount">
                        </div>
                        </div>
                    </div><div v-if="err" class="alert alert-danger animated slideInRight">
                                {{ err }}
                            </div>
                            <div v-if="success" class="alert alert-success">
                                {{ success }}
                            </div>
                    <button type="submit" class="withraw_btn">Withdraw</button>
                </form>
                   </div>
               </div>
              </div>
              </div>
            <!--End of Dashboard
            =========================-->
              <br>
           </div>
        </div>
    </div>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    data(){
        return{
            id:null,
            bank_name:null,
            account_number:null,
            account_name:null,
            withdraw_date:null,
            amount:null,
            err:null,
            success:null,
            email:null,
            phone:null,
            available_balance:null,
            name:null
        }
    },
     mounted(){
        //Get current user that just logged in
        let user = firebase.auth().currentUser
        //Now check the database to fetch the details
        db.collection('affiliates').where("user_id", "==", user.uid).get().then(snapshot =>{
            snapshot.forEach((doc) =>{
                this.name = doc.data().name,
                this.email = doc.data().email,
                this.id = doc.data().user_id,
                this.phone = doc.data().phone,
                this.available_balance = doc.data().available_balance
            })
        })
    },
     methods:{
          show:function(){
            const navLeft = document.querySelector('#dashboard__left')
            navLeft.classList.toggle('navLeft')
        },
        //Function for the user to logout
        logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Signin'})
           })
        },
        //Function for the withdrawal process here
        withdraw(){
           setTimeout(() => {
               // Check if the user has filled the form
           if(!this.bank_name || !this.account_number || !this.account_name || !this.withdraw_date || !this.amount){
               this.err = 'Please completely fill the form and try again'
               this.removeAlert()
               //Now check if the amount to be withdrawn is available in the wallet
           }else if(this.amount > this.available_balance){
               this.err = 'Transaction failed. You have insufficient funds in your wallet!'
               this.removeAlert()
           }
           
           else{
               db.collection('withdrawals').add({
                    id: this.id,
                    account_name: this.account_name,
                    account_number: this.account_number,
                    withdraw_date: this.withdraw_date,
                    bank_name: this.bank_name,
                    amount: this.amount
               }).then(()=>{
                   this.success = 'Your request was succussfully submit and your request is being processed'
               })
           }
           }, 1000);
        },
         removeAlert(){
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 5000);
    }
    },
        mounted(){
        //Get current user that just logged in
        let user = firebase.auth().currentUser

        //Now check the database to fetch the details
       //Now check the database to fetch the details
       db.collection('affiliates').where("user_id", "==", user.uid).get().then(snapshot =>{
            snapshot.forEach((doc) =>{
                this.name = doc.data().name,
                this.email = doc.data().email,
                this.id = doc.data().user_id,
                this.phone = doc.data().phone,
                this.available_balance = doc.data().available_balance
            })
        })
    }
    }
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.dashboard{
    width: 100vw;
    .dashboard__wrapper{
    display: grid;
    grid-template-columns:  260px 1fr;
    // grid-gap: 30px;
    // height: 100vh !important;
    .dashboard__left{
        background: #252525;
        padding: 1rem 2rem;
        color:#fff;
        // height: 100vh !important;
        small{
            opacity: .6;
            font-size: .7rem;
        }
        .user__img{
            max-width: 80px;
            height: auto;
            margin-bottom: 2rem;
        }
        h5{
            opacity: .8;
            font-size: 1rem;
            padding-bottom: .5rem;
        }
        ul{
            li a, .logout{
                cursor: pointer !important;
                // border-bottom: 1px solid #ccc;
                line-height: 3;
                font-size: .8rem;
                opacity: .7;
                color: #fff;
                text-decoration: none !important;
                .icons{
                    margin-right: 1rem !important;
                }
            }
        }
    }
    .dashboard__right{
        background: #F4F6F9;
        // padding: 3rem 2.5rem;
        .right__wrapper{
              padding: 2rem 2rem;
            .navbar__toggler{
                    color:$primary-color;
                    position: absolute;
                    right: 5%;
                    top: 10%;
                }
        }
       small{
            color:#627081;
           font-size: .8rem;
           font-weight: bold;
           opacity: .8;
       }
       .dashoard__heading{
           background-color: #FBAE1C;
           padding: 1.2rem 2rem;
           display: flex;
           justify-content: space-between;
          h6{
               font-size: .9rem;
               color: #fff;
          } 
       }
        .summary__wrapper{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 20px;
            margin-top: 1rem;
            .summary__card{
                display: flex;
                padding: .5rem 2rem;
                border-radius: 4px;
                // font-size: .9rem;
                color:#fff !important;
                margin-bottom: 2rem;
                p{
                    color:#fff !important;
                    padding-top: 0rem;
                    opacity: .9;
                    font-size: .7rem;
                    line-height: 1.4rem;

                }
                h6{
                    font-size: 1rem !important;
                }
                h5{
                    color:#fff;
                    font-size: 1rem;
                }
            }
            .one{
                    background: #00C292;
                }
                .two{
                    background: #757afc;
                }
                .three{
                    background: #EF5350;
                }
                .four{
                    background: #251F68;
                   
                }
                .card__4{
                    background: $primary-color;
                    padding: 1rem .5rem !important;
                    h6{
                        font-size: .9rem !important;
                    }
                }
                
        }
        .note{
            color: #627081 !important;
            font-size: .8rem;
            line-height: 1.7;
        }
            //REQUEST FORM
            form{
                 box-shadow: 0px 6px 60px -7px rgba(69,77,89,0.15);
                 padding: 2rem;
                 margin: 2rem 0;
                 h4{
                     font-weight: bold;
                     font-size: 1rem;
                     color:#454545;
                 }
                 small{
                     color:#545454;
                     font-weight: bold;
                     opacity: .7;
                     font-size: .8rem;
                 }
                 label{
                     font-size: .8rem;
                     font-weight: bold;
                     color:#545454;
                     opacity: .7;
                 }
                 input, select{
                     height: 2.8rem;
                     box-shadow: none;
                     border-radius: 0px;
                     font-size: .9rem;
                 }
                .withraw_btn{
                    background: linear-gradient(to right, $secondary-color , $tertiary-color);
                    color: #fff;
                    text-decoration: none;
                    padding: 1.1rem 2rem;
                    border-radius: 50px;
                    transition: all ease-in-out .5s;
                    outline:none;
                    border:none;
                 .alert{
                     font-size: .9rem;
                 }
            }
        .invest__img{
            max-height: 50vh;
            width: 100vw;
        }
        h5{
            color:#454545;
            font-weight: bold;
            padding-bottom: 1.2rem;
            padding-top: 1rem;
        }
        .red{
            background: rgb(161, 39, 39);
            color: #fff;
            padding: 1rem .5rem;
            border-radius: 3px;
            font-size: .85rem;
            opacity: .9;
             a{
                color:#fff !important;
            }
        }
        p{
            padding-top:1rem;
            color:#545454;
            font-size: .9rem;
        }
    }
}
}
.navbar__toggler{
    display: none
}

.navLeft{
    display: block !important;
    transition: all ease-in-out .5s;
    width: 70%;
    position: absolute;
    z-index: 100;
    bottom: 0 !important;
    top: 0 !important;
}

//MEDIA QUERIES FOR SMALLER SCREENS
@media only screen and (max-width: 600px){
    .dashboard{
        // grid-template-columns: 1fr;
        position: relative;
    }
    .dashboard__left{
        background: #252525 !important;
        display: none;
    }
.dashboard__right{
    width: 100vw !important;
    padding: 3rem 1.2rem !important;
     .right__wrapper{
              padding: 1rem .5rem !important;
        }
}
.summary__wrapper{
    grid-gap: 5px !important;
}
.navbar__toggler{
    display: block !important;
}
}
.loader{
    max-width: 150px;
    height: auto;
}
}
</style>