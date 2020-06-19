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
           <div class="dashboard__right ">
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
                  </div>
              </div>
              <div>
             <small>This is your profile information on our platform</small>
             <hr>
                  <form>
                        <div class="form-group">
                          <label for="fname">Full Name *</label>
                          <input type="text" class="form-control" disabled v-bind:value="name">
                        </div>
                        <div class="form-group">
                          <label for="fname">Your Referral ID *</label>
                          <input type="text" class="form-control" disabled v-bind:value="id">
                        </div>
                     <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="email">Email Address *</label>
                          <input type="text" class="form-control" disabled v-bind:value="email">
                        </div>
                      </div>
                       <div class="col-md-6">
                        <div class="form-group">
                          <label for="phone">Phone Number *</label>
                          <input type="text" class="form-control" disabled v-bind:value="phone">
                        </div>
                      </div>
                    </div>
                  </form>
              </div>
            <!--End of Dashboard
            =========================-->
              <br>
           </div>
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
            email:null,
            name:null,
            phone:null,
            id:null,
        }
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
                this.phone = doc.data().phone
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
  .dashboard__left{
        background: #252525;
        padding: 1rem 2rem;
        color:#fff;
        height: 100% !important;
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
            font-size: 1.1rem;
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
       small{
           color:#627081;
           font-size: .8rem;
           font-weight: bold;
           opacity: .8;
       }
       .right__wrapper{
              padding: 2rem 2rem;
        }
        .dashoard__heading{
           background-color: #FBAE1C;
           padding: 1.2rem 2rem;
           display: flex;
           justify-content: space-between;
       }
        .summary__wrapper{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 30px;
            // margin-top: 2rem;
            .summary__card{
                display: flex;
                padding: 1.3rem 2rem;
                border-radius: 4px;
                // font-size: .9rem;
                color:#fff !important;
                margin-bottom: 2rem;
                p{
                    color:#fff !important;
                    padding-top: .4rem;
                    opacity: .9;
                    font-size: .7rem;
                    line-height: 1.4rem;

                }
                h5{
                    color:#fff;
                    font-size: 1rem;
                }
            }
            .one{
                    background: #ff808b;
                }
                .two{
                    background: #757afc;
                }
                .three{
                    background: #0facf3;
                }
                .four{
                    background: #251F68;
                }
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
                 .request__btn{
                     background: #251F68;
                     color:#fff;
                     margin-top: 1.5rem;
                     border-radius: 3px;
                     padding: 1rem 3rem;
                     border: none;
                     font-size: .9rem;
                 }
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
</style>